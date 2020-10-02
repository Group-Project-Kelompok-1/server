const { User, List } = require('../models')

class ListController {
  static showAll(req, res, next) {
    List.findAll({
      where: {
        UserId: req.decodedUser.id
      }
    })
      .then(data => {
        res.status(200).json(data)
      })
      .catch(err => {
        next(err)
      })
  }

}

module.exports = ListController