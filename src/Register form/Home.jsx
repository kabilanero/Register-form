import React from 'react'
import '../App.css'
import { signOut } from 'firebase/auth'
import { database } from './Firebase'
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const history=useNavigate()

 const handlesignout=()=>{
    signOut(database).then(val=>history('/')).catch(error=>console.log(error))
 }
 
  return (
    <div>
      <h1>Home</h1>

      <br />
      <br />
      <br />
      <button onClick={handlesignout}>Signout</button>
    </div>
  )
}
