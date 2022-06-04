import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './css/style.css';
import CrudComp from './crudcomponent/CrudComp';
import Read from './crudcomponent/component/Read';
import Update from  './crudcomponent/component/Update'
 
function App() {
  return (
   <>
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<CrudComp />}>   </Route>
        <Route path='/read' element={<Read />} ></Route>
        <Route path="update" element={<Update />}> </Route>
       </Routes> 
     
  </BrowserRouter>
   
   </>
  );
}

export default App;
