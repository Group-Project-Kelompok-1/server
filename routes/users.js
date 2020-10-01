const router = require('express').Router()
const UserController = require('../controllers/userController')
const router = require('express').Router()
const ListController = require('../controllers/listController.js')
const authentication = require('../middlewares/authentication')
const thirdPartyController = require('../controllers/thirdParty.js')

router.post('/register', UserController.register)
router.post('/login', UserController.login)
router.use('/', authentication, ListController.showAll)
router.get('/getmovies', thirdPartyController.getmovies)
module.exports = router