
const { User } = require('../models')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { OAuth2Client } = require('google-auth-library')
const CLIENT_ID = process.env.GOOGLE_CLIENT_ID
const client = new OAuth2Client(CLIENT_ID)
const SECRET_PASSWORD = process.env.SECRET_PASSWORD

class UserController {
  static register(req, res, next) {
    const { email, password } = req.body
    User.create({
      email,
      password
    })
      .then(user => {
        res.status(201).json({
          id: user.id,
          email: user.email
        })
      })
      .catch(err => {
        next(err)
      })
  }

  static login(req, res, next) {
    const { email, password } = req.body
    User.findOne({
      where: {
        email
      }
    })
      .then(user => {
        if (!user) {
          throw {
            name: `Wrong Email / Password`
          }
        }
        const validPassword = bcryptjs.compareSync(password, user.password)
        if (validPassword) {
          const access_token = jwt.sign({
            email: user.email,
            id: user.id
          }, process.env.JWT_SECRET)
          res.status(200).json({
            id: user.id,
            email: user.email,
            access_token
          })
        } else {
          throw {
            name: `Wrong Email / Password`
          }
        }
      })
      .catch(err => {
        next(err)
      })
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
      console.log(payload);
      email = payload.email
      return User.findOne({
        where : {
          email
        }
      })
    })
    .then(user => {
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