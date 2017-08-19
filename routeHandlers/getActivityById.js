const Activity = require('../models/activity');

function getActivityById(req, res) {
    const activityid = req.params.activity_id;
    Activity.findById(activityid)
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
}
module.exports = getActivityById;