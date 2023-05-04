var express = require("express")
const { redirect } = require("express/lib/response")
var router = express.Router()
 router.get('/g/one', (req, res) => {
     res.send("这是get一号")
 })
 router.get('/g/two', (req, res) => {
     console.log(req.body);
     res.send("/这是get二号")
})
 router.post('/p/two', (req, res) => {
     console.log(req.body);
     res.send("这是post")
 })
 module.exports = router;
 

 