const mongoose = require('mongoose')
const validator = require('validator')
const empSchema = new mongoose.Schema({
	empid :{
		 type: String,
		 },
	name :{
		type :String
		},
	role : {
		type :String
		},
	department : {
		type: String
		},
	salary :{ 
		type: Number
		},
	experience : {
		type :Number
		},
	awards :{ 
		type :Array
		}
})

const Employee = mongoose.model('Employee',empSchema)

Employee.insertEmployee = function(Employee) {
	//Fill in the code here
}

Employee.getAll = function() {
	//Fill in the code here
}

module.exports = Employee