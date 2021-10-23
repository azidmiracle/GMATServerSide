const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

//DATABASE FETCH
const DATABASE_URL =
  "mongodb+srv://Emsky:MONGODBniems@cluster0.p9ms7.mongodb.net/gmatprep?retryWrites=true&w=majority";
mongoose.connect(
  DATABASE_URL, //this is the MongoDB URL
  { useNewUrlParser: true,
  useUnifiedTopology:true }
);
const db = mongoose.connection;

db.on("error", (error) => console.error(error));
db.once("open", () => console.log("connected to database"));

//middleware
app.use(cors());
app.use(express.json());

//--ROUTES --//
const groupListRoute = require("./GMATDB/groupList.route.js");
app.use("/distinctgrp", groupListRoute);

const allwordListRoute = require("./GMATDB/AllWords.route.js");
app.use("/allgroup", allwordListRoute);

const wordListRoute = require("./GMATDB/vocablist.route.js");
app.use("/group", wordListRoute);

//THIS ROUTES SHOULD MATCH IN THE CLIENT SIDE (AXIOS)
const wordRoute = require("./WordAPI/word.route.js");
app.use("/word", wordRoute);

//THIS ROUTES SHOULD MATCH IN THE CLIENT SIDE (AXIOS)
/* const sentenceRoute = require("./SentencesScraping/Sentences.route");
app.use("/sentence/word", sentenceRoute); */

//WHATEVER PORT IS AVAILABLE OF PORT 5000
app.listen(process.env.PORT || 5000, () =>
  console.log("server started. running at ")
);
