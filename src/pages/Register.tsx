import React from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { TbArrowNarrowRight } from "react-icons/tb";

const Register: React.FC = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
      phone: "",
      promoCode: "",
    },
    validate: (values) => {
      const errors: { [key: string]: string } = {};
      if (!values.email) errors.email = "Email is required";
      if (!values.password) errors.password = "Password is required";
      if (values.password !== values.confirmPassword) errors.confirmPassword = "Passwords do not match";
      if (!values.phone) errors.phone = "Phone number is required";
      return errors;
    },
    onSubmit: (values) => {
      alert("Registration successful!");
      console.log("Registered with", values);
      // Submit logic here
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-900 to-green-800 font-host">
      <img src="/src/assets/register/555.png" className="absolute  bottom-0 left-0 opacity-15 h-[50rem] w-[55rem] scale-x-[-1] z-10" />
      <div className="xl:w-1/4 w-5/6 mx-auto mt-10 p-8 bg-white bg-opacity-90 rounded-xl shadow-lg z-20">
        <div className="w-full font-host flex xl:flex-row flex-col items-center justify-center xl:h-48 h-52  bg-gradient-to-bl from-gray-900 via-gray-900 to-green-800 text-white rounded-md xl:p-8 p-4 relative">
          <div className="z-20 full w-full xl:h-full font-extrabold xl:text-3xl text-lg xl:text-start text-center translate-y-10 xl:translate-y-0 ">
            Register and claim your <span className="text-green-400 font-host font-bold">$2,150</span> by entering your promo code!
          </div>
          <div className="z-10 absolute -bottom-7 -right-5 xl:p-4 p-2">
            <img src={"/src/assets/register/aa.webp"} className="object-cover opacity-75  h-52  w-52" />
          </div>
        </div>

        <form onSubmit={formik.handleSubmit} noValidate className="font-host xl:text-base text-sm">
          {/* ...form fields unchanged... */}
          <div className="my-4">
            <label className="block text-gray-700 mb-1 font-semibold">Promo Code</label>
            <input
              type="text"
              name="promoCode"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring border-gray-300 text-black"
              value={formik.values.promoCode}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          <div className="my-4">
            <label className="block text-gray-700 mb-1 font-semibold">Email</label>
            <input
              type="email"
              name="email"
              className={`w-full px-3 py-2 border rounded focus:outline-none text-black focus:ring ${formik.touched.email && formik.errors.email ? "border-red-500" : "border-gray-300"}`}
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
            />
            {formik.touched.email && formik.errors.email && <div className="text-red-500 text-sm mt-1">{formik.errors.email}</div>}
          </div>
          <div className="my-4">
            <label className="block text-gray-700 mb-1 font-semibold">Password</label>
            <input
              type="password"
              name="password"
              className={`w-full px-3 py-2 border rounded focus:outline-none text-black focus:ring ${formik.touched.password && formik.errors.password ? "border-red-500" : "border-gray-300"}`}
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
            />
            {formik.touched.password && formik.errors.password && <div className="text-red-500 text-sm mt-1">{formik.errors.password}</div>}
          </div>
          <div className="my-4">
            <label className="block text-gray-700 mb-1 font-semibold">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              className={`w-full px-3 py-2 border rounded focus:outline-none text-black focus:ring ${
                formik.touched.confirmPassword && formik.errors.confirmPassword ? "border-red-500" : "border-gray-300"
              }`}
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
            />
            {formik.touched.confirmPassword && formik.errors.confirmPassword && <div className="text-red-500 text-sm mt-1">{formik.errors.confirmPassword}</div>}
          </div>

          <button
            type="submit"
            className="w-full xl:text-base text-sm hover:scale-105 cursor-pointer duration-500 py-3 bg-gradient-to-l from-green-800 to-gray-900 text-white font-host font-extrabold  rounded-md transition"
          >
            SIGN UP
          </button>
        </form>
        <div className="mt-6 text-center xl:text-base text-sm">
          <span className="text-gray-700 font-black">Already have an account? </span>
          <p
            className="text-green-800 hover:underline bg-transparent border-none p-0 cursor-pointer font-extrabold"
            onClick={() => {
              // useNavigate hook from react-router-dom
              // Place this at the top of your component: const navigate = useNavigate();
              navigate("/login");
            }}
          >
            SIGN IN <TbArrowNarrowRight className="inline-block mb-1" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
