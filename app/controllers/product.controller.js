const express = require('express');

// const upload = require('../utils/multer');
// const cloudinary = require('../utils/cloudinary');
// const {CloudinaryStorage} = require("multer-storage-cloudinary");
// const multer = require('multer');
const cloudinary =require('../utils/cloudinary');
const Product = require("../models/product.model.js");


  // app.post('/api/images', parser.single("image"), (req, res) => {
  //   console.log(req.file) // to see what is returned to you
  //   const image = {};
  //   image.url = req.file.url;
  //   image.id = req.file.public_id;
  //   Image.create(image) // save image information in database
  //     .then(newImage => res.json(newImage))
  //     .catch(err => console.log(err));
  // });
// exports.create=(parser.single(), async(req,res)=>{
//   console.log(req.file)
// })

exports.create=async(req, res) => {
  // console.log(req.file)
  // console.log(req.files)
  if (!req.files) return res.send("Please upload a file");
  const {title,display_title,quantity_available,price,description,product_measurement,nafdac_reg,
    product_category,product_sub_category,product_user} = req.body
  // console.log(req.body);
  if (!title) {
    return res.status(400).send({
      message: "Please enter Product Title",
    });
  }
  if (!req.body.display_title) {
    return res.status(400).send({
      message: "Please enter Product Description",
    });
  }
  if (!req.body.quantity_available) {
    return res.status(400).send({
      message: "Please enter Price",
    });
  }
try{
  // console.log(req.files);
  const files = Object.values(req.files)
  // console.log(files)
  // console.log(Object.values(files));
  const urls=[];
  for (const file of files){
    // console.log(file[0].path)
    const {path} = file[0];
    const newPath = await cloudinary.uploader.upload(path,{folder:"product"});
    urls.push(newPath);
  }
// console.log(urls)
  // console.log(urls)
  // const result = await cloudinary.uploader.upload(req.files);
  // console.log(result)
  // res.send('1,2,3')
  const product = new Product({
    title:req.body.title,
    display_title:display_title,
    quantity_available:quantity_available,
    price:price,
    thumbnail_one:urls[0].url,
    thumbnail_two:urls[1].url,
    thumbnail_three:urls[2].url,
    nafdac_reg:nafdac_reg,
    description:description,
    product_measurement:product_measurement,
    product_category:product_category,
    product_sub_category:product_sub_category,
    product_user:product_user
    
  });
  await product
  .save()
  .then((newproduct) => {
    // res.send(newproduct);
    if (newproduct) {
      return res.status(200).json({
        info: 'Product Created',
        data: newproduct,
        status:200
      });
  
  }})
}catch(err) {
  console.log(err)
      res.status(500).send({
        message: err.message || "Some error occurred while creating the product.",
      });
    };
}


// Get all and return all products.
exports.getAll = (req, res) => {
  Product.find()
    .then((newproduct) => {
      // console.log(req)
      const page = parseInt(req.query.page);
      const limit = parseInt(req.query.limit);
      const startIndex = (page - 1) * limit;
      const endIndex = page * limit;
      const result = newproduct.slice(startIndex, endIndex);
      if (!page) {
        res.send(newproduct);
      } else {
        res.send(result);
      }
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving all products",
      });
    });
};


exports.getById = (req, res) => {
  Product.findById(req.params.productId)

    .then((existingproduct) => {
      if (existingproduct) {
        return res.status(200).json({
          info: 'Product Information Updated',
          data: existingproduct,
          status:200
        });
        // res.send(newproduct);
      }
      return res.status(404).send({
        message: "Product does not exist with id " + req.params.productId,
      });
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "Product does not exist with id " + req.params.productId,
        });
      }
      return res.status(500).send({
        message:
          "Some error occurred while retrieving the Product with the Product ID" +
          req.params.productId,
      });
    });
};


exports.update = (req, res) => {
  // Validate Request because title is required
  if (!req.body.product_name) {
    return res.status(400).send({
      message: "Please enter Product Name",
    });
  }
  if (!req.body.product_description) {
    return res.status(400).send({
      message: "Please enter Product Description",
    });
  }
  if (!req.body.product_varieties.price) {
    return res.status(400).send({
      message: "Please enter Price",
    });
  }

  // Find Product and update it
  Product.findByIdAndUpdate(
    req.params.productId,
    {
    product_name: req.body.product_name,
    product_description: req.body.product_description,
    product_varieties:req.body.product_varieties,
    color:req.body.color,
    size:req.body.size,
    quantity:req.body.quantity,
    price:req.body.price
    },
    { new: true }
  )
    .then((newproduct) => {
      // console.log(newproduct)
      if (newproduct) {
        return res.status(200).json({
          info: 'Product Information Updated',
          data: newproduct,
          status:200
        });
        // res.send(newproduct);
      }
      return res.status(404).send({
        message: "Product does not exist with Id ",
      });
    })
    .catch((err) => {
      console.log(err)
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "Product does not exist with Id " + req.params.productId,
        });
      }
      return res.status(500).send({
        message:
          "Some error occurred while updating the Product Information" +
          req.params.productId,
      });
    });
};


exports.delete = (req, res) => {
  Product.findByIdAndRemove(req.params.productId)
    .then((newproduct) => {
      if (newproduct) {
        return res.status(200).json({
          info: 'Product Information Deleted Successfully',
          data: newproduct,
          status:200
        });
        // res.send(newproduct);
      }
      return res.status(404).send({
        message: "Product does not exist with Id" + req.params.productId,
      });
    })
    .catch((err) => {
      console.log(err.response)
      if (err.kind === "ObjectId" || err.name === "NotFound") {
        return res.status(404).send({
          message: "Product does not exist with Id" + req.params.productId,
        });
      }
      return res.status(500).send({
        message:
          "Some error occurred while deleting the product with productId" +
          req.params.productId,
      });
    });
};
