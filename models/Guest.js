const { Schema, model} = require('mongoose');

const guestSchema = new Schema ({
    firstName : {
        type: String,
        required: true
    },
    lastName : {
        type: String,
        required: true
    },
    address : {
        type: String,
        required: true
    },
    plusOne : {
        type: Boolean
    },
    sigOth : {
        type: String
    },
    isAttending : {
        type: Boolean,
        default: false
    },
    hasResponded : {
        type: Boolean,
        default: false
    }
});

const Guest = model('Guest', guestSchema);

module.exports = Guest;