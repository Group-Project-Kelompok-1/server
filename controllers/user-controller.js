const { User } = require('../models')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { OAuth2Client } = require('google-auth-library')
const CLIENT_ID = process.env.GOOGLE_CLIENT_ID
const client = new OAuth2Client(CLIENT_ID)
const SECRET_PASSWORD = process.env.SECRET_PASSWORD

class UserController {
  static async register(req, res, next) {
    const { email, password } = req.body
    try {
      const user = await User.create({
        email,
        password
      })
      res.status(201).json({
        id: user.id,
        email: user.email
      })
    } catch (err) {
      next(err)
    }
  }

  static async login(req, res, next) {
    const { email, password } = req.body
    try {
      const user = await User.findOne({
        where: {
          email
        }
      })
      if (user == null) {
        throw {
          name: "wrong email or password"
        }
      } else {
        const validPassword = bcryptjs.compareSync(password, user.password)
        if (validPassword) {
          const access_token = jwt.sign({
            email: user.email,
            id: user.id
          }, process.env.JWT_SECRET)

          res.status(200).json({
            access_token
          })
        } else {
          throw {
            name: "wrong email or password"
          }
        }
      }
    }
    catch (err) {
      next(err)
    }
  }

  static googleSignIn (req, res, next) {
    console.log(`end point google sign in`);
    const id_token = req.headers.id_token
    let email
    // console.log(id_token);
    client.verifyIdToken({
      idToken : id_token,
      audience : CLIENT_ID
    })
    .then(ticket => {
      const payload = ticket.getPayload()
      email = payload.email
      User.findOne({
        where : {
          email
        }
      })
    })
    .then(user => {
      console.log(user);
        if(!user){
          return User.create({
            email,
            password : SECRET_PASSWORD
          })
        } else {
          return user
        }
      })
      .then(user => {
        console.log(user);
          const payload = { id: user.id , email: user.email }
          const jwtToken = jwt.sign(payload, process.env.JWT_SECRET)
          return res.status(200).json({
            token : jwtToken
      })
    })
    .catch(err => {
      return res.status(500).json({
        error : err ,
        message : "error"
      })
    })
  }
}

module.exports = UserController 