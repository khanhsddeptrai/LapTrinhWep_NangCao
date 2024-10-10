import express from "express";

import getHomePage from "../controllers/homeController.js";
import getAboutPage from "../controllers/aboutController.js";
import getContactPage from "../controllers/contactController.js";

const router = express.Router();
const initWebRoute = (app) => {
    router.get('/', getHomePage)
    router.get('/about', getAboutPage)
    router.get('/contact', getContactPage)
    return app.use('/', router)
}

export default initWebRoute;