import './App.css';
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login.jsx";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import SignUp from "./pages/SignUp.jsx";
import Home from "./pages/Home.jsx";
import { register } from './store/userSlice';
import Footer from './components/footer/Footer';
import SubFooter from './components/footer/SubFooter';
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
     let user = JSON.parse(localStorage.getItem("User"));
    dispatch(register(user));
  }, [dispatch]);
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      <Footer/>
      <SubFooter/>
    </div>
  );
}

export default App;
