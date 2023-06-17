import React from 'react';
import ReactDOM from 'react-dom/client';
import World from './World';
import Hospital from './Hospital';
import Voucher from "./Voucher";
import "./App.css"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <World />
    {/* <Hospital />
    <Voucher /> */}
  </React.StrictMode>
);
