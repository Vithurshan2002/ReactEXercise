import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toast'
const Signinpage = () => {

    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');

    const notify = () => toast.success('Wecome to our home page', {
        position: "bottom-center",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",

    });
 

    const logindata = (email, password) => {
        axios.post("http://localhost:3000/login", { email: email, password: password }).then((res) => {
            console.log(res);
            setemail('');
            setpassword('');
            notify();
        }).catch((er) => {
            console.log("error")
    
            
            
        })
    }



    return (
        <div className='flex justify-center items-center bg-green-800 h-screen'>
            <div className='bg-white p-5'>
                <h1 className='text-4xl font-bold '>Login</h1>

                <div className='font-semibold mt-4'>
                    <p>Email</p>
                    <input type="email" placeholder=' Email address' className='outline-blue-500 outline-2 focus:outline-4  transition-all ' onChange={(e) => { setemail(e.target.value) }} />
                </div>
                <div className='font-semibold mt-2'>
                    <p>Password</p>
                    <input type="password" placeholder=' password' className='outline-blue-500 outline-2 focus:outline-4  transition-all ' onChange={(e) => { setpassword(e.target.value) }} />
                </div>

                <button className='mt-4 p-2 bg-blue-700 w-full text-white font-extrabold tracking-wider hover:cursor-pointer hover:bg-blue-500 active:bg-green-950' onClick={() => { logindata(email, password) }}>Login</button>
                <p className='text-xs text-gray-600'>Alreay Have an Account</p>
                <Link to={'/Signup'}> <button className='mt-4 p-1 rounded-4xl bg-gray-300 w-full text-gray-800 font-bold tracking-wider hover:cursor-pointer hover:bg-gray-400 active:bg-blue-400'>SignUp</button></Link>
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

export default Signinpage