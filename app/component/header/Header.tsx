'use client'

// import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../features/stateSlice/userSlice";
import { changeMode } from "../../features/stateSlice/modeSlice";
import "./Header.css";
import { RootState } from "@/app/redux/store";

const Header = () => {
  const dispatch = useDispatch();
  const themeMode = useSelector((state: RootState) => state.modeSwitch.themeMode);
  const isLogged = useSelector((state: RootState) => state.user.isUserLogged);
  // const [auth, setAuth] = useState(false);

  const loggingout = () => {
    localStorage.removeItem("ukcjgbSDHaksjdcserdfgvikjlakknacv");
    dispatch(logout());
  };

  return (
    <header>
      <div className="container">
        <div className="logo">
          <Link href="/" className="logo-text">
            <Image src={"/asset/logo.png"} width={100} height={100} alt="" />
          </Link>
        </div>

        {/* <nav>
          <ul>
            <li>Home</li>
            <li>Category</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav> */}

        <div className="icons">
          <div>
            {isLogged && (
              <Link href="/new/post">
                <i className="fas fa-edit"></i>
              </Link>
            )}
            <i
              className={`fas ${themeMode ? "fa-sun" : "fa-moon"}`}
              onClick={() => {
                dispatch(changeMode());
              }}></i>
          </div>
          {/* <i
            className="fas fa-bars"
            onClick={() => {
              setAuth(!auth);
            }}
          ></i> */}

          <div className="auth">
            {isLogged ? (
              <span className="primary-btn" onClick={loggingout}>
                Logout
              </span>
            ) : (
              <>
                <Link
                  href="/auth/signup"
                  className="primary-btn"
                  // onClick={() => {
                  //   setAuth(!auth);
                  // }}
                >
                  Sign Up
                </Link>
                <Link
                  href="/auth/login"
                  className="secondary-btn"
                  // onClick={() => {
                  //   setAuth(!auth);
                  // }}
                >
                  Log In
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
