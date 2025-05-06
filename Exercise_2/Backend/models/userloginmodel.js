const mongoose=require('mongoose');
const user=new mongoose.Schema({
    username:{
       type:String,
       required:true,
    }
    ,
    password:{
        type:String,
        required:true,
     },
    email:{
        type:String,
        required:true,
     }
});

const userlogin=mongoose.model('userlogin',user);

exports.Addata= async(uname, pw, email)=>{
    try {
        const data = await userlogin.create({
            username: uname,
            password: pw,
            email: email
        })
        console.log(data);
    }
    catch(er){
        console.log(er.message+"data not stored");
    }
}
   
exports.Login=async(email,pword)=>{
        try{
            const data=await userlogin.find({email:email,password:pword});
             console.log(data);
             return data;
             
            
        }
        catch(e){
            console.log(e.message+"errrrr");
            
        }
}
  


