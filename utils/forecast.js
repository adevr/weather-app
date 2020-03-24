const request = require("request")

const forecast = (latitude, longitude, callback) => {
    const url = "https://api.darksky.net/forecast/af8837a8250f923dcce4537e9601012f/" + latitude + "," + longitude

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback("Unable to connect to weather service!", undefined)
        } else if (body.error) {
            callback("Unable to find location", undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + " It is currently " + body.currently.temperature + " fahrenheit degress out. There is a " + body.currently.precipProbability + "% chance of rain.")
        }
    })
}

module.exports = forecast