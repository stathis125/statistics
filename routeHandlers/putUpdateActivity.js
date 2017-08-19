const Activity = require('../models/activity');

function putUpdateActivity(req, res) {
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
}
module.exports = putUpdateActivity;