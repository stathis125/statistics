const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const employeeSchema = new Schema({
    employee_name: String,
    quantity: Number
}, { timestamps: true }
);

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;