import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toast'
const LoginPage = () => {
        const[username,setusername]=useState('');
        const[email,setemail]=useState('');
        const[password,setpassword]=useState('');
        
        const notify = () =>  toast.success('Successfully Registerd!', {
            position: "bottom-center",
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
           
            });

        const Storedata=(username,email,password)=>{
            axios.post("http://localhost:3000/signup",{username:username,email:email,password:password}).then((res)=>{
                console.log(res);
               
            }).catch((er)=>{
                console.log(er);
            })
        }


        const Registeruser=()=>{
            if(username!='' && email!="" && password!="")
            {
                Storedata(username,email,password);
                setusername('');
                setpassword('');
                setemail('');
                notify();//tostmessage

            }
            else{
                    console.log("enter all details")
            }
        }


  return (
    <div className='flex justify-center items-center bg-green-800 h-screen'>
        <div className='bg-white p-5'>
            <h1 className='text-4xl font-bold '>Register</h1>
            <div className='font-semibold mt-4'>
                <p>UserName</p>
                <input type="text" value={username} placeholder=' User Name' className='outline-blue-500 outline-2 focus:outline-4  transition-all ' onChange={(e)=>{setusername(e.target.value)}} />
            </div>
            <div className='font-semibold mt-2'>
                <p>Email</p>
                <input type="email" value={email} placeholder=' Email address'  className='outline-blue-500 outline-2 focus:outline-4  transition-all '  onChange={(e)=>{setemail(e.target.value)}} />
            </div>
            <div className='font-semibold mt-2'>
                <p>Password</p>
                <input type="password" value={password} placeholder=' password' className='outline-blue-500 outline-2 focus:outline-4  transition-all'   onChange={(e)=>{setpassword(e.target.value)}} />
            </div>
            
            <button className='mt-4 p-2 bg-blue-700 w-full text-white font-extrabold tracking-wider hover:cursor-pointer hover:bg-blue-500 active:bg-green-950' onClick={()=>{Registeruser()}}>Register</button>
            <p className='text-xs text-gray-600'>Alreay Have an Account</p>
           <Link to={'/'}> <button className='mt-4 p-1 rounded-4xl bg-gray-300 w-full text-gray-800 font-bold tracking-wider hover:cursor-pointer hover:bg-gray-400 active:bg-blue-400'>Login</button></Link>
        </div>
        <ToastContainer
position="bottom-center"
autoClose={1000}
hideProgressBar
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"

/>
    </div>
    
  )
}

export default LoginPage;