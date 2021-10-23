const express = require("express");
var axios = require("axios").default;
const router = express.Router();

router.get("/:word", async (req, res) => {
  var options = {
    method: 'GET',
    url: `https://wordsapiv1.p.rapidapi.com/words/${req.params.word}`,
    headers: {
      'x-rapidapi-key': '681c56379fmshb8ead66cd0977a8p1ba25ejsnfef42c382d93',
      'x-rapidapi-host': 'wordsapiv1.p.rapidapi.com'
    }
  };
  axios.request(options).then(function (response) {
    res.json(response.data); //return the value and pass it to the client side
  }).catch(function (error) {
    console.error(error);
  });

});

module.exports = router;
