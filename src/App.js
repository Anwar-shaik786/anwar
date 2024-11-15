import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Productpage from './category';


function App() {
  return (
    <div>
      <h1>Product</h1>
     <Routes>
      <Route path='/'  element={<anwar/>}/>
      <Route  path='/productdetails' element={<Productpage />}/>
     </Routes>
    </div>
    
     
      
  );
}

export default App;
