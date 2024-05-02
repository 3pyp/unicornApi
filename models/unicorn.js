const mongoose = require("mongoose");
const unicornSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  power: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
  },
  image: {
    type: String,
    required: true,
  },
});

const Unicorn = mongoose.model("Unicorn", unicornSchema);

module.exports = Unicorn;
