import './App.css'
import Navbar from './components/navbar/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Bursatil from './components/Bursatil/Bursatil';

function App() {

  return (
    <>
    <Router>
    <Navbar/>
    <Routes>
     <Route path='/' element={<Bursatil/>}/> 
    </Routes>
    </Router>
    </>
    
  )
}

export default App
