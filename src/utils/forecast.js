const request = require('request')

const forecast = (latitute,longitute, callback) => {
    const url = 'http://api.openweathermap.org/data/2.5/weather?lat=' + latitute + '&lon=' + longitute + '&appid=8a57c52bfbb2d9919efe4bd273c23f70'
    
    request({ url, json: true }, (error, { body }) => {
            if (error) {
                callback('Unable to Connect to Weather-app', undefined)
            } else if (body.error) {
                callback('Unable to find Location', undefined)
            } else {
                callback(undefined,'It is currently ' + body.main.temp + ' degrees out. The High today is ' + body.main.temp_max + ' and the Low today is ' + body.main.temp_min + '. There is a ' + body.main.humidity + '% chance of rain.')
            } 
    })
}

module.exports = forecast 