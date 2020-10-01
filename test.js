const axios = require('axios')

axios({
  method: "GET",
  url: "https://developers.zomato.com/api/v2.1/search?entity_id=74&q=ayam",
  headers: {
    Accept: "application/json",
    "user-key": "ab7d5d4a1470ff992a2047a41187cbba" //process.env.TOKEN_ZOMATO
  }
})
.then(response=>{
  console.log()
})

