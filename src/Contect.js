import axios from  'axios'
import React, {useEffect,useState}from 'react'
import { Link, useNavigate } from 'react-router-dom'
function Contect() {
  const [data,setData]=useState([])
  const navigate=useNavigate();
     useEffect( ()=>{
      axios.get('http://localhost:3000/Users').then(res=> setData(res.data))
      .catch(err => console.log(err));
     },[])
     const handelDelete=(id)=>{
      const confirm=window.confirm("if you delete this recode");
      if(confirm){
        axios.delete('http://localhost:3000/Users/'+ id)
        .then(res =>{
          setData((prevData) => prevData.filter(item => item.id !== id));
        }).catch(err=>console.log(err)) 
      }
    }
  return (
    <div className='d-flex flex-column justify-content-center align-items-center bg-light vh-100'>

      <h1>List of Users</h1>
      <div className='w-75 rounded bg-white border shadow p-4'>
        <div className='d-flex justify-content-end'>
          <Link to='/creat' className='btn btn-success'>ADD+</Link>
          </div>
        <table className='table table-striped'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((d,i)=>(
                <tr key={i}>
                  <td>{d.id}</td>
                  <td>{d.name}</td>
                  <td>{d.phone}</td>
                  <td>{d.email}</td>
                  <td>
                  <Link to={`/read/${d.id}`} className='btn btn-sm btn-info me-2'>Read</Link>
                    <button className='btn btn-sm btn-primary'>Edit</button>
                    <button onClick={e=> handelDelete(d.id)} className='btn btn-sm btn-danger'>Delete</button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
      
    </div>
  )
  
}

export default Contect
