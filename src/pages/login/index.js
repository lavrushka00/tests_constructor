import "../../index.scss";
import React, {useEffect, useState} from "react";

import { Link, Navigate } from "react-router-dom";
import Axios from "axios";
import axios from "./../../axios";

import { useSelector, useDispatch } from "react-redux";
import {fetchAuth, isAuthSelector} from "../../redux/slices/auth";
import "./login.scss";

const Login = () => {
  const [login, setLogin] = React.useState("");
  const [password, setPassword] = React.useState("");
  

  const user = useSelector((state) => state.userSlice);
  const isAuth = useSelector(isAuthSelector)
  const dispatch = useDispatch();
 

  const [position, setPosition] = useState(0)

  useEffect(() => {
    console.log(position)
    window.addEventListener("scroll", () => setPosition(window.scrollY));
    console.log("hi")
    return () => {
      window.removeEventListener("scrol", () => position)
    }
}, [position]);



  const logIn = async () => {
    //const {data} = await fetchAuth({email: login, password: password})
    // const {data}  = await dispatch(fetchAuth({email: login, password: password}))
    //console.log("@@data", data)
    // console.log("@@@data", data)
    // if('token' in data)
    // {
    //   window.localStorage.setItem("token", data.token)
    // }
    dispatch(fetchAuth({email: login, password: password})).then((res) => {
      if("token" in res.payload)
      {
      
        window.localStorage.setItem("token", res.payload.token)
      }else {
        alert("не удалось авторизоваться!")
      }
     })


  //  dispatch(fetchAuth({email: login, password: password})).then((res) => {
  //   console.log("@@res", res)
  //  })
 
  };
 

if(isAuth.authorization)
{
  return <Navigate to = '/main'/>
}
  return (
    <div className="Login">
      <div className="container">
        <input placeholder="Логин" onChange={(e) => setLogin(e.target.value)}/>
        <input placeholder="Пароль" onChange={(e) => setPassword(e.target.value)}type = "password"/>
          
        <div onClick={() => logIn()}>войти</div>
      </div>
    </div>
  );
};

export default Login;
