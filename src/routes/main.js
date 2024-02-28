const express = require('express')
const router = express.Router();
const Detail = require('../models/Details');
const Services = require("../models/Service")
const Slider = require("../models/slider")
const Contact = require('../models/contact')

router.get('/',async(req,res)=>{
    const details = await Detail.findOne({'id':'63b1b3c1961ec30306eb6af8'}); // This statement will be execute first to ensure the synchronization
    const slider = await Slider.find();
    const services = await Services.find();
    // console.log(details);
    res.render('index',{
        d: details,
        slides: slider,
        s: services
    });
});

router.get('/gallery',async(req,res)=>{
    const details = await Detail.findOne({'id':'63b1b3c1961ec30306eb6af8'}); // This statement will be execute first to ensure the synchronization
    // console.log(details);
    res.render('gallery',{
        d: details
    });
});

router.post("/process_form",(req, res)=>{
    console.log(req.body);

    try {
        Contact.create(req.body);
        res.redirect('/');
    } 
    catch (error) {
        console.log(error);
        res.redirect("/")
    }
})

module.exports = router;