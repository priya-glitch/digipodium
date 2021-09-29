const router = require("express").Router();

router.get("/add", (req, res) => {
console.log("add request on user");
res.send("you got a response from user");
})

module.exports = router;