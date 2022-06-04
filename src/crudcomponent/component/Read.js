import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Read = () => {

    
const [APIData, setAPIData] = useState([]);
useEffect(() => {
    axios.get(`https://6296e7e814e756fe3b253d5a.mockapi.io/crud/v1/fakeData`)
        .then((response) => {
            console.log(response.data)
            setAPIData(response.data);
        })
}, [])

  return (
    <>
    <div className='container'>
        <div><h1>here  form data</h1></div>
        <hr/>
    <table class="table table-striped ">
  <thead>
    <tr>
      <th scope="col">layout</th>
      <th scope="col">capacity</th>
      <th scope="col">name</th>
      <th scope="col">status</th>
    
    </tr>
  </thead>
  <tbody>
    
    {APIData.map((data) => {
     return (
        <tr>
     <th scope="row">{data.Layout}</th>
      <td>{data.Capacity}</td>
      <td>{data.Name}</td>
      <td>{data.status}</td>
      <td>{data.Image}</td>
          {/* <Table.Cell>{data.firstName}</Table.Cell>
           <Table.Cell>{data.lastName}</Table.Cell>
           <Table.Cell>{data.checkbox ? 'Checked' : 'Unchecked'}</Table.Cell> */}
       <img src={data.Image} className=""/>
          </tr> 
          
   )})}
  
  
 
    
 

  </tbody>
</table>
</div>
    </>
  )
}

export default Read