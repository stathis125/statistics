const Employee = require('../models/employee');

function postCreateEmployee(req, res) {
    Employee.create({
        employee_name: req.body.employee_name,
        quantity: req.body.quantity
    })
        .then(employee => {
            res.json(employee);
        })
        .catch(err => {
            console.error(err);
            res.status(500).send('Oops something went wrong while saving the employee');
        });
}
module.exports = postCreateEmployee;