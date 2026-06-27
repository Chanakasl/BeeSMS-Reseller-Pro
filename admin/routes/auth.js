const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const Admin = require("../../models/Admin");

const router = express.Router();

router.post("/login", async(req,res)=>{

try{

const {username,password}=req.body;

const admin = await Admin.findOne({username});

if(!admin){

return res.status(401).json({
success:false,
message:"Invalid Username"
});

}

const match = await bcrypt.compare(password,admin.password);

if(!match){

return res.status(401).json({
success:false,
message:"Invalid Password"
});

}

const token = jwt.sign({

id:admin._id,
role:admin.role

},process.env.JWT_SECRET,{

expiresIn:"7d"

});

res.json({

success:true,
token

});

}catch(err){

res.status(500).json({

success:false,
message:err.message

});

}

});

module.exports=router;
