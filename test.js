const axios = require('axios')

let link = `https://www.imdb.com/title/tt8074128/`

axios({
  "method": "GET",
  "url": "https://shorturl-sfy-cx.p.rapidapi.com/",
  "headers": {
    "content-type": "application/octet-stream",
    "x-rapidapi-host": "shorturl-sfy-cx.p.rapidapi.com",
    "x-rapidapi-key": "57d2b3a3acmshb7f10219925d6bfp197592jsnc6d6312c015e",
    "useQueryString": true
  }, "params": {
    "url": link
  }
})
  .then((response) => {
    console.log(response.data)
  })
  .catch((error) => {
    console.log(error)
  })