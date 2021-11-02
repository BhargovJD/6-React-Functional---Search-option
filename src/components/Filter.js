import React from 'react'
import MockData from '../MOCK_DATA.json'
import { useState } from 'react'

export default function Filter() {

    const [searchTerm, setSearchTerm ] = useState("");



    return (
        <div>


<div class="input-group mb-3">
  <input onChange={(e)=>{setSearchTerm(e.target.value)}} type="text" class="form-control" placeholder="Search name..." aria-label="Recipient's username" aria-describedby="basic-addon2"/>
  <div class="input-group-append">
  <button type="button" class="btn btn-primary">Search</button>

  </div>
</div>


<table class="table">
  <thead>
    <tr>

      <th >First name</th>
      <th >Last name</th>
      <th >Email</th>
      <th >Gender</th>
    </tr>
  </thead>
  <tbody>


      {MockData.filter(val=>{
          if(searchTerm===""){
              return val;
          }
          else if(
              val.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
              val.last_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
              val.email.toLowerCase().includes(searchTerm.toLowerCase())
                ){
                  return val;
              }

      }).map(m=>(
          <tr key={m.id}>

          <td>{m.first_name}</td>
          <td>{m.last_name}</td>
          <td>{m.email}</td>
          <td>{m.gender}</td>

          </tr>
      ))}


  </tbody>
</table>

        </div>
    )
}
