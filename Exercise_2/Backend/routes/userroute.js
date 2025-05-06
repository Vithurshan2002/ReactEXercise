const express=require("express");
const router=express.Router();
const { Usersign, UserLockin } = require("../controller/usercontroller");


router.post('/signup',Usersign);
router.post('/login',UserLockin)

module.exports=router;