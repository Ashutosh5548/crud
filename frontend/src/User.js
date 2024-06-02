import axios from 'axios';
import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useParams,useNavigate } from 'react-router-dom'

function User() {
    const [users, setUsers] = useState([])
    // const {id} = useParams()
    useEffect(()=>{
        axios.get("http://localhost:3001/")
        .then(result => setUsers(result.data))
        .catch(err => console.log(err))
    },[])
    const Delete=(id)=>{
        axios.delete("http://localhost:3001/deleteUser/"+id)
        .then(result => {
            console.log(result)
            window.location.reload()
        })
        .catch(err => console.log(err))
    }
    
  return (
    <div className="d-flex vh-100 bg-info justify-content-center align-items-center">
        <div className="w-50 bg-white rounded p-3">
            <Link to="/create" className='btn btn-success'>ADD+</Link>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Age</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user)=>{
                            return (
                                <tr>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.age}</td>
                                    <td>
                                        <Link to={`/update/${user._id}`} className='btn btn-success'>Update</Link>
                                        <button className='btn btn-danger' onClick={(e) => Delete(user._id)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default User