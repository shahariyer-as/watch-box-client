
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
import AuthProvider from './Pages/Login/Login/Firebase/Context/AuthProvider';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import Nav from './Pages/Shared/Navigation/Nav';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Nav></Nav>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/home" element={<Home></Home>}></Route>
            <Route path="/login" element={<Login></Login>}></Route>
            <Route path="/register" element={<Register></Register>}></Route>
            {/* <Route path="/allproducts" element={<Pro />} />
      <Route path="//booking/:productId" element={<Food />}/> */}
          </Routes>

        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
