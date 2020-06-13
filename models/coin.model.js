  const mongoose = require('mongoose');
  const Schema = mongoose.Schema;

  const coinSchema = new Schema
  const coinSchema = mongoose.Schema({
    Value: String,
    Type: String,
    Image: String,
    Mintageyear: Date,
    Composition: String,
    Weight: String,
    Diametr: String,
    Thickness: String,
    Grade: String,
    Price: String,
    Obversedescription: String,
    Reversedescription: String,
    Edgedescription: String,
    References:String,
    Notes: String,
    Comments:String

    // author: String,
    // body:   String,
    // comments: [{ body: String, date: Date }],
    // date: { type: Date, default: Date.now },
    // hidden: Boolean,
    // meta: {
    //   votes: Number,
    //   favs:  Number
    }
  });
  module.exports = mongoose.model('coin.model', coinSchema);
