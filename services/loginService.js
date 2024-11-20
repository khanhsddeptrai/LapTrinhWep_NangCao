import bcrypt from 'bcryptjs';

import JWTAction from '../middleware/jwtAction.js';

const salt = bcrypt.genSaltSync(10);

const hashPassword = (userPassword) => {
    let hash = bcrypt.hashSync(userPassword, salt);
    return hash
}

const checkEmail = async (userEmail) => {
    let user = await db.User.findOne({
        where: { email: userEmail }
    })

    if (user) {
        return true;
    }
    return false;
}


const registerNewUser = async (userData) => {
    try {
        let isExistEmail = await checkEmail(userData.email);
        // console.log(isExistEmail)
        if (isExistEmail === true) {
            return {
                EM: 'Email is already exist',
                EC: 1
            }
        }

        let hashUserPass = hashPassword(userData.password);
        await db.User.create({
            email: userData.email,
            phone: userData.phone,
            username: userData.username,
            password: hashUserPass,
            groupId: 1
        })
        return {
            EM: "Register successfully!",
            EC: 0
        }
    } catch (error) {
        console.log(error)
        return {
            EM: "Something wrong in service...",
            EC: -1
        }
    }

}

const checkPassword = (inputPassord, hashPassword) => {
    return bcrypt.compareSync(inputPassord, hashPassword);
}

const handleUserLogin = async (inputUser) => {
    try {
        let user = await db.User.findOne({
            where: { email: inputUser.email }
        })

        if (user) {
            let isCorrectPassword = checkPassword(inputUser.password, user.password);

            if (isCorrectPassword === true) {
                let groupWithRoles = await getGroupWithRoles(inputUser);

                let payload = {
                    email: inputUser.email,
                    groupWithRoles,
                    expiresIn: process.env.JWT_EXPIRES_IN
                }

                let token = JWTAction.createJWT(payload);

                return {
                    EM: 'Okela',
                    EC: 0,
                    DT: {
                        access_token: token,
                        groupWithRoles
                    }
                }
            }
        }
        return {
            EM: 'Email or Password is incorrect',
            EC: 1,
            DT: ""
        }
    } catch (error) {
        return {
            EM: "Something wrong in service...",
            EC: -2
        }
    }
}

export default {
    registerNewUser, handleUserLogin, checkEmail, hashPassword
}