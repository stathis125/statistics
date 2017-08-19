const Activity = require('../models/activity');

function deleteActivityById(req, res) {
    const activityId = req.params.activity_id;
    Activity.findByIdAndRemove(activityId)
        .then(activity => {
            res.json(activity);
        })
        .catch(err => {
            console.error(err);
            res.status(500).send(err.message);
        });
}
module.exports = deleteActivityById;