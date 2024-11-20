import express from "express";
import apiController from '../controllers/apiController.js'
import userController from '../controllers/userController.js';
import JWTAction from '../middleware/jwtAction.js';

const router = express.Router();
const initApiRoutes = (app) => {

    // router.post('/login', apiController.handleLogin)

    router.get('/user/read', userController.readUser)
    router.put('/user/update', userController.updateUser)

    // router.post('/user/create', userController.createUser)
    // router.put('/user/update', userController.updateUser)
    // router.delete('/user/delete', userController.deleteUser)

    return app.use("/api/", router)
}
export default initApiRoutes;