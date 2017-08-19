const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routeHandlers = require('./routeHandlers');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
mongoose.Promise = require('bluebird');

mongoose.connect('mongodb://localhost:27017/statistics');
app.get('/api/activities', routeHandlers.getAllActivitiesHandler);
app.get('/api/activities/:activity_id', routeHandlers.getActivityById);
app.put('/api/activities/:activity_id', routeHandlers.putUpdateActivity);
app.delete('/api/activities/:activity_id', routeHandlers.deleteActivityById);
app.post('/api/activities', routeHandlers.postCreateActivity);
app.listen(process.env.PORT || 3000, () => {
    console.log('Example app listening on port 3000!');
});
