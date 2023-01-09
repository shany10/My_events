import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Test from './page/test';
import Acceuil from './page/acceuil';

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
