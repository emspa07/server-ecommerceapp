const jwt = require('jsonwebtoken')
const secret = process.env.SECRET_TKN

const generateJWT = (id) =>{

    return jwt.sign({
        id: id
    }, secret, {expiresIn: '8h' })
}

const verifyJWT = (token) => {
    return jwt.verify(token, secret)
}

module.exports = {
    verifyJWT,
    generateJWT
}