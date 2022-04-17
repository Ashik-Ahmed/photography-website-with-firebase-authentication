import './App.css';
import Navbar from './components/Shared/Navbar/Navbar';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Signup from './components/Login/Signup';
import Services from './components/Services/Services';
import About from './components/About/About';
import Blogs from './components/Blogs/Blogs';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Shared/Footer/Footer';
import Checkout from './components/Checkout/Checkout';
import RequireAuth from './components/RequireAuth/RequireAuth';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/checkout'
          element={
            <RequireAuth>
              <Checkout></Checkout>
            </RequireAuth>
          }>
        </Route>

      </Routes>

      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;