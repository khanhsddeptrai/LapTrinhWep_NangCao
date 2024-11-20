import express from "express";

import {
    getHomePage,
    getUserDetail,
    getUpdateUser,
    postUpdateUser,
    getCreateUser,
    deleteUser,
    postCreateUser
}
    from "../controllers/homeController.js";

import getAboutPage from "../controllers/aboutController.js";
import getContactPage from "../controllers/contactController.js";

const router = express.Router();
const initWebRoute = (app) => {
    router.get('/user', getHomePage)
    router.get('/about', getAboutPage)
    router.get('/contact', getContactPage)
    router.get('/user/create', getCreateUser)
    router.post('/user/create', postCreateUser)
    router.get('/user/:id', getUserDetail)
    router.get('/update/:id', getUpdateUser)
    router.post('/update/:id', postUpdateUser)
    router.delete('/delete/:id', deleteUser)

    return app.use('/', router)
}

export default initWebRoute;