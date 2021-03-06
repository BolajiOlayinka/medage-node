const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const shortid = require("shortid");
const cloudinary = require("../utils/cloudinary");

const generateJwtToken = (_id, role) => {
  return jwt.sign({ _id, role }, `${process.env.JWT_SECRET}`, {
    expiresIn: "1h",
  });
};

exports.signup = async (req, res) => {
  try {
    const urls = [];
    if (req.files) {
      const files = Object.values(req.files);
      for (const file of files) {
        const { path } = file[0];
        const newPath = await cloudinary.uploader.upload(path, {
          folder: "user",
        });
        urls.push(newPath);
      }
    }

    // res.send(req)
    User.findOne({ email: req.body.email }).exec(async (error, user) => {
      if (user)
        return res.status(400).json({
          error: "User already registered",
        });

      const { email, password, user_type, contact_number, business_name,licence_no } =
        req.body;
      const hash_password = await bcrypt.hash(password, 10);
      const _user = new User({
        email,
        password:hash_password,
        user_type,
        contact_number,
        business_name,
        hash_password,
        licence_no,
        licence_doc: urls[0] !== undefined ? urls[0].url : "",
        profile_picture: urls[1] !== undefined ? urls[1].url : "",
        username: shortid.generate(),
      });
      _user.save((error, user) => {
        if (error) {
          console.log(error);
          return res.status(400).json({
            message: "Something went wrong",
          });
        }

        if (user) {
          const token = generateJwtToken(user._id, user.role);
          const { _id, email, role, business_name } = user;
          return res.status(200).json({
            token,
            user: { _id, email, business_name, role },
          });
        }
      });
    });
  } catch (e) {
    console.log(e);
  }
};

exports.signin = (req, res) => {
  User.findOne({ email: req.body.email }).exec(async (error, user) => {
    if (error) return res.status(400).json({ error });
    if (user) {
      const isPassword = await user.authenticate(req.body.password);
      if (isPassword && user.role === "user") {
        // const token = jwt.sign(
        //   { _id: user._id, role: user.role },
        //   process.env.JWT_SECRET,
        //   { expiresIn: "1d" }
        // );
        const token = generateJwtToken(user._id, user.role);
        const { _id, email, role, business_name } = user;
        res.status(200).json({
          token,
          user: { _id, email, role, business_name },
        });
      } else {
        return res.status(401).json({
          message: "Unauthorised Sign in, please check email and password",
        });
      }
    } else {
      return res
        .status(401)
        .json({
          message: "UnAuthorised Sign in, please check your email and password",
        });
    }
  });
};

// Get all and return all users.
exports.getAll = (req, res) => {
  User.find()
    .then((newuser) => {
      // console.log(req)
      const page = parseInt(req.query.page);
      const limit = parseInt(req.query.limit);
      const startIndex = (page - 1) * limit;
      const endIndex = page * limit;
      const result = newuser.slice(startIndex, endIndex);
      if (!page) {
        res.send(newuser);
      } else {
        res.send(result);
      }
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving all users",
      });
    });
};
exports.getById = (req, res) => {
  User.findById(req.params.userId)
    .then((existinguser) => {
      if (existinguser) {
        return res.status(200).json({
          info: "User Fetched",
          data: existinguser,
          status: 200,
        });
        // res.send(newproduct);
      }
      return res.status(404).send({
        message: "User does not exist with id " + req.params.userId,
      });
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "User does not exist with id " + req.params.userId,
        });
      }
      return res.status(500).send({
        message:
          "Some error occurred while retrieving the User with the User ID" +
          req.params.userId,
      });
    });
};