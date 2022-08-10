import { Routes, Route, Navigate } from "react-router-dom";
import React from "react";

import { useDispatch, useSelector } from "react-redux";

//import "./App.css";
import Login from "./pages/login";
import Registration from "./pages/registration";
import Home from "./pages/home";
import Header from "./components/header";
import Main from "./pages/main";
import { fetchAuthMe, isAuthSelector } from "./redux/slices/auth";



function App() {

  const dispatch = useDispatch()
  const isAuth = useSelector(isAuthSelector)

  React.useEffect(() => {
   dispatch(fetchAuthMe())
    
  }, [])

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path= "main" element= {<Main />}/>
      </Routes>
    </div>
  );
}

export default App;
