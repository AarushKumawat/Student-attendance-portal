const jwt = require("jsonwebtoken")
const dotenv = require('dotenv').config()


const createToken = (user)=>{
const accessToken = jwt.sign({id:user.id}, process.env.jwtSECRET)
return accessToken
}


const validateToken = (req,res,next)=>{
    const accessToken = req.cookies.token
    if (!accessToken) {
        res.status(404).json({error:'Please Login to continue'})
    } else {
        try {
           const data =  jwt.verify(accessToken, process.env.jwtSECRET)
                if (data) {
                    req.auth = true
                    req.data = data
                    next()
                }else{
                    req.auth = false
                    res.send("Token doesnt exist")
                }
          
        } catch (err) {
            res.json({error:err})
        }
    }


}

module.exports = {createToken, validateToken}