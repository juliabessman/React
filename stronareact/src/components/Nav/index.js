
import './style.css';
import React, { useState } from 'react';



const Nav=()=>(
    <div>
    <nav class='nav'>
        <a href="#abo" onClick={() => setCount(count + 1)}>About us</a>
        <a href="#to" onClick={() => setCount(count + 1)}>Top products</a>
        <a href="#gall" onClick={() => setCount(count + 1)}> Gallery</a>
        <a href="#cont" onClick={() => setCount(count + 1)}>Contact</a>
    </nav>
   
    </div>
 
)
export default Nav
