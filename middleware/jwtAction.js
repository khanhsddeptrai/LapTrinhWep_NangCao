import jwt from "jsonwebtoken";
import dotenv from 'dotenv';
dotenv.config()

const createJWT = (payload) => {
    let key = process.env.JWT_SECRET;

    let token = null;
    try {
        token = jwt.sign(payload, key);
    } catch (error) {
        console.log(error)
    }
    return token;
}

const verifyToken = (token) => {
    let key = process.env.JWT_SECRET;
    let decoded = null;
    try {
        decoded = jwt.verify(token, key);
    } catch (error) {
        console.log(error)
    }
    return decoded;
}

const checkUserJWT = (req, res, next) => {
    let cookies = req.cookies;
    if (cookies && cookies.jwt) {
        let token = cookies.jwt;
        let decoded = verifyToken(token);
        if (decoded) {
            req.user = decoded;
            next();
        } else {
            return res.status(401).json({
                EC: -1,
                EM: "Not authenticated the user",
                DT: ''
            })
        }
    } else {
        return res.status(401).json({
            EC: -1,
            EM: "Not authenticated the user",
            DT: ''
        })
    }
}


export default {
    createJWT,
    verifyToken,
    checkUserJWT
};