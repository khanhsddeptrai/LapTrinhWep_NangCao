import express from 'express'
import dotenv from 'dotenv/config'
import bodyParser from 'body-parser';
// import expressLayouts from 'express-ejs-layouts';
// app.use(expressLayouts);

import viewEngine from './config/viewEngine.js'
import initWebRoute from './routes/webRoute.js';



const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


const port = process.env.PORT;

viewEngine(app);
initWebRoute(app);


// app.get('/test', (req, res) => {
//     res.render('./test.ejs')
// })

// app.get('/home', (req, res) => {
//     res.send('oke')
// })

// app.get('/about', (req, res) => {
//     res.render('./about.ejs')
// })

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})