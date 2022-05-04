const dbConns = require("./../../config/db.config");

//create employee object
const Employee = function (employee) {
  this.name = employee.name;
  this.address = employee.address;
  this.phone = employee.phone;
  this.salary = employee.salary
};

Employee.create = (newEmp, result) => {
  dbConns.query("INSERT INTO employees SET ?", newEmp, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created: ", { id: res.insertId, ...newEmp });
    result(null, { id: res.insertId, ...newEmp });
  });
};

//find employee by id

Employee.findById = (id, result) => {
  dbConns.query("SELECT * FROM employees where id = ? ", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    }
    else {
      result(null, res);
    }
  });
}

// exports.findAll = (req, res) => {
//   Employee.findAll((err, employee) => {                     //original
//     if (err)
//     res.send(err);
//     console.log('res', employee);
//     res.send(employee);
//   });
//   };

//find all employee
Employee.findAll = (result) => {
  let query = "SELECT * FROM simple.employees ";

  dbConns.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    result(null, res);
  });
};

//update employee by their id
Employee.updateById = (id, employee, result) => {
  dbConns.query("UPDATE employees SET name=?, address=?, phone=?, salary=? WHERE id = ?",
    [employee.name, employee.address, employee.phone, employee.salary, id], (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      }
      else {
        result(null, res);
      }
    });
}

//delete employee by id
Employee.deleteById = (id, result) => {
  dbConns.query("DELETE FROM employees WHERE id = ?", [id], (err, res) => {
    if(err){
      console.log("error: ", err);
      result(null, err);
    }
    else{
      result(null, res);
    }
  });
}
module.exports = Employee;
