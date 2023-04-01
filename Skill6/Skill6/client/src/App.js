// import logo from './logo.jpg';
// import klu from './klu.png';
import './App.css';
import Ex61 from './components/Ex61'
import Ex63 from './components/Ex63'
import { BrowserRouter, Routes, Route } from 'react-router-dom'; //npm i react-router-dom to install react-router-dom package in client cmd
//BrowserRouter, Routes and Route are used to route from one page to another like from signup to login etc.
// import { Container, Toolbar, AppBar } from '@material-ui/core'; //npm i @material-ui/core --force to install @material-ui/core package in client cmd


function App() {
  // function opetarion(){
  //   let vl=document.getElementById("Value");
  //   vl.value="1";
  // }
  return(
    <div className="App">

      <div className='App-body'>
      <BrowserRouter>
            <Routes>
              <Route path='/' element={<Ex61 />} />
              {/* <Route path='/ex63' element={<Ex63 />} /> */}
            </Routes>
      </BrowserRouter>
      </div>
    </div>
      
  );

}

export default App;
