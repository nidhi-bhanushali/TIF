const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    opportunity:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'opportunities'
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true
    },
    timeCommitment: {
        type: String,
        required: true
    },
    note: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('user' , UserSchema);