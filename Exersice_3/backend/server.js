
const express=require('express');
const multer=require('multer');
const app=express();
const path=require('path');

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
            cb(null,'./uploads');
    },
    filename:(req,file,cb)=>{
        console.log(file);
         const extention=path.extname(file.originalname);
         const newname=`${Date.now()}${extention}`;
         cb(null,newname);
    }       

    
})

let filsize=2*1000*1000;

const fileFilter=(req,file,cb)=>
{
    const allowedtype=  /jpeg|jpg|png/;
    const isallowed=allowedtype.test(file.minetype);
    if(isallowed){
        cb(null,true)
    }
    else{
        cb(new Error("file type is differ"),false)
    }

}

//multerconfig
const upload=multer(
    { 
        storage:storage,
        limits:{
            fileSize:filsize,
        },
        fileFilter:fileFilter,
    }
)

app.post('/imageuploading',upload.array("imagedemo",5),(req,res,next)=>{
    
       res.json({message:"ImageUplaoded",data:req.files})
       
});
app.use((error,req,res,next)=>{
    if(error instanceof multer.MulterError){
        switch(error.code){
            case 'LIMIT_FILE_SIZE':
                res.json({message:"file too large"})
                break;
            default:
                res.json({message:"server error"});
                break;
        }
    }
    else{
        res.json({message:"differnt file type"});
    }
});
app.listen(3000,()=>{console.log("port listening")});




