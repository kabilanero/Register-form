import React, { useState } from 'react'
import './Register.css'
import { database } from './Firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';



export default function Register() {
    const [login,setlogin]=useState(false)

   const history=useNavigate()


    const handlesubmit=(e,type)=>{
        e.preventDefault();
        const email=e.target.email.value;
        const password=e.target.password.value;
        if(type=='Signup'){
        createUserWithEmailAndPassword(database,email,password).then((data)=>{
            console.log(data,"authdata")
            history('/home');
        }).catch(error=>{alert(error)
                         setlogin(true)   
    })
        
    }else{
        signInWithEmailAndPassword(database,email,password).then(data=>{
            console.log(data,"authdata")
            history('/home')
        }).catch(err=>{
            alert(err.code)
        })
    }
   }

  return (
    <div className='reg'>
      <h1>{login?'Sign-In':"Sign-Up"} </h1>
      <br />
      <br />
      <br />
    <form action="" onSubmit={(e)=>handlesubmit(e,login?'Signin':"Signup")}>
     <div className="content">

        <div className='res'>
              <span> <b>User-Id    :</b>  </span>
              <br />
              <input  name="email" type="email"  placeholder='User-Name'/>
        </div>
              <br />
              <br />
              <div className='res'>
              <span> <b>Password  :</b> </span>
              <br />
              <input name="password" type="password" placeholder='Password' />
              </div>
              <button className='subbtn'>{login?'Signin':"Signup"}</button>
     </div>
    </form>


    </div>
  )
}
