import './App.css';
import './assets/dowload.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Index from './components/index';
import Dowload from './components/dowload';
function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
      <Route exact path="/" element={<Index/>}/>
      <Route path="/dowload" element={<Dowload/>} />
      </Routes>
     </Router>
    </div>
  );
}

export default App;
