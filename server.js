import express from 'express'
import dotenv from 'dotenv/config'
import viewEngine from './viewEngine.js'


const app = express()
const port = process.env.PORT

viewEngine(app)

app.get('/', (req, res) => {
    res.send("hello world")
})

app.get('/test', (req, res) => {
    res.render('./test.ejs')
})

app.get('/home', (req, res) => {
    res.render('./home.ejs')
})

app.get('/about', (req, res) => {
    res.render('./about.ejs')
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})