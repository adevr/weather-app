"use strict";

module.exports = {
    about: (req, res) => {
        res.render("about", {
            title: "About Me",
            name: "Alexandre Reis"
        })
    },
    help: (req,res) => {
        res.render("help", {
            title: "Help",
            message: "Could you please provide help to my issue?"
        })
    },
    root: (req,res) => {
        res.render("index", {
            title: "Homepage",
            name: "Alexandre Reis"
        })
    },
    weather: (req, res) => {
        res.send({
            forecast: "It is snowing",
            location: "Aveiro"
        })
    },
    p404: (req, res) => {
        res.render('404', {
            title: '404',
            name: "Alexandre Reis",
            errorMessage: 'Page not found.'
        })
    }
};
