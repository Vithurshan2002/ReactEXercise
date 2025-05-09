
const express=require('express');
const multer=require('multer');
const app=express();
const path=require('path');
const cors=require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
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

let filsize=30*1024*1024;

const fileFilter=(req,file,cb)=>
{
    const allowedtype=  /jpeg|jpg|png|mp4|pdf/;
    const isallowed=allowedtype.test(file.mimetype);
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
app.use(morgan('combined'));
app.use(express.json());
app.use(bodyParser.urlencoded())
app.use(cors());

app.post('/imageuploading',upload.array("imagedemo",4),(req,res,next)=>{
    
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
        console.log(error);
        res.json({message:"differnt file type"});
    }
});
app.listen(3000,()=>{console.log("port listening")});




