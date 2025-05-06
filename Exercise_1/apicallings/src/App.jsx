import { useEffect, useState } from "react"
import axios from 'axios';
function App() {
 const ulta="12345";
  const [datas,setdata]=useState([]);
    function ApiCall()
    {
         axios.get("https://jsonplaceholder.typicode.com/todos/1",{headers:{Authorization:`Bearer ${ulta}`,ContentType:'app/json'}}).then((response)=>{
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
