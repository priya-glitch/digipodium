const express = require("express");


const port = 5000 ;
const app = express();

const userRouter = require('./routers/userRouter');
const productRouter = require('./routers/productRouter');

const cors = require('cors');



app.use( cors ({ origin : [ 'http://localhost:3000']}))
app.use(express.json());

app.use('/user', userRouter);

app.use('/product', productRouter);



app.get("/", (req, res) =>{
    console.log('request from client!!');
    res.send('you got a response');
})

app.get("/add", (req, res) =>{
    console.log('request from client at add!!');
    // res.send('you got a response from home ');
    res.json("you got a response from add at root");
})


app.get("/home", (req, res) =>{
    console.log('request from client at home!!');
    // res.send('you got a response from home ');
    res.json({"message" : "Success"});
})

app.get("/user", (req, res) =>{
    console.log('request from client at user!!');
    // res.send('you got a response from home ');
    res.send('you got a response from user');
})



app.listen(port, () =>{ 
    // console.log("server started on port" + port);
    console.log(`server started on port ${port}`);
});