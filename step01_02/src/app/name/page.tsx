"use client"  // it tells that it is client side route (its react hook)
import React from 'react'
import Link from 'next/link'
import { useRouter } from "next/navigation"
function name() {
    console.log("Client")
    const router = useRouter(); //conditional rendering
    const handleBackClick = ()=>{
        console.log("I am back button click");
        
        router.back();
    }
    const handleLoginClick=()=>{
        //api call
        if(Math.random()>0.3){
            router.push("/dashboard")
        }
        else{
            alert("Login Failed")
        }
    }
  return (
    <div>
        <div>
            <button onClick={handleBackClick} className='bg-blue-800 rounded-md p-3'>
                Back
            </button>
            
            <input placeholder='Email' />
            <input placeholder='Password' />
            <button onClick={handleLoginClick}> Login </button>
        </div>
    </div>
  )
}

export default name
