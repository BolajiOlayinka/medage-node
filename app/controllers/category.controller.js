// const express = require('express');
const Category = require("../models/category.model.js");


exports.create = (req, res) => {
  // console.log(req.body);
  // Validate request because in model we required the title
  if (!req.body.name) {
    return res.status(400).send({
      message: "Please enter Category Name",
    });
  }
  if (!req.body.display_name) {
    return res.status(400).send({
      message: "Please enter a display name",
    });
  }
  if (!req.body.description) {
    return res.status(400).send({
      message: "Please enter Description",
    });
  }

  const category = new Category({
    name: req.body.name,
    display_name:req.body.display_name,
    description: req.body.description,
  });
  category
    .save()
    .then((newcategory) => {
      res.send(newcategory);

      // console.log(res)
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the category.",
      });
    });
};

// Get all and return all products.
exports.getAll = (req, res) => {
  Category.find()
    .then((newcategory) => {
      // console.log(req)
      const page = parseInt(req.query.page);
      const limit = parseInt(req.query.limit);
      const startIndex = (page - 1) * limit;
      const endIndex = page * limit;
      const result = newcategory.slice(startIndex, endIndex);
      if (!page) {
        res.send(newcategory);
      } else {
        res.send(result);
      }
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving all category",
      });
    });
};


exports.getById = (req, res) => {
  Category.findById(req.params.categoryId)

    .then((existingcategory) => {
      if (existingcategory) {
        return res.status(200).json({
          info: 'Category Information Retrieved',
          data: existingcategory,
          status:200
        });
        // res.send(newproduct);
      }
      return res.status(404).send({
        message: "Category does not exist with id " + req.params.categoryId,
      });
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "Category does not exist with id " + req.params.categoryId,
        });
      }
      return res.status(500).send({
        message:
          "Some error occurred while retrieving the Category with the Category ID" +
          req.params.categoryId,
      });
    });
};


exports.update = (req, res) => {
  // Validate Request because title is required
  if (!req.body.name) {
    return res.status(400).send({
      message: "Please enter Category Name",
    });
  }
  if (!req.body.display_name) {
    return res.status(400).send({
      message: "Please enter Category Description",
    });
  }

  // Find Product and update it
  Category.findByIdAndUpdate(
    req.params.categoryId,
    {
    name: req.body.name,
    display_name: req.body.display_name,
    description:req.body.description,

    },
    { new: true }
  )
    .then((newcategory) => {
      // console.log(newproduct)
      if (newcategory) {
        return res.status(200).json({
          info: 'Category Information Updated',
          data: newcategory,
          status:200
        });
        // res.send(newproduct);
      }
      return res.status(404).send({
        message: "Category does not exist with Id ",
      });
    })
    .catch((err) => {
      console.log(err)
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "Category does not exist with Id " + req.params.categoryId,
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
  Category.findByIdAndRemove(req.params.categoryId)
    .then((newcategory) => {
      if (newcategory) {
        return res.status(200).json({
          info: 'Category Deleted Successfully',
          data: newcategory,
          status:200
        });
        // res.send(newproduct);
      }
      return res.status(404).send({
        message: "Category does not exist with Id" + req.params.categoryId,
      });
    })
    .catch((err) => {
      console.log(err.response)
      if (err.kind === "ObjectId" || err.name === "NotFound") {
        return res.status(404).send({
          message: "Category does not exist with Id" + req.params.categoryId,
        });
      }
      return res.status(500).send({
        message:
          "Some error occurred while deleting the category with Id" +
          req.params.categoryId,
      });
    });
};
