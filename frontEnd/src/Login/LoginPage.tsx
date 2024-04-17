import React, { useState } from "react";
import "./LoginPage.css";
import { NavLink, useNavigate } from "react-router-dom";
import Loading from "../Loading";

function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);

  const [userCredentials, setUserCredentials] = useState({
    EMAIL: "",
    PASSWORD: "",
  });

  const navigate = useNavigate();

  const handleUserInput = (fieldName: string) => {
    return (e) => {
      setUserCredentials((prev) => {
        return {
          ...prev,
          [fieldName.toUpperCase()]: e.target.value,
        };
      });
    };
  };

  const handleLogin = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:3001/api/user/sign-in", {
        method: "post",
        body: JSON.stringify({
          email: userCredentials.EMAIL,
          password: userCredentials.PASSWORD,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const status = response.status;
      if (status === 200) {
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
        const data = await response.json();
        //handle data
        navigate("/");
      } else if (status === 400) {
        // Handle bad request
        setIsLoading(false);
        const errorData = await response.json();
        console.error("Bad Request:", errorData);
        navigate("/login");
        // Show error message to user
      } else if (status === 404) {
        // Handle not found
        setIsLoading(false);
        console.error("Not Found:", response.statusText);
        // Show error message to user
        navigate("/login");
      } else if (status === 500) {
        // Handle server error
        setIsLoading(false);
        console.error("Internal Server Error");
        // Show error message to user
        navigate("/login");
      } else {
        // Handle other errors
        setIsLoading(false);
        console.error("Unknown Error:", status);
        // Show generic error message to user
        navigate("/login");
      }
    } catch (error) {
      setIsLoading(false);
      console.error("Network Error:", error.message);
      // Show network error message to user
      navigate("/login");
    }
  };

  return (
    <>
      {isLoading && <Loading />}
      <div className="login">
        <img
          src="https://i.pinimg.com/736x/0b/6f/12/0b6f12699ee63503fe2b05812c7b9c2e.jpg"
          className="login__img"
        />
        <form action="" className="login__form">
          <h1 className="login__title">Đăng nhập</h1>

          <div className="login__content">
            <div className="login__box">
              <i className="ri-user-3-line login__icon"></i>

              <div className="login__box-input">
                <input
                  type="email"
                  required
                  className="login__input"
                  id="login-email"
                  placeholder=" "
                  onChange={handleUserInput("EMAIL")}
                />
                <label htmlFor="login-email" className="login__label">
                  Email
                </label>
              </div>
            </div>

            <div className="login__box">
              <i className="ri-lock-2-line login__icon"></i>

              <div className="login__box-input">
                <input
                  type="password"
                  required
                  className="login__input"
                  id="login-pass"
                  placeholder=" "
                  onChange={handleUserInput("PASSWORD")}
                />
                <label htmlFor="login-pass" className="login__label">
                  Mật khẩu
                </label>
                <i className="ri-eye-off-line login__eye" id="login-eye"></i>
              </div>
            </div>
          </div>

          <div className="login__check">
            <div className="login__check-group">
              <input
                type="checkbox"
                className="login__check-input"
                id="login-check"
              />
              <label htmlFor="login-check" className="login__check-label">
                Ghi nhớ tôi
              </label>
            </div>

            <a href="/" className="login__forgot">
              Quên mật khẩu
            </a>
          </div>

          <button type="button" className="login__button" onClick={handleLogin}>
            Đăng nhập
          </button>

          <p className="login__register">
            Chưa có tài khoản
            <NavLink to="/signup" className="ml-3">
              Đăng ký
            </NavLink>
          </p>
        </form>
      </div>
    </>
  );
}
export default LoginPage;
