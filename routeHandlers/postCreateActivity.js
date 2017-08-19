const Activity = require('../models/activity');

function postCreateActivity(req, res) {
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
}
module.exports = postCreateActivity;