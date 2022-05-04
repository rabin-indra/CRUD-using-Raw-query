const express = require("express");
const router = express.Router();

const employeeController = require("./../controllers/employee.controller");

//create employee
router.post('/post', employeeController.create);

// find employee by id
router.get('/:id', employeeController.findById);


// findall employee 
router.get('/', employeeController.findAll);

// update employee by id
router.put('/:id', employeeController.updateById)

//delete employee by id
router.delete('/:id', employeeController.deleteById);


module.exports = router;