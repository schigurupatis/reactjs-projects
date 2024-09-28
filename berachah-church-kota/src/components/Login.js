import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const Login = () => {
  const loginSchema = Yup.object().shape({
    phoneorEmail: Yup.string()
      .required("Phone / Email is required")
      .test(
        "phone-or-email",
        "Phone / Email must be a valid email or phone number",
        function (value) {
          const phoneRegex = /^[6-9]\d{9}$/;
          const emailRegex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
          return phoneRegex.test(value) || emailRegex.test(value);
        }
      ),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password atleast 6 characters")
      .max(50, "Password Too Long"),
  });
  return (
    <>
      <div className="w-[1024px] mx-auto py-10">
        <form className="w-[400px] mx-auto">
          <h1 className="text-3xl font-bold text-center">Login</h1>
          <div className="mt-5">
            <label
              htmlFor="phoneorEmail"
              className="block text-sm font-medium text-gray-700"
            >
              Phone / Email
            </label>
            <div className="mt-1">
              <input
                type="text"
                id="phoneorEmail"
                name="phoneorEmail"
                autoComplete="phoneorEmail"
                required
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-violet-500 focus:border-violet-500 sm:text-sm"
              />
            </div>
          </div>
          <div className="mt-5">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <div className="mt-1">
              <input
                type="password"
                id="password"
                name="password"
                autoComplete="password"
                required
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-violet-500 focus:border-violet-500 sm:text-sm"
              />
            </div>
          </div>
          <button className="bg-violet-800 text-white px-5 py-2 rounded-md w-full my-5">
            SingIn
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
