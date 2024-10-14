var EmployeeModel = require('../models/employee')

const EmployeeController = {}

EmployeeController.insertEmployee = async (req, res, next) => {
    try {
        const emp =  await EmployeeModel.insertMany(req.body);
        return res.status(200).json({
            success: true,
            data: emp,
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}

EmployeeController.getAllEmployees = async (req, res, next) => {
    try {
        const users = await EmployeeModel.find({});
        return res.status(200).json({
            success: true,
            data: users
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}

module.exports = EmployeeController