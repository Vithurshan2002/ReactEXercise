import { useEffect, useState } from "react"
import axios from 'axios';
function App() {
 
  const [datas,setdata]=useState([]);
    function ApiCall()
    {
         axios.get("https://jsonplaceholder.typicode.com/todos/1").then((response)=>{
            setdata(()=>[...datas,response.data]);
            console.log(datas);
        }).catch((err)=>{
          console.log(err);
        }) 


         
    }

  useEffect(()=>{
    ApiCall();
  },[]
 )

  return (
    <>
      
       
    </>
  )
}

export default App
