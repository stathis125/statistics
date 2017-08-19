const Activity = require('../models/activity');

function getAllActivitiesHandler(req, res) {
    Activity.find({})
        .then(activities => res.json(activities))
        .catch(err => {
            console.error(err);
            res.status(500).send(err.message);
        });
}

module.exports = getAllActivitiesHandler;