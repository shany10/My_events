import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './page/home';
import Event from './page/event';
import Profil from './page/profil';
import Register from './page/register';
import Login from './page/login';
import Chat from './page/chat';
import "./css/style.css";
import "./css/navbar.css";
import "./css/home.css";
import "./css/event.css"; 
import "./css/pagination.css";
import "./css/profil.css";
import "./css/register.css";
import "./css/login.css";
import "./css/chat.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route exact path='/profil' element={<Profil />}></Route>
        <Route exact path='/register' element={<Register />}></Route>
        <Route exact path='/login' element={<Login />}></Route>
        <Route exact path='/chat' element={<Chat />}></Route>
        <Route exact path='/event/:uuid' element={<Event />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
