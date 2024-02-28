const mongoose = require('mongoose');

const slider = mongoose.Schema({
    title: String,
    subtitle: String,
    imageUrl: String,
    class: String
});

module.exports = mongoose.model("slider",slider);//(collection, schema)