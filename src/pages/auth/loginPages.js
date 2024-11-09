// src/components/Login.js
import React, { useState } from "react";
import TextField from "../../components/inputField/textField";
import PasswordField from "../../components/inputField/passwordField";
import { Link, useNavigate } from "react-router-dom";

const LoginPages = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Logged in with:", email, password);
    navigate("/home");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-700">Login</h2>

        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <TextField
              label="Email"
              placeholder="Masukan Email Anda"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <PasswordField
              label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Masukan Password Anda"
            />
          </div>
          <div className="mb-4">
            <PasswordField
              label="Komfirmasi Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Masukan ulang Password Anda"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
          >
            <Link to="/home">Login</Link>
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPages;
