import Calculator from './Components/Calculator.js';
import Card from './Components/Card';
import {Link, Route,Routes} from "react-router-dom";
function App() {
  return (
    <>
    <nav>
      <ul>
        <li>
          <Link to="/Card">Card</Link>
        </li>
        <li>
          <Link to ="/Calculator" > Calculator</Link>
        </li>
      </ul>
    </nav>
    <Routes>
    <Route path="/Card"  element={<Card/>}/>

    <Route path="/Calculator"  element={<Calculator/>}/>
  </Routes></>
  )
}
export default App;
