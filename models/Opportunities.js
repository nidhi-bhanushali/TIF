const mongoose = require('mongoose');

const OpportunitySchema = mongoose.Schema({
    postedBy: {
        type: String
    },

    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        default: Date.now
    },
    endDate: {
        type: Date,
        default: Date.now
    },
    noOfHours: {
        type: String,
        required:true
    }
})

module.exports = mongoose.model('opportunity' , OpportunitySchema);