import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Contact from './components/screens/Contact';
import About from './components/screens/About';
import Profile from './components/screens/Profile';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='signup' element={<Signup/>} />
          <Route path='/' element={<Login/>} />
          <Route path='dashboard' element={<Dashboard/>} >
            <Route path='' element={<Profile/>} />
            <Route path='contact' element={<Contact/>} />
            <Route path='about' element={<About/>} />
           
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
