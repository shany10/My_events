import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Acceuil from './page/acceuil';
import Event from './page/event';
import Profil from './page/profil';
import "./css/style.css";
import "./css/navbar.css";
import "./css/acceuil.css";
import "./css/event.css"; 
import "./css/pagination.css";
import "./css/profil.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Acceuil />}></Route>
        <Route exact path='/profil' element={<Profil />}></Route>
        <Route exact path='/event/:uuid' element={<Event />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
