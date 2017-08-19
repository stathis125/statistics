/* eslint global-require: "off" */
module.exports = {
    getAllActivitiesHandler: require('./getAllActivitiesHandler'),
    getActivityById: require('./getActivityById'),
    putUpdateActivity: require('./putUpdateActivity'),
    deleteActivityById: require('./deleteActivityById'),
    postCreateActivity: require('./postCreateActivity')
};