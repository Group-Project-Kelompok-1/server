const router = require('express').Router()
const UserController = require('../controllers/userController')
const ListController = require('../controllers/listController.js')
const authentication = require('../middlewares/authentication')
const thirdPartyController = require('../controllers/thirdParty.js')

router.post('/register', UserController.register)
router.post('/login', UserController.login)
router.get('/moviessnack', authentication, ListController.showAll)
router.post('/moviessnack',authentication, thirdPartyController.getMoviesSnack)
router.post('/googleSignIn', UserController.googleSignIn)
router.get('/joke', authentication, thirdPartyController.getJoke)

module.exports = router