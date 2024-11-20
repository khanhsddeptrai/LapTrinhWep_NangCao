import express from 'express'
import dotenv from 'dotenv/config'
import bodyParser from 'body-parser';
import methodOverride from 'method-override';

import viewEngine from './config/viewEngine.js'
import initWebRoute from './routes/webRoute.js';
import initApiRoutes from './routes/api.js';
import configCors from "./config/cors.js";


const app = express();
//config cors
configCors(app)

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//config method-override
app.use(methodOverride('_method'));

const port = process.env.PORT;

viewEngine(app);
initWebRoute(app);
initApiRoutes(app);


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