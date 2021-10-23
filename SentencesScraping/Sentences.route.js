const express = require("express");
const router = express.Router();

var getsentences = require("./SentenceAPI");

router.get("/:word", async (req, res) => {

  getsentences.loadSentences(req.params.word, 2).then(function (response) {
    //console.error(response);
    res.json(response); //return the value and pass it to the client side
  }).catch(function (error) {
    console.error(error);
  });

});

module.exports = router;
