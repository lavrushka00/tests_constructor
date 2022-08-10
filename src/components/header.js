import { Link } from "react-router-dom";
import "./header.scss";
import profile from "./img/profile.svg";
import { useSelector } from "react-redux";
import { isAuthSelector } from "../redux/slices/auth";
import { useState } from "react";

const Header = () => {
  
  const [dropDown, setDropDown] = useState(false)
 
  const isAuth = useSelector(isAuthSelector);
  // const data = useSelector((state) => state)
  // console.log(data)
  return (
    <div className="header">
      {isAuth ? (
        <>
          <img src={profile} alt="" onClick={() => setDropDown(!dropDown)}/>
          {dropDown ? (
            <div className="header_dropDown">
              <span>Мой профиль</span>
              <span>Мои тесты</span>
              <span>Пройденные тесты</span>
              <span>выйти</span>
            </div>
          ) : null}
        </>
      ) : (
        <>
          <Link to="/registration">
            <div>Зарегистрироваться</div>
          </Link>

          <Link to="/login">
            <div>Войти</div>
          </Link>
        </>
      )}
    </div>
  );
};

export default Header;
