import axios from 'axios'
import React, { useState,useEffect } from 'react'
import { useParams,useNavigate } from 'react-router-dom'

function UpdateUser() {
  const {id} = useParams()
  const[name,setName] = useState()
  const[email,setEmail] = useState()
  const[age,setAge] = useState()
  const navigate = useNavigate()
  useEffect(()=>{
    axios.get('http://localhost:3001/getUser/'+id)
    .then(result => {
      setName(result.data.name)
      setEmail(result.data.email)
      setAge(result.data.age)
    })
    .catch(err => console.log(err))
  },[])
  const Update=(e)=>{
    e.preventDefault()
    axios.put("http://localhost:3001/updateUser/"+id,{name,email,age})
    .then(result => {
      console.log(result)
      navigate("/")
    })
    .catch(err => console.log(err))
  }
  return (
    <div className='d-flex vh-100 bg-info justify-content-center align-items-center'>
        <div className="w-50 bg-white rounded p-3">
            <form onSubmit={Update} >
              <h2>Update User</h2>
              <div className="mb-2">
              <lable htmlFor="">Name : </lable>
              <input type="text" id="name" name="name" onChange={(e)=> setName(e.target.value)} value={name} className='form-control'/>
              </div>
              <div className="mb-2">
              <lable htmlFor="email">Email : </lable>
              <input type="email" id="email" name="email" onChange={(e)=> setEmail(e.target.value)} value={email} className='form-control'/>
              </div>
            <div className="mb-2">
              <lable htmlFor="mobile">Age : </lable>
              <input type="text" id="age" name="age" onChange={(e)=> setAge(e.target.value)} value={age} className='form-control'/>
            </div>
              <button className="btn btn-success" >Update</button>
            </form>
          </div>
    </div>
  )
}

export default UpdateUser