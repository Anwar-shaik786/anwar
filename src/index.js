import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import Firstcomponent from './firstcomponent';
// import Secondcomponent from './secondcomponent';
// import Thirdcomponent from './thirdcomponent';
// import Bootstrap from './bootstrap';
// import  Router  from '/react-router-dom';

// import Bootstrap from './component/bootstrap'
 import 'bootstrap/dist/css/bootstrap.min.css';
import Anwar from './router';
import { BrowserRouter } from 'react-router-dom';
import Registeruser from './rigistreuser';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <BrowserRouter>
   <App />
    <Anwar />
   </BrowserRouter>
   
  //   {/* <App /> */} 
  //   {/* <Firstcomponent />
  //   <Secondcomponent />
  //   <Thirdcomponent /> */}
  //   {/* <Bootstrap /> */}
  // // </React.StrictMode>
  // <Registeruser />
  
);

//   you want to start measuring performance in your app, pass a function
//  to log results (for example: reportWebVitals(console.log))
// or send to an analyticsIf endpoint. Learn more: https:bit.ly/CRA-vitals
// reportWebVitals();



