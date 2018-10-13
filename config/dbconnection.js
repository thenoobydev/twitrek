const mongoose = require('mongoose');
// Map global promises
mongoose.Promise = global.Promise;
// Mongoose Connect
connectionString = 'mongodb://localhost/twitrek';
mongoose.connect(connectionString, { useNewUrlParser: true })
    .then(function () {
        console.log("MongoDB Connected");
    })
    .catch(function (err) {
        console.log(err);
    });
