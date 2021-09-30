const mongoose = require("mongoose");
const uri = require('./config').db_url;

mongoose.connect(uri)
.then(() => {
    console.log("database successfully connected");
})
.catch((err) => {
    console.error(err);
})
module.exports = mongoose;