const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routeHandlers = require('./routeHandlers');

const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
mongoose.Promise = require('bluebird');

mongoose.connect('mongodb://localhost:27017/statistics');
app.get('/', routeHandlers.getAllEmployeesHandler);
app.get('/:employee_id', routeHandlers.getEmployeeById);
app.put('/:employee_id', routeHandlers.putUpdateEmployee);
app.delete('/:employee_id', routeHandlers.deleteEmployeeById);
app.post('/', routeHandlers.postCreateEmployee);
app.listen(port, () => {
    console.log('Example app listening on port ', port);
});
