const {Addata, Login} = require("../models/userloginmodel");
const path=require('path');
exports.Usersign= (req,res,next)=>{
        const{username,password,email}=req.body;
        if(username && password &&email){
            Addata(username,password,email);
            res.status(200).json({message:"success"})
            
        }
        else{
            res.status(400).json({"message":"Required full details"})
        }
        
    }

    exports.UserLockin=(req,res,next)=>{
            const{email,password}=req.body;
            if(email!='' && password !=''){
                Login(email,password).then((data)=>{
                console.log("data:-"+data)
                /*   */
                if(data[0]){
                 /*  res.status(200).json({"messsge":"succeslogin"}) */
                  res.status(200).sendFile(path.join(__dirname,'../',"Views","welcome.html"));
                 
                }
                else{
                  res.status(400).json({"messsge":"unsucess"})
                }

               }).catch((err)=>{
                    console.log("error")
               })
               
                
            }
            else{
                res.status(400).json({"message":"Required full details"})
            }

    }
