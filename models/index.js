const mongoose = require('mongoose');
const Unicorn = require('./Unicorn')
const DB_URL = "mongodb+srv://root:root@cluster0.07urh.mongodb.net/unicorns-app?retryWrites=true&w=majority"

mongoose.connect(DB_URL, (err)=> {
  if(err){
    console.log(err)
  }else{
    console.log('DB connected')
  }
});

module.exports = {
  Unicorn
}

