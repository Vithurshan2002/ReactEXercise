import React from 'react'

const Signinpage = () => {
  return (
    <div className='flex justify-center items-center bg-green-800 h-screen'>
        <div className='bg-white p-5'>
            <h1 className='text-4xl font-bold '>Login</h1>
            
            <div className='font-semibold mt-4'>
                <p>Email</p>
                <input type="email" placeholder=' Email address'  className='outline-blue-500 outline-2 focus:outline-4  transition-all '  />
            </div>
            <div className='font-semibold mt-2'>
                <p>Password</p>
                <input type="password" placeholder=' password' className='outline-blue-500 outline-2 focus:outline-4  transition-all ' />
            </div>
            
            <button className='mt-4 p-2 bg-blue-700 w-full text-white font-extrabold tracking-wider hover:cursor-pointer hover:bg-blue-500 active:bg-green-950'>Login</button>
            <p className='text-xs text-gray-600'>Alreay Have an Account</p>
            <button className='mt-4 p-1 rounded-4xl bg-gray-300 w-full text-gray-800 font-bold tracking-wider hover:cursor-pointer hover:bg-gray-400 active:bg-blue-400'>SignUp</button>
        </div>
    </div>
  )
}

export default Signinpage