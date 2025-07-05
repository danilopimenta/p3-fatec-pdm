require('dotenv').config()
const axios = require('axios')
const cors = require('cors')
const express = require('express')
const app = express()

const OPEN_WEATHER_MAP_KEY = process.env.OPEN_WEATHER_MAP_KEY

app.use(cors())
const openWeatherMapClient = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5',
})

app.get('/weather', async (req, res) => {
    const {lat, lon} = req.query
    try {
        const appid = OPEN_WEATHER_MAP_KEY
        const endpoint = '/weather'
        const units = 'metric'
        const params = {params: {lat, lon, appid, units}}
        const result = await openWeatherMapClient.get(endpoint, params)
        res.json(result.data)
    } catch (err) {
        console.log(err)
        res.status(400)
        res.json({error: err, msg: "erro no backend"})
    }
})

const port = 3000
app.listen(port, () => console.log(`Back End OK! PORT ${port}.`))
