const createJWT = (payload) => {
    let payload = { foo: 'bar' }
    let key = process.env.JWT_SECRET
    let token = null
    try {
        token = jwt.sign(payload, key);
    } catch (err) { }

    return token
}

const verifyToken = (token) => {
    let key = process.env.JWT_SECRET
    let decoded = null
    try {
        decoded = jwt.verify(token, key)
    } catch (err) {
        console.log(err)
    }
    return decoded
}

module.exports = {
    createJWT, verifyToken
}