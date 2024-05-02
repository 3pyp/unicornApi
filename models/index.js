const mongoose = require("mongoose");
const Unicorn = require("./unicorn");
const DB_URL =
  "mongodb+srv://experimental-user:Root1234@experimental.eejditu.mongodb.net/experimental-collections?retryWrites=true&w=majority";

mongoose.set("strictQuery", false);
mongoose.connect(DB_URL, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("DB connected");
  }
});

module.exports = {
  Unicorn,
};
