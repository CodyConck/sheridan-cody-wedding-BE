const dotenv = require("dotenv")
dotenv.config()
const mongoose = require("./mongoose")
const Guest = require('./models/Guest')

const seedGuests = [
    {
        firstName: 'Wayne',
        lastName: 'Lichliter',
        address: 'Sleepy Hollow Cove',
        plusOne: true,
        sigOth: 'Sharon Lichliter'
    },
    {
        firstName: 'Eric',
        lastName: 'Concklin',
        address: 'Cadillac Ave',
        plusOne: true,
        sigOth: 'Paton Fellows'
    }, 
    {
        firstName: 'Beau',
        lastName: 'Shaw',
        address: 'Petway',
        plusOne: true,
        sigOth: 'Heidi Klumm'
    }

];

const seedDB = async () => {
    await mongoose.setUp();
    await Guest.deleteMany({});
    await Guest.insertMany(seedGuests)
};

seedDB().then(()=> {
    mongoose.connection.close()
});
