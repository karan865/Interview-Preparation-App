const mongoose = require('mongoose');

const uri = "mongodb://karan865:karan865@cluster0-shard-00-00.jsbb6.mongodb.net:27017,cluster0-shard-00-01.jsbb6.mongodb.net:27017,cluster0-shard-00-02.jsbb6.mongodb.net:27017/?ssl=true&authSource=admin&retryWrites=true&w=majority";

mongoose.connect(uri)
  .then(() => {
    console.log("Connected successfully!");
    process.exit(0);
  })
  .catch(err => {
    console.error("Connection failed:", err.message);
    process.exit(1);
  });
