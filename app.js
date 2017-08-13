const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Activity = require('./models/activity');

// app.use ('/api', router);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost:27017/statistics');
app.use(function (request, response, next) {
  console.log('gaaaaaaaaaaaaaaaaaaaaaaaaaaaay');
  next();
});
app.get('/', function (req, res) {

  res.json({
    message: 'Hello Tsanakas!',
    messages: [
      { name: 'Dorian' }
    ]
  });
});
app.get('/api/activities', function (req, res) {
  Activity.find({})
    .then(activities => {
      res.json(activities);
    })
    .catch(err => {
      console.error(err);
      res.status(500).send(err.message);
    });
})
app.get('/api/activities/:activity_id', function (req, res) {
  const activityId = req.params.activity_id;
  Activity.findById(activityId) 
    .then(activity => {
      if (activity) {
        res.json(activity);
        return;
      }
      res.status(404).send('Activity not found');
    })
    .catch(err => {
      console.error(err);
      res.status(500).send(err.message);
    });
})
app.put('/api/activities/:activity_id', function (req, res) {
  const activityId = req.params.activity_id;
  Activity.findByIdAndUpdate(activityId, {
      activity_name: req.body.activity_name,
      quantity: req.body.quantity
    })
    .then(activity => {
      res.json(activity);
    })
    .catch(err => {
      console.error(err);
      res.status(500).send(err.message);
    });
})
  app.delete('/api/activities/:activity_id', function (req, res) {
  const activityId = req.params.activity_id;
  Activity.findByIdAndRemove(activityId)
    .then(activity => {
      res.json(activity);
    })
    .catch(err => {
      console.error(err);
      res.status(500).send(err.message);
    });
})
app.post('/api/activities', function (req, res) {

  Activity.create({
    activity_name: req.body.activity_name,
    quantity: req.body.quantity
  })
    .then(activity => {
      res.json(activity);
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('Oops something went wrong while saving the activity');
    });
})
app.post('/papara', function (req, res) {
  res.send('paparaaaaaaaaaaas!');
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
