import React, { useState, useEffect } from "react";
import axios from "axios";
import "./LoginPage.css";

interface User {
  id: number;
  name: string;
  // Các thuộc tính khác của người dùng
}

const MainPage = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    // Gọi hàm để lấy danh sách người dùng khi component được render
    fetchUsers();
  }, []);

  // Function để lấy danh sách người dùng
  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:3001/api/users");
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  // Function để đăng nhập
  const login = async (email: string, password: string) => {
    try {
      const response = await axios.post("/api/user/login", {
        email,
        password,
      });
      // Lưu trữ token hoặc thông tin đăng nhập vào localStorage hoặc state
      // ...

      // Điều hướng đến trang chủ sau khi đăng nhập thành công
      window.location.href = "/home";
    } catch (error) {
      // Xử lý lỗi đăng nhập
      console.error(error);
    }
  };

  // Function để đăng ký
  const register = async (name: string, email: string, password: string) => {
    try {
      const response = await axios.post(
        "/api/user/register",
        {
          name,
          email,
          password,
        }
      );
      // Xử lý phản hồi đăng ký
      // ...

      // Hiển thị thông báo thành công hoặc lỗi cho người dùng
    } catch (error) {
      // Xử lý lỗi đăng ký
      console.error(error);
    }
  };

  // Function để cập nhật thông tin người dùng
  const updateUser = async (id: number, name: string, email: string) => {
    try {
      const response = await axios.put(`/api/user/${id}`, {
        name,
        email,
      });
      // Xử lý phản hồi cập nhật
      // ...

      // Hiển thị thông báo thành công hoặc lỗi cho người dùng
    } catch (error) {
      // Xử lý lỗi cập nhật
      console.error(error);
    }
  };



  return (
    <>
      <div className="section">
        <div className="containerLogin">
          <div className=" w-full h-full bg-slate-900 bg-[url('https://i.pinimg.com/564x/fd/b2/90/fdb290ab3db1358c12abd6860cd39e25.jpg')] bg-no-repeat bg-cover">
            <div className="row full-height justify-content-center">
              <div className="col-12 text-center align-self-center py-5">
                <div className="section pb-5 pt-5 pt-sm-2 text-center">
                  <h6 className="mb-0 pb-3">
                    <span>Log In </span>
                    <span>Sign Up</span>
                  </h6>
                  {/* Hiển thị danh sách người dùng */}
                  <ul>
                    {users.map((user) => (
                      <li key={user.id}>{user.name}</li>
                    ))}
                  </ul>
                  <input
                    className="checkbox"
                    type="checkbox"
                    id="reg-log"
                    name="reg-log"
                  />
                  <label htmlFor="reg-log"></label>
                  <div className="card-3d-wrap mx-auto">
                    <div className="card-3d-wrapper">
                      <div className="card-front">
                        <div className="center-wrap">
                          <div className="section text-center">
                            <h4 className="mb-4 pb-3">Log In</h4>
                            <div className="form-group">
                              <input
                                type="email"
                                name="logemail"
                                className="form-style"
                                placeholder="Your Email"
                                id="logemail"
                                autoComplete="off"
                              />
                              <i className="input-icon uil uil-at"></i>
                            </div>
                            <div className="form-group mt-2">
                              <input
                                type="password"
                                name="logpass"
                                className="form-style"
                                placeholder="Your Password"
                                id="logpass"
                                autoComplete="off"
                              />
                              <i className="input-icon uil uil-lock-alt"></i>
                            </div>
                            <a href="#" className="btn mt-4">
                              submit
                            </a>
                            <p className="mb-0 mt-4 text-center">
                              <a href="#0" className="link">
                                Forgot your password?
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="card-back">
                        <div className="center-wrap">
                          <div className="section text-center">
                            <h4 className="mb-4 pb-3">Sign Up</h4>
                            <div className="form-group">
                              <input
                                type="text"
                                name="logname"
                                className="form-style"
                                placeholder="Your Full Name"
                                id="logname"
                                autoComplete="off"
                              />
                              <i className="input-icon uil uil-user"></i>
                            </div>
                            <div className="form-group mt-2">
                              <input
                                type="email"
                                name="logemail"
                                className="form-style"
                                placeholder="Your Email"
                                id="logemail"
                                autoComplete="off"
                              />
                              <i className="input-icon uil uil-at"></i>
                            </div>
                            <div className="form-group mt-2">
                              <input
                                type="password"
                                name="logpass"
                                className="form-style"
                                placeholder="Your Password"
                                id="logpass"
                                autoComplete="off"
                              />
                              <i className="input-icon uil uil-lock-alt"></i>
                            </div>
                            <a href="#" className="btn mt-4">
                              submit
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
