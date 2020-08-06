import React from "react";
import { Link } from "react-router-dom";
import "./stylesheets/Header.css";
import axios from "axios";

const Header = ({ displayName, signOutSuccess }) => {
  const signOut = () => {
    axios
      .get("/auth/logout")
      .then(function (res) {
        if (res.data.logout) {
          signOutSuccess();
        }
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  return (
    <>
      <header className="header">
        <h1>
          <Link to="/">M's Forum</Link>
        </h1>
        <div className="signin">
          {displayName === null ? (
            <Link to="/auth/signin">로그인 / 회원가입</Link>
          ) : (
            <Link to="#" onClick={() => signOut()}>
              <div className="displayName">{displayName}</div>
              로그아웃
            </Link>
          )}
        </div>
      </header>
    </>
  );
};
export default Header;
