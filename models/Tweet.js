const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TweetSchema = new Schema({

});

module.exports = Tweet = mongoose.model('tweet', TweetSchema);
