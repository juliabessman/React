import React from 'react';
import About from './components/About'; 
import Nav from './components/Nav'; 
import Title from './components/Title'; 
import Footer from './components/Footer'; 
import Top from './components/Top'; 
import Mainphoto from './components/Mainphoto'; 
import Gallery from './components/Gallery'; 






class App extends React.Component {
 render() {
  return(
   <div>
<Title />
<Mainphoto />
<Nav />
<About />
<Top />
<Gallery />
<Footer />


  

   </div>
  );
 }
}
export default App