// const express = require('express');
const Measurement = require("../models/measurement.model.js");


exports.create = (req, res) => {
  console.log(req.body);
  // Validate request because in model we required the title
  if (!req.body.display_cat) {
    return res.status(400).send({
      message: "Please enter Measurement Name",
    });
  }
  if (!req.body.name) {
    return res.status(400).send({
      message: "Please enter a name",
    });
  }
  

  const measurement = new Measurement({
    display_cat: req.body.display_cat,
    name:req.body.name,
    
  });
  measurement
    .save()
    .then((newmeasure) => {
      res.send(newmeasure);

      // console.log(res)
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating measurement.",
      });
    });
};

// Get all and return all products.
exports.getAll = (req, res) => {
  Measurement.find()
    .then((newmeasure) => {
      // console.log(req)
      const page = parseInt(req.query.page);
      const limit = parseInt(req.query.limit);
      const startIndex = (page - 1) * limit;
      const endIndex = page * limit;
      const result = newmeasure.slice(startIndex, endIndex);
      if (!page) {
        res.send(newmeasure);
      } else {
        res.send(result);
      }
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving all measurement",
      });
    });
};


exports.getById = (req, res) => {
  Measurement.findById(req.params.measurementId)

    .then((existingmeasure) => {
      if (existingmeasure) {
        return res.status(200).json({
          info: 'Masurement Information Retrieved',
          data: existingmeasure,
          status:200
        });
        // res.send(newproduct);
      }
      return res.status(404).send({
        message: "Measurement does not exist with id " + req.params.measurementId,
      });
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "Measurement does not exist with id " + req.params.measurementId,
        });
      }
      return res.status(500).send({
        message:
          "Some error occurred while retrieving the Category with the Category ID" +
          req.params.measurementId,
      });
    });
};


exports.update = (req, res) => {
  // Validate Request because title is required
  if (!req.body.display_cat) {
    return res.status(400).send({
      message: "Please enter Display Name",
    });
  }
  if (!req.body.name) {
    return res.status(400).send({
      message: "Please enter Measurement Name",
    });
  }

  // Find Product and update it
  Measurement.findByIdAndUpdate(
    req.params.measurementId,
    {
    display_cat: req.body.display_cat,
    name: req.body.name,
    },
    { new: true }
  )
    .then((newmeasure) => {
      // console.log(newproduct)
      if (newmeasure) {
        return res.status(200).json({
          info: 'Measurement Information Updated',
          data: newmeasure,
          status:200
        });
        // res.send(newproduct);
      }
      return res.status(404).send({
        message: "Measurement does not exist",
      });
    })
    .catch((err) => {
      console.log(err)
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "Measurement does not exist with Id " + req.params.measurementId,
        });
      }
      return res.status(500).send({
        message:
          "Some error occurred while updating the Meaurement Information" +
          req.params.measurementId,
      });
    });
};


exports.delete = (req, res) => {
  Category.findByIdAndRemove(req.params.measurementId)
    .then((newmeasure) => {
      if (newmeasure) {
        return res.status(200).json({
          info: 'Measurement Deleted Successfully',
          data: newmeasure,
          status:200
        });
        // res.send(newproduct);
      }
      return res.status(404).send({
        message: "Measurement does not exist with Id" + req.params.measurementId,
      });
    })
    .catch((err) => {
      console.log(err.response)
      if (err.kind === "ObjectId" || err.name === "NotFound") {
        return res.status(404).send({
          message: "Measurement does not exist with Id" + req.params.measurementId,
        });
      }
      return res.status(500).send({
        message:
          "Some error occurred while deleting the measurement with Id" +
          req.params.measurementId,
      });
    });
};
