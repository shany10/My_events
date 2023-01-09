import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Test from './page/test';
import Acceuil from './page/acceuil';
import "./css/style.css";
import "./css/acceuil.css"; 


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Acceuil />}></Route>
        <Route exact path='/test' element={<Test />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
