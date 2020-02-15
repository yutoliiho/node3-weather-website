const path = require('path')
const log = console.log
const express = require('express')
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const app = express()
const port = process.env.PORT || 3000
// Defined paths for express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../template/views')
const partialsPath = path.join(__dirname, '../template/partials')
// Setup handlebars engine and views location
app.set('view engine','hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)
log(app)
// Setup static directory 
app.use(express.static(publicDirectoryPath))

// Applications
app.get('', (req, res)=>{
    res.render('index',{
        title: 'weather',
        name: 'tong'
    })
})

app.get('/about',(req,res)=>{
    // res.send('<h2>About Page</h2>')
    res.render('about', {
        title: 'About page',
        name: 'tt'
    })
})

app.get('/help',(req,res)=>{
    res.render('help',{
        helpText: 'this is help text', 
        title: 'faqs',
        name: 'tong',
    })
})

app.get('/product',(req,res)=>{
    if(!req.query.search){
        return res.send({
            error: 'you must provide a search term'
        })
    } 
    log(req.query.search)
    res.send({
        product: [],
    })
})
// lesson 54: (not so good)
app.get('/weather',(req,res)=>{
    // res.send('<h2>About Page</h2>')
    if(!req.query.address){
        return res.send({
            error: 'address was not provided'
        })
    }
    geocode(req.query.address, (error, {latitude, longitude, location})=>{
        if(error){
            return res.send({error})
        } 
        forecast(latitude, longitude, (error, forecastData) => {
            if(error) {
                return res.send({ error })
            }

            res.send({
                forecast: forecastData,
                location,
                address: req.query.address,
            })

        })
    })
})

app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: 'You must provide an address!'
        })
    }
    geocode(req.query.address, (error, { latitude, longitude, location } = {}) => {
        if (error) {
            return res.send({error})
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
})


app.get('/help/*',(req,res)=>{
    res.render('404',{
        title: 'help  404',
        name: 'tong',
        errorMesage: 'help article not found'
    })
})

app.get('*',(req,res)=>{
    res.render('404',{
        title: '404',
        name: 'tong',
        errorMesage: 'page not found'
    })
})




app.listen(port, ()=>{
 log('Success! ' + port)   
})


