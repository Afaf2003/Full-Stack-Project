const express = require('express')
const app = express()
const mongoose = require('mongoose')
const port = process.env.PORT || 3000;
const hbs = require('hbs')
const bodyParser = require('body-parser');
const router = require('./routes/main')
const Detail = require("./models/Details")
const slider = require("./models/slider")
const Services = require('./models/Service')

app.use(bodyParser.urlencoded({
    extended: true
}));

// Database Connectivity
mongoose.connect("mongodb://localhost:27017/web_tut", () => {
    console.log("The Database is Connected!");
    //Only Once we have to add the Detials of the Web Site
    // slider.create([
    //     {
    //         title: "First Slide Label",
    //         subtitle: "This the the Fisrt Slider",
    //         imageUrl: "static/img/s1.png"
    //     },
    //     {
    //         title: "Second Slide Label",
    //         subtitle: "This the the Second Slider",
    //         imageUrl: "static/img/s2.png"
    //     },
    //     {
    //         title: "Third Slide Label",
    //         subtitle: "This the the Third Slider",
    //         imageUrl: "static/img/s3.png"
    //     },
    // ])
    //     Detail.create({
    //         brandName: "InfoTech",
    //         brandIconUrl: "static/img/logo.png",
    //         links:[
    //             {
    //                 label : "Home", 
    //                 url: "/"
    //             },
    //             {
    //                 label : "Services", 
    //                 url: "/services"
    //             },
    //             {
    //                 label : "Gallery", 
    //                 url: "/gallery"
    //             },
    //             {
    //                 label : "About", 
    //                 url: "/about"
    //             },
    //             {
    //                 label : "Contact US", 
    //                 url: "/contactus"
    //             },
    //         ]
    //     })
    // Services.create([
    //     {
    //         icon: "fa-solid fa-laptop-code icon",
    //         title: "Provide Best Courses",
    //         description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    //         links:[
    //             {
    //                 label: "Card link",
    //                 url: ""
    //             },
    //             {
    //                 label: "Another Link",
    //                 url:""

    //             }
    //         ]
    //     },
    //     {
    //         icon: "fa-solid fa-code icon",
    //         title: "Softwere Development",
    //         description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    //         links:[
    //             {
    //                 label: "Card link",
    //                 url: ""
    //             },
    //             {
    //                 label: "Another Link",
    //                 url:""

    //             }
    //         ]
    //     },
    //     {
    //         icon: "fa-solid fa-file-code icon",
    //         title: "Softwere Development",
    //         description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    //         links:[
    //             {
    //                 label: "Card link",
    //                 url: ""
    //             },
    //             {
    //                 label: "Another Link",
    //                 url:""

    //             }
    //         ]
    //     }
    // ])
});


// app.get("/",(req,res)=>{
//     res.send("This The Fisrt Page")
// });


// specifying that all the static Pages are there in the public Folder
app.use('/static', express.static("public"))
// Setting The Routers
app.use('', router);

// Setting The Templets Engine
app.set('view engine', 'hbs')
// On which folder all the views files are placed
app.set("views", "views");

hbs.registerPartials("views/Partials")

app.listen(port, () => {
    console.log(`The Server Has Started on http://localhost:${port}`);
})