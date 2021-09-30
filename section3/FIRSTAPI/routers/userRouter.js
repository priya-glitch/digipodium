const router = require("express").Router();
const Model = require("../models/userModel");

router.post("/add", (req, res) => {
  const data = req.body;
  console.log(data);

  new Model(data).save()
    .then(() => {
      console.log("data saved");
      res.status(200).json({message:'success'});
    })
    .catch((err) => {
      console.error(err);
      
      res.status(500).json(err);
    });
});

router.get('/getall', (req,res)=>{
    Model.find({})
    .then((data)=> {
console.log('all user data fetched');
res.status(200).json(data);
    })
    .catch((err)=>{
        console.error(err);
        res.status(500).json(err);
    })
})


module.exports = router;
