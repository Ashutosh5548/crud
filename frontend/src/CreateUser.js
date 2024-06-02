import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function CreateUser() {
  const[name,setName] = useState()
  const[email,setEmail] = useState()
  const[age,setAge] = useState()
  const navigate = useNavigate()
  const Submit=(e)=>{
    e.preventDefault()
    // console.log(name,email,age);
    axios.post("http://localhost:3001/createUser",{name,email,age})
    .then(result => {
      console.log(result)
      navigate("/")
    })
    .catch(err => console.log(err))
  }
  return (
    <div className='d-flex vh-100 bg-info justify-content-center align-items-center'>
        <div className="w-50 bg-white rounded p-3">
            <form onSubmit={Submit}>
              <h2>Create User</h2>
              <div className="mb-2">
                <lable htmlFor="">Name : </lable>
                <input type="text" id="name" name="name" onChange={(e)=> setName(e.target.value)} className='form-control'/>
              </div>
              <div className="mb-2">
                <lable htmlFor="email">Email : </lable>
                <input type="email" id="email" name="email" onChange={(e)=> setEmail(e.target.value)} className='form-control'/>
              </div>
              <div className="mb-2">
                <lable htmlFor="mobile">Age : </lable>
                <input type="text" id="age" name="age" onChange={(e)=> setAge(e.target.value)} className='form-control'/>
              </div>
              <button className="btn btn-success" >Create</button>
            </form>
          </div>
    </div>
  )
}

export default CreateUser