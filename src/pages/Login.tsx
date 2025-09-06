import React from "react";
import { useFormik } from "formik";
import { FaLock, FaUserCircle, FaDice } from "react-icons/fa";

const Login: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values) => {
      // Handle login logic here
      console.log("Logging in with", values);
    },
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 via-slate-800 to-yellow-400 flex items-center justify-center">
      <div className="max-w-xs w-full bg-white bg-opacity-95 rounded-xl shadow-2xl p-8">
        <div className="text-center mb-6">
          <FaDice size={48} color="#fbbf24" />
          <h1 className="text-3xl font-bold text-slate-800 mt-2">Casino Login</h1>
          <p className="text-gray-500">Welcome to the betting game!</p>
        </div>
        <form onSubmit={formik.handleSubmit} className="space-y-4">
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
              <FaUserCircle />
            </span>
            <input
              type="text"
              name="username"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="Username"
              value={formik.values.username}
              onChange={formik.handleChange}
              autoComplete="username"
            />
          </div>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
              <FaLock />
            </span>
            <input
              type="password"
              name="password"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="Password"
              value={formik.values.password}
              onChange={formik.handleChange}
              autoComplete="current-password"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 mt-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-white font-bold text-lg rounded-lg shadow-lg hover:from-orange-400 hover:to-yellow-400 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
