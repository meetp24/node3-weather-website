const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoiY2FwdGFpbm1lZXQyNCIsImEiOiJja2ptdnVlem8wN3ZxMnZvOGtwY2ozcDBvIn0.hycHLbVuxQ_akY5WG6Vj4Q&limit=1'

    request({ url, json: true }, (error, { body }) => {
            if (error) {
                callback('Unable to Connect to Weather-app', undefined)
            } else if (body.features.length === 0) {
                callback('Unable to find Location', undefined)
            } else {
                callback(undefined, {
                    latitute: body.features[0].center[1],
                    longitute: body.features[0].center[0],
                    location: body.features[0].place_name,
                })
            } 
    })
}

module.exports = geocode 