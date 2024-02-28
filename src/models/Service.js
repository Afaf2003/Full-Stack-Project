const mongoose = require('mongoose');

const Services = mongoose.Schema({
    icon: String,
    title: String,
    description: String,
    links: [
        {
            label: String,
            url: String
        },
    ]
});

module.exports = mongoose.model("services",Services);