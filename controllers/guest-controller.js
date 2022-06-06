const { Guest } = require('../models/Guest');

const guestController = {
    //get all guests
    getAllGuests(req, res) {
        Guest.find({})
        .then(dbGuestData => res.json(dbGuestData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
    }
};

module.exports = guestController;