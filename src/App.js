import './App.css';
import Navbar from './components/Shared/Navbar/Navbar';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import { Route, Routes } from 'react-router-dom';
import Signup from './components/Login/Signup';
import Services from './components/Services/Services';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
      </Routes>
    </div>
  );
}

export default App;