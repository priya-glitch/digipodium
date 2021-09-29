const mongoose = require("mongoose");
const uri = require('./config').db_url;
mongoose.connect(uri)
.then(() => {
    console.log("data successfully connected");
})
.catch((err) => {
    console.error(err);
})