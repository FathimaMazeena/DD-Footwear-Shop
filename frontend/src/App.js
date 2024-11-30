
import './App.css';


import{Home} from './components/Home'
import{Product} from './components/Product'
import{Order} from './components/Order'
import{Customer} from './components/Customer'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {Navigation} from './components/Navigation'





function App() {
  return (

    <BrowserRouter>
    <div className="container">

      

      <h3 className="m-3 d-flex justify-content-center">DD FOOTWEAR</h3>
      <h5 className="m-3 d-flex justify-content-center">Information Management System</h5>

     
      <Navigation/>


      <Routes>
       
        <Route path='/' element={<Product />}/>
        <Route path='/order' element={<Order />}/>
        <Route path='/customer' element={<Customer />}/>


        

      </Routes>

      
    </div>
    </BrowserRouter>
    
  );
}

export default App;
