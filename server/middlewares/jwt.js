const jwt = require("jsonwebtoken");

const createJWTtoken = async (user) => {
    return jwt.sign({
        "name": user.name,
        "id": user._id,
        "contactNo": user.contactNo
    },
        process.env.TOKEN_SECRET,
        { expiresIn: '720h' }
    );
}


const jwtVerify = (req, res, next) => {

    const token = req.header('Auth-Token')
    try {
        if (!token) return res.status(401).json({ "message": "No token" })
        // console.log(process.env.TOKEN_SECRET)
        // console.log(token)
        jwt.verify(token, process.env.TOKEN_SECRET, (error, decoded) => {
            if (error) return res.status(403).json({ "message": "Invalid Token or Token expired" })
            req.jwt_payload = decoded
            req.user = true
            next()
        });
    } catch (err) {
        console.log(err)
        res.status(500).json({ "message": "Server error. Try again later" })
    }
}

module.exports = {
    jwtVerify, createJWTtoken
};