const mongoose = require('mongoose');
const Guest = require('../models/Guest');

const guests = [
    new Guest({
        firstName: 'Wayne',
        lastName: 'Lichliter',
        address: 'Sleepy Hollow Cove',
        plusOne: true,
        sigOth: 'Sharon Lichliter'
    }),
    new Guest({
        firstName: 'Eric',
        lastName: 'Concklin',
        address: 'Cadillac Ave',
        plusOne: true,
        sigOth: 'Paton Fellows'
    })
];
