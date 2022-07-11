import './App.css';
import PlayerRefund from './pages/PlayerRefund';
import Home from './pages/Home'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/PlayerRefund" element={<PlayerRefund />}/>
        
        </Routes>
    </Router>
    </div>
  );
}

export default App;
