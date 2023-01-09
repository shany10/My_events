import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Test from './page/test';

function App() {
  return (
    // <div className="">
      <Router>
        <Routes>
          <Route exact path='/' element={<Test />}></Route>
        </Routes>
      </Router>
    // </div>
  );
}

export default App;
