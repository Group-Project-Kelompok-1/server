const axios = require("axios");

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
        "genre": "thriller",
        "type": "movie",
        "language": "english"
      }
    })
      .then((response) => {
        console.log(response.data)
      })
      .catch((error) => {
        console.log(error)
      })