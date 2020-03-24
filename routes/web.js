const geocode = require("../utils/geocode");
const forecast = require("../utils/forecast");



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
        if (!req.query.address) {
            return res.send({
                error: 'You must provide an address!'
            })
        }

        geocode(req.query.address, (error, { latitude, longitude, location } = {}) => {
            if (error) {
                return res.send({ error })
            }

            forecast(latitude, longitude, (error, forecastData) => {
                if (error) {
                    return res.send({ error })
                }

                res.send({
                    forecast: forecastData,
                    location,
                    address: req.query.address
                })
            })
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
