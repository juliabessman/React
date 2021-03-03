
import React from 'react';
import './style.css';
import Top1 from '../../assets/photo1.png';
import Top2 from '../../assets/photo2.png';
import Top3 from '../../assets/photo3.png';
import Top4 from '../../assets/photo4.png';


const Gallery=()=>(
    <div>
    <div id='gall'>
    <h1 className='gallery'>Gallery</h1>
    </div>
  <div className="top">
     <img className='top1' src ={Top1} alt="photo1"/>
     <img className='top2' src ={Top2} alt="photo2"/>
     <img className='top3' src ={Top3} alt="photo3"/>
     <img className='top4' src ={Top4} alt="photo4"/>

  </div>
  </div>
)
export default Gallery

