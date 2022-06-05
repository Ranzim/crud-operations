import axios from 'axios';

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Read = () => {

  const setData = (data) => {
    let  mainData = data;
    console.log(mainData)
    
    localStorage.setItem('mainData', mainData);
    // localStorage.setItem('Capacity', Capacity);
    // localStorage.setItem('Name', Name)

    // localStorage.setItem('Image', Image)
 }

    
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
    
      <th scope="col">image</th>
    
    </tr>
  </thead>
  <tbody>
    
    {APIData.map((data) => {
     return (
        <tr>
     <th scope="row">{data.Layout}</th>
      <td>{data.Capacity}</td>
      <td>{data.Name}</td>
     
      <td>{data.Image}</td>

      <Link to='/update'>
      <td><button onClick={() => setData(data)}>edit</button></td>
      </Link>
      <td><button >delele</button></td>
   
          
          </tr> 
          
   )})}
  
  
 
    
 

  </tbody>
</table>
</div>
    </>
  )
}

export default Read