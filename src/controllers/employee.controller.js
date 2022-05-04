const Employee = require('./../models/employee.model');

// Create and Save new employee
exports.create = (req, res) => {

  // Create a employee object
  const employee = new Employee({
    name: req.body.name,
    address: req.body.address,
    phone: req.body.phone,
    salary: req.body.salary,
  });

  // save employee in the database
  Employee.create(employee, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Employee."
      });
    else res.send(data);
  });
};

exports.findById = (req, res) => {
  Employee.findById(req.params.id, (err, employee) => {
    if (err)
      res.send(err);
    res.json(employee);
  });
};


// retrive all employee from database
exports.findAll = (req, res) => {
  Employee.findAll((err, employee) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving employee."
      });
    else res.send(employee);
  });
};

//update employee by their id
exports.updateById = (req, res) => {
  Employee.updateById(req.params.id, new Employee(req.body), (err, employee) => {
    if (err)
   res.send(err);
   res.json({ 
     message: 'Employee successfully updated' 
    });
   });
}

// delete employee by id
exports.deleteById = (req, res) => {
  Employee.deleteById(req.params.id, (err, employee) => {
    if(err)
    res.send(err);
    res.json({
      message: "Employee successfully deleted"
    });
    
  });
}
