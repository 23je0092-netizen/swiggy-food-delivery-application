import React ,{useState} from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Components/Home';
import "./index.css";
import RestaurantMenu from './Components/RestaurantMenu';

import Restaurant from './Components/Restaurant';

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App(){

    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home></Home>} ></Route>
            <Route  path='/restaurant' element={<Restaurant></Restaurant>}   ></Route>
            <Route path="/city/delhi/:id" element={<RestaurantMenu></RestaurantMenu>}></Route>
        </Routes>
        </BrowserRouter>
       
        </>
       
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>)