const User = require("../models/user.model.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const shortid = require("shortid");
const cloudinary = require("../utils/cloudinary");

const generateJwtToken = (_id, role) => {
  return jwt.sign({ _id, role },`${process.env.JWT_SECRET}`, {
    expiresIn: "1d",
  });
};

exports.signup = async (req, res) => {
 try{
  const urls = [];
   if(req.files){
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
     
    const { email, password,user_type,contact_number,business_name  } = req.body;
    const hash_password = await bcrypt.hash(password, 10);
    const _user = new User({
      email,
      password,
      user_type,
      contact_number,
      business_name,
      hash_password,
      licence_doc:urls[0] !==undefined ? urls[0].url : '',
      profile_picture:urls[1] !==undefined ? urls[1].url : '',
      username: shortid.generate(),
    });
     _user.save((error, user) => {
      if (error) {
        console.log(error)
        return res.status(400).json({
          message: "Something went wrong",
        });
      }

      if (user) {
        const token = generateJwtToken(user._id, user.role);
        const { _id,email, role, business_name } = user;
        return res.status(201).json({
          token,
          user: { _id, email, business_name, role },
        });
      }
    });
 })
    
    
  
  
  

    // _user.save((error, user) => {
    //   if (error) {
    //     return res.status(400).json({
    //       message: "Something went wrong",
    //     });
    //   }

    //   if (user) {
    //     const token = generateJwtToken(user._id, user.role);
    //     const { _id, firstName, lastName, email, role, fullName } = user;
    //     return res.status(201).json({
    //       token,
    //       user: { _id, firstName, lastName, email, role, fullName },
    //     });
    //   }
    // });
  }catch(e){
    console.log(e)
  }
}

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
        const { _id, firstName, lastName, email, role, fullName } = user;
        res.status(200).json({
          token,
          user: { _id, firstName, lastName, email, role, fullName },
        });
      } else {
        return res.status(400).json({
          message: "Something went wrong",
        });
      }
    } else {
      return res.status(400).json({ message: "Something went wrong" });
    }
  });
};