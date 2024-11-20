import loginService from '../services/loginService.js'

const handleLogin = async (req, res) => {
    try {
        let data = await loginService.handleUserLogin(req.body);
        res.cookie("jwt", data.DT.access_token, { httpOnly: true, maxAge: 60 * 60 * 1000 });
        return res.status(200).json({
            EM: data.EM,
            EC: data.EC,
            DT: data.DT
        })
    } catch (error) {
        return res.status(200).json({
            EM: "Something wrong from server!",
            EC: "-1",
            DT: ""
        })
    }

}

export default {
    handleLogin
}