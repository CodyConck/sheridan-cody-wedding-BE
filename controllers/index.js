const guestController = require('./guest-controller')

module.exports = (app) => {
    app.use('/guests', guestController.getAllGuests)
}