/*This module extracts the vocabularies from the mongoDB*/

const express = require("express");
const router = express.Router();

const wordsListModel = require("./model/wordsList.model.js");
//Aggregation function
router.get("/:group", async (req, res, next) => {
  //res.send("Getting data");
  let GROUPNUM = Number(req.params.group);
  try {
    const wordlist = await wordsListModel.aggregate([
      {
        $match: { GROUP: GROUPNUM },
      },
      {
        $project: {
          //SECOND STAGE: project the necessary fiels
          _id: 0,
          //GROUP: 0,
          WORD: 1,
        },
      },
      {
        $unwind: {
          path: "$WORD",
        },
      },

      { $sort: { WORD: 1 } },
     /*  {
        $group: {
          _id: null,
          distinctWord: { $addToSet: "$WORD" },
        },
      }, */
    ]);
    //.exec();
    res.json(wordlist); //return the value and pass it to the client side
  } catch (err) {
    res.json(err);
  }
});

module.exports = router;
