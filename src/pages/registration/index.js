import React, { useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

import "./registration.scss";

const Registration = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const [isWrongPassword, setIsWrongPassword] = useState(null);
  const [isSuccess, setIsSuccess] = useState(null);
  const [isUserSucces, setIsUserSucces] = useState(true);

  const setUser = async () => {
    if (password.length < 6) {
      setIsWrongPassword(true);
    } else {
      setIsWrongPassword(false);
      Axios.post("http://localhost:3001/api/users/registration", {
        email: login,
        password: password,
      }).then((response) => {
        if (response.data.status === "404") {
          console.log("такой пользователь сущетсвует");
          setIsUserSucces(false);
        } else if (response.data.status === "200") {
          setIsUserSucces(true);
          setIsSuccess(true);

          console.log("вы успешно зарегались");
          setLogin("");
          setPassword("");
        }
      });
    }
  };

  return (
    <div className="registration">
      <div className="container">
        <input
          onChange={(e) => setLogin(e.target.value)}
          type="text"
          placeholder="Логин"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="text"
          placeholder="Пароль"
        />
        <div> 
            Зарегистрироваться
        </div>
      </div>
    </div>
  );
};

export default Registration;
