const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const activitySchema = new Schema({
    activity_name: String,
    quantity: Number
    // Date
}, {
        timestamps: true
    }
);

const Activity = mongoose.model('Activity', activitySchema);

module.exports = Activity;