import React, { useState } from "react";
import "./style.css"; // Import the CSS file
import "bootstrap/dist/css/bootstrap.min.css"
import { Link } from "react-router-dom";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Here, you can add validation logic before logging in the user
    onLogin({ email, password });
  };

  return (
    <div className="login-background">
      <div className="container">
        <div className="row justify-content-center">
  
            <div className="card container-fluid">
              <div className="card-body">
                <h2 className="text-center mb-4">Login</h2>
                <form onSubmit={handleLogin}>
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary btn-block ">
                    Login
                  </button><br/>
                  <Link to={"/reg"} >Dont have an account?Register</Link>
                </form>
              </div>
            </div>
        
        </div>
      </div>
    </div>
  );
};

export default Login;
