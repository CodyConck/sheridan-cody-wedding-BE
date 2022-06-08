const Guest  = require('../models/Guest');

const guestController = {
    //get all guests
    getAllGuests(req, res) {
        console.log(req.query)
        Guest.find(req.query)
        .limit(5)
        .then(dbGuestData => res.json(dbGuestData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
    }
};

module.exports = guestController;