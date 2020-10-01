const axios = require('axios')
const { List, User } = require('../models')

class thirdPartyController {
  static getMoviesSnack(req, res, next) {
    List.create({
      genre: req.body.genre,
      snack: req.body.snack,
      UserId: req.decodedUser.id
    })
      .then(data => {
        // console.log()
        axios({
          "method": "GET",
          "url": "https://ott-details.p.rapidapi.com/advancedsearch",
          "headers": {
            "content-type": "application/octet-stream",
            "x-rapidapi-host": "ott-details.p.rapidapi.com",
            "x-rapidapi-key": "57d2b3a3acmshb7f10219925d6bfp197592jsnc6d6312c015e",
            "useQueryString": true
          }, "params": {
            "end_year": "2020",
            "start_year": "1970",
            "min_imdb": "7",
            "page": "1",
            "genre": data.genre,
            "type": "movie",
            "language": "english"
          }
        })
          .then(response => {
            let randomize = response.data.results[Math.ceil(Math.random() * 50)]
            List.update({
              imdbid: randomize.imdbid,
              title: randomize.title,
              imgUrl: randomize.imageurl[0],
              imdbrating: randomize.imdbrating
            }, {
              where: {
                id: data.id
              }
            })
              .then(data => {
                console.log(data)
              })
          })
          .catch(err => {
            console.log(err)
          })

        axios({
          method: "GET",
          url: "https://developers.zomato.com/api/v2.1/search?entity_id=74&q=" + data.snack,
          headers: {
            Accept: "application/json",
            "user-key": "ab7d5d4a1470ff992a2047a41187cbba" //process.env.TOKEN_ZOMATO
          }
        })
          .then(response => {
            List.update({
              zomatoUrl: response.data.restaurants[0].restaurant.url
            }, {
              where: {
                id: data.id
              }
            })
          })
      })
      .catch(err => {
        console.log(err)
      })
  }
}
module.exports = thirdPartyController