const express = require("express");
const port = process.env.PORT || 5000 ;
const app = express();

app.get("/", (req, res) =>{
    console.log('request from client!!');
    res.send('you got a response');
})

app.get("/home", (req, res) =>{
    console.log('request from client at home!!');
    // res.send('you got a response from home ');
    res.json({"message" : "Success"});
})



app.listen(port, () =>{ 
    // console.log("server started on port" + port);
    console.log(`server started on port ${port}`);
});