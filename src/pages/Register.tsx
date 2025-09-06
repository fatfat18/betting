import React from "react";
import { useFormik } from "formik";

const playerImages = [
  "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=200&q=80", // Poker player
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=200&q=80", // Roulette player
  "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=200&q=80", // Blackjack player
];

const Register: React.FC = () => {
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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-900 via-yellow-700 to-red-900">
      <div className="max-w-md w-full mx-auto mt-10 p-8 bg-white bg-opacity-90 rounded-lg shadow-lg">
        <div className="flex justify-center mb-6 space-x-4">
          {playerImages.map((src, idx) => (
            <img key={idx} src={src} alt="Casino player" className="w-16 h-16 rounded-full object-cover border-2 border-yellow-500 shadow" />
          ))}
        </div>
        <h2 className="text-2xl font-bold mb-6 text-center text-green-900">Register</h2>
        <form onSubmit={formik.handleSubmit} noValidate>
          {/* ...form fields unchanged... */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring ${formik.touched.email && formik.errors.email ? "border-red-500" : "border-gray-300"}`}
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
            />
            {formik.touched.email && formik.errors.email && <div className="text-red-500 text-sm mt-1">{formik.errors.email}</div>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Password</label>
            <input
              type="password"
              name="password"
              className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring ${formik.touched.password && formik.errors.password ? "border-red-500" : "border-gray-300"}`}
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
            />
            {formik.touched.password && formik.errors.password && <div className="text-red-500 text-sm mt-1">{formik.errors.password}</div>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring ${formik.touched.confirmPassword && formik.errors.confirmPassword ? "border-red-500" : "border-gray-300"}`}
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
            />
            {formik.touched.confirmPassword && formik.errors.confirmPassword && <div className="text-red-500 text-sm mt-1">{formik.errors.confirmPassword}</div>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Phone Number</label>
            <input
              type="tel"
              name="phone"
              className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring ${formik.touched.phone && formik.errors.phone ? "border-red-500" : "border-gray-300"}`}
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
            />
            {formik.touched.phone && formik.errors.phone && <div className="text-red-500 text-sm mt-1">{formik.errors.phone}</div>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Promo Code</label>
            <input
              type="text"
              name="promoCode"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring border-gray-300"
              value={formik.values.promoCode}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          <button type="submit" className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition-colors mt-4">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
