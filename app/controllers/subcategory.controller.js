// const express = require('express');
const SubCategory = require("../models/subcategory.model.js");


exports.create = (req, res) => {
  if (!req.body.name) {
    return res.status(400).send({
      message: "Please enter Name",
    });
  }
  if (!req.body.display_name) {
    return res.status(400).send({
      message: "Please enter Display Name",
    });
  }
  if (!req.body.category_group) {
    return res.status(400).send({
      message: "Please Enter Category",
    });
  }

  const subcategory = new SubCategory({
    name: req.body.name,
    display_name: req.body.display_name,
    category_group:req.body.category_group
    
  });
  subcategory
    .save()
    .then((newsubcategory) => {
      res.send(newsubcategory);

      // console.log(res)
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the SubCategory.",
      });
    });
};

// Get all and return all products.
exports.getAll = (req, res) => {
  SubCategory.find()
    .then((newsubcategory) => {
      // console.log(req)
      const page = parseInt(req.query.page);
      const limit = parseInt(req.query.limit);
      const startIndex = (page - 1) * limit;
      const endIndex = page * limit;
      const result = newsubcategory.slice(startIndex, endIndex);
      if (!page) {
        res.send(newsubcategory);
      } else {
        res.send(result);
      }
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Subcategories",
      });
    });
};


exports.getById = (req, res) => {
  SubCategory.findById(req.params.sub_categoryId)

    .then((existingsubcat) => {
      if (existingsubcat) {
        return res.status(200).json({
          info: 'Sub Category Information Retrieved',
          data: existingsubcat,
          status:200
        });
        // res.send(newproduct);
      }
      return res.status(404).send({
        message: "Subcategory does not exist with id " + req.params.sub_categoryId,
      });
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "Subcategory does not exist with id " + req.params.sub_categoryId,
        });
      }
      return res.status(500).send({
        message:
          "Some error occurred while retrieving the Subcategory with the SubCategory ID" +
          req.params.subcategoryId,
      });
    });
};


exports.update = (req, res) => {
  // Validate Request because title is required
  if (!req.body.name) {
    return res.status(400).send({
      message: "Please enter SubCategory Name",
    });
  }
  if (!req.body.display_name) {
    return res.status(400).send({
      message: "Please enter Display Name",
    });
  }
  if (!req.body.category_group) {
    return res.status(400).send({
      message: "Please enter Enter Category",
    });
  }

  // Find Product and update it
  SubCategory.findByIdAndUpdate(
    req.params.sub_categoryId,
    {
    name: req.body.name,
    display_name: req.body.display_name,
    category_group:req.body.category_group
    },
    { new: true }
  )
    .then((newsubcategory) => {
      // console.log(newproduct)
      if (newsubcategory) {
        return res.status(200).json({
          info: 'SubCategory Information Updated',
          data: newsubcategory,
          status:200
        });
        // res.send(newproduct);
      }
      return res.status(404).send({
        message: "SubCategory does not exist" + req.params.sub_categoryId,
      });
    })
    .catch((err) => {
      console.log(err)
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "SubCategory does not exist with Id " + req.params.sub_categoryId,
        });
      }
      return res.status(500).send({
        message:
          "Some error occurred while updating the Subcategory Information" +
          req.params.sub_CategoryId,
      });
    });
};


exports.delete = (req, res) => {
  SubCategory.findByIdAndRemove(req.params.sub_categoryId)
    .then((newsubcategory) => {
      if (newsubcategory) {
        return res.status(200).json({
          info: 'Subcategory Information Deleted Successfully',
          data: newsubcategory,
          status:200
        });
        // res.send(newproduct);
      }
      return res.status(404).send({
        message: "Subcategory does not exist with Id" + req.params.sub_categoryId,
      });
    })
    .catch((err) => {
      console.log(err.response)
      if (err.kind === "ObjectId" || err.name === "NotFound") {
        return res.status(404).send({
          message: "Subcategory does not exist with Id" + req.params.sub_categoryId,
        });
      }
      return res.status(500).send({
        message:
          "Some error occurred while deleting the Subcategory with SubcategoryId" +
          req.params.sub_categoryId,
      });
    });
};
