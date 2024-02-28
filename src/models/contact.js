const mongoose = require('mongoose');

const Contact = mongoose.Schema({
    email : String,
    contactNumber: String,
    feedback :String
})

module.exports = mongoose.model("queries",Contact);