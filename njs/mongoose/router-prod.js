const express = require("express");
const {
  addProduct,
  getProducts,
  getProduct,
  changePrice,
  removeProduct,
} = require("../controllers/Product");
const router = express.Router();

router.get("/products", getProducts);
router.get("/product/:id", getProduct);
router.post("/add-product", addProduct);
router.patch("/update-price/:id", changePrice);
router.delete("/remove-product/:id", removeProduct);

module.exports = router;

/*
const express = require('express')
const Employee = require('../models/employee')
const EmployeeController = require('../controllers/employee')
const router = new express.Router()

//create
router.post('/insertEmployee', EmployeeController.insertEmployee)
//Retrieve
router.get('/listEmployees', EmployeeController.getAllEmployees)

module.exports = router

*/