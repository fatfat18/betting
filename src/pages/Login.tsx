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
    <div className=" font-host min-h-screen bg-gradient-to-br from-gray-900 via-gray-900 to-green-800 flex items-center justify-center">
      <div className="w-2/3 h-screen flex items-center justify-center p-20 relative ">
        <div className="absolute top-10 left-10 ">
          <img src="/src/assets/login/1.webp" alt="Logo" className=" w-h-80 h-80 -rotate-[15deg] " />
        </div>

        <div className="absolute top-10 right-10 ">
          <img src="/src/assets/login/2.webp" alt="Logo" className=" w-80 h-80 rotate-[15deg] " />
        </div>

        <div className="absolute bottom-10 left-0 ">
          <img src="/src/assets/login/3.png" alt="Logo" className=" w-96 h-96 -rotate-[15deg] " />
        </div>

        <div className="absolute bottom-10 right-10 ">
          <img src="/src/assets/login/4.webp" alt="Logo" className=" w-96 h-96 -rotate-[15deg] " />
        </div>

        <div className=" w-1/2 bg-white bg-opacity-95 rounded-xl shadow-2xl p-12 py-16 z-10">
          <div className="text-center mb-6">
            <FaDice size={48} className="text-green-800" />
            <p className="text-4xl font-extrabold text-gray-900 mt-2">Join and try your luck!</p>
            <p className="text-gray-500">Log on and experience the thrill of winning big!</p>
          </div>
          <form onSubmit={formik.handleSubmit} className="space-y-4">
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                <FaUserCircle />
              </span>
              <input
                type="text"
                name="username"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-800"
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
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-800"
                placeholder="Password"
                value={formik.values.password}
                onChange={formik.handleChange}
                autoComplete="current-password"
              />
            </div>

            <div className=" text-gray-500 cursor-pointer my-4">Forgot Password?</div>
            <button type="submit" className="w-full  py-3 bg-gradient-to-l from-green-800 to-gray-900 text-white  font-extrabold  rounded-md transition">
              SIGN IN
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
