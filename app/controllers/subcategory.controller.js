// const express = require('express');
const Product = require("../models/product.model.js");


exports.create = (req, res) => {
  // console.log(req.body);
  // Validate request because in model we required the title
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

  const product = new Product({
    product_name: req.body.product_name,
    product_description: req.body.product_description,
    product_varieties:req.body.product_varieties,
    color:req.body.color,
    size:req.body.size,
    quantity:req.body.quantity,
    price:req.body.price
  });
  product
    .save()
    .then((newproduct) => {
      res.send(newproduct);

      // console.log(res)
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the product.",
      });
    });
};

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
