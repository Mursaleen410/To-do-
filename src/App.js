
import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contect from './Contect';
import Creat from './Creat';
import Update from './Update';
import Read from './Read';
import 'bootstrap/dist/css/bootstrap.min.css';
function App(){
  return(
    <BrowserRouter>
    <Routes>
        <Route path='/contect' element={<Contect />}></Route>
        <Route path='/creat' element={<Creat/>}></Route>
        <Route path='/update/:id' element={<Update />}></Route>
        <Route path='/read/:id' element={<Read />}></Route>
    </Routes>
    </BrowserRouter>
  )
  
}
 

export default App;
