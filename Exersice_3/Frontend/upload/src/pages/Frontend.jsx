import React, { useState } from 'react'
import axios from 'axios';
const Frontend = () => {

  /*   const[file,setfile]=useState('');


    const upload=async()=>{
        
        try{
            const data=await axios.post("http://localhost:3000/imageuploading",{'imagedemo':file},{headers:{"Content-Type":"multipart/form-data"}});
          
        }
        catch(er)
        {
            console.log(er)
        }
       
    }
   
   const Filesdata=(e)=>{
    
    console.log( e.target.files) ;
    console.log( e.target.files[0]) ;
    setfile(e.target.files[0] );
   
   } */
   
    const[file,setfile]=useState([]);
    const upload=async()=>{
        if(file.length<=4){
            const fd=new FormData();
            file.forEach((img) => fd.append('imagedemo', img));
        }
       else{
        alert("maximum 4 image is posible to select")
       
        return;
       }
       
        try{
           
            const data=await axios.post("http://localhost:3000/imageuploading",fd);
          console.log(data);
          
        }
        catch(er)
        {
            console.log(er.data);
        }
       
    }


    return (
        <>

            <h1>Upload Your Imagge</h1>
            <div>
                <input type="file" name="imagedemo" multiple  onChange={(e)=>{setfile([...e.target.files] )}}/>
                <button onClick={upload}>Upload</button>
            </div>
        </>

    )
}
export default Frontend;









