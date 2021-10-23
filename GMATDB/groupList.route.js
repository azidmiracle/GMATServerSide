/*This module extracts the vocabularies from the mongoDB*/

const express = require("express");
const router = express.Router();

const wordsListModel = require("./model/wordsList.model.js");
//Aggregation function
router.get("/", async (req, res, next) => {
  //res.send("Getting data");
  try {
    const wordlist = await wordsListModel.aggregate([
      {
        $project: {
          //SECOND STAGE: project the necessary fiels
          _id: 0,
          GROUP: 1
        },
      },
      {
        $unwind: {
          path: "$GROUP",
        },
      },
      {
        $group: {
          _id: null,
          distinctGroup: { $addToSet: "$GROUP" },
        },
      },
      { $sort: { distinctGroup: 1 } },
    ]);
    //.exec();
    res.json(wordlist); //return the value and pass it to the client side
  } catch (err) {
    res.json(err);
  }
});

module.exports = router;
