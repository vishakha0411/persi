const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  category: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
    validate(p){
        if(p < 0){
            throw new Error('Price cannot be negative');
        }
    }
  },
});

module.exports = mongoose.model("Product", productSchema);

/*
const mongoose = require('mongoose')
const validator = require('validator')

const Employee = mongoose.model('Employee',{
	//Fill in the code here
})

Employee.insertEmployee = function(Employee) {
	//Fill in the code here
}

Employee.getAll = function() {
	//Fill in the code here
}

module.exports = Employee

*/