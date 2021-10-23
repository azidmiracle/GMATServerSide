
//MODEL FOR THE DUE LIST. SO WHEN INSERTED TO THE MONGODB , ALL DATA ARE THE SAME
const mongoose = require("mongoose");
//CHILD OF THE duleListSchema
const dictionarySchema=mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,  
  GROUP:Number,
  WORD:String,

})

module.exports = mongoose.model("vocabularies", dictionarySchema);
