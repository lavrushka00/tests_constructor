import React, { useState } from "react";

import "./main.scss";
import profile from "../../components/img/profile.svg";

import axios from "axios";
import UsersProfilesList  from "./usersProfilesList";

const Main = () => {
  const [profiles, setProfiles] = useState(null);

  React.useEffect(() => {
    axios.get("http://localhost:3001/api/getAllUsersTests").then((res) => {
      const data = res.data;
      setProfiles(data);
    });
  }, []);

  return (
    <div className="main">
      <div className="container">
        <div className="main_header">Главная</div>
       
        {profiles ? <UsersProfilesList profiles = {profiles}/> : "Загрузка"}
      </div>
    </div>
  );
};

export default Main;
