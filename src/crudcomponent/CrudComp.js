import React,{useState} from 'react'
import axios from 'axios';

const CrudComp = () => {


  const  [user, setuser] = useState({
    Layout:"",
    Name: "",
    Capacity: "",
    status: "",
    Image: ""
  
})



let data = {
  Layout: user.Layout,
  Name: user.Name, 
  Capacity:user.Capacity,
  status:user.status,
  Image:user.Image
}

const submitForm = (e)=>{
  e.preventDefault();
  
  axios.post(`https://6296e7e814e756fe3b253d5a.mockapi.io/crud/v1/fakeData`,data)
.then((response) => {
  console.log(response.status);
  console.log(response.data);
});

  



}


let name, value;
const handleInputs =(e) =>{
  console.log(e);
name = e.target.name;
value =e.target.value;
setuser({...user,[name]:value})
 
console.log(user);
}

  return (
    <>
     <p>create table</p>
     <hr/>
    <div className="container">
     
<div className="main-from">
  <form onSubmit={submitForm}>
      
  <div class="form-group row">
    <label for="inputEmail3" class="col-sm-1 col-form-label">Layout:</label>
    <div class="col-sm-6">
    <select  for='option' class="form-control"   name="Layout" onChange={handleInputs} value={user.Layout}>
    <option value="" disabled selected hidden>Selct Layout</option>
        <option id='option' name="white" onChange={handleInputs} value={user.white}>white</option>
        <option id='option'name="black" onChange={handleInputs} value={user.black}>black</option>
        <option id='option'name="green" onChange={handleInputs} value={user.green}>green</option>
   </select>
      
    </div>
  </div>
  
  <div class="form-group row">
    <label for="inputEmail5" class="col-sm-1 col-form-label">Name:</label>
    <div class="col-sm-6">
    <input type="text" class="form-control" id="inputEmail5"name="Name" onChange={handleInputs} value={user.Name}  placeholder="Enter Name"/>
    
    </div>
  </div>

  <div class="form-group row">
    <label for="inputEmail8" class="col-sm-1 col-form-label">Capacity:</label>
    <div class="col-sm-6">
      <input type="number" class="form-control" id="inputEmail8" name="Capacity" onChange={handleInputs} value={user.Capacity}  placeholder="Enter Number"/>
    </div>
  </div>



  <div class="form-group row">
    <div class="col-sm-1">status</div>
    <div class="col-sm-6">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="gridCheck1" name="status" onChange={handleInputs} value={user.status}/>
        <label class="form-check-label" for="gridCheck1">
       
        </label>
      </div>
    </div>
  </div>

  <div class="form-group row">
  <label for="exampleFormControlFile1" class="col-sm-1  col-form-label">image</label>
    <div class="col-sm-8">
    <input type="file" placeholder='Choose file' class="form-control-file" id="exampleFormControlFile1"  accept="image/png, image/gif, image/jpeg" name="Image" onChange={handleInputs} value={user.Image} />
    </div>
  </div>



  <div class="form-group row">
    <div class="col-sm-2">
   
    </div>
    <div class="col-sm-6">
      <button type="submit" class="btn button1">Create Table</button>
     
      {/* <button type="submit" class="btn button2">Cancel</button> */}
      
    </div>
  </div>
</form>

</div>
    </div>
    </>
  )
}

export default CrudComp