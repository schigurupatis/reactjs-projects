import React from "react";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";

const Login = () => {
  const navigate = useNavigate();
  //const dispatch = useDispatch();
  const [isLoginSuccess, setIsLoginSuccess] = useState(false);
  const [fadeOut, setFadeOut] = useState(false); // New state for fade out

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

  //Setup formik
  const formik = useFormik({
    initialValues: {
      phoneorEmail: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values, { resetForm }) => {
      console.log("Form Data", values);
      // Simulate successful registration
      setIsLoginSuccess(true);

      // Dispatch user data to Redux store
      //dispatch(setUser(values));

      // Remove success message after 3 seconds
      setTimeout(() => {
        setFadeOut(true); // Set fade out state
        setTimeout(() => {
          setIsLoginSuccess(false); // Hide message after fade out
          setFadeOut(false); // Reset fade out state
          // Navigate to the login page
          navigate("/dashboard");
        }, 300); // Duration of fade out transition
      }, 3000);
    },
  });

  return (
    <>
      <div className="w-[1024px] mx-auto py-10">
        <form className="w-[400px] mx-auto" onSubmit={formik.handleSubmit}>
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
            {formik.touched.phoneorEmail && formik.errors.phoneorEmail ? (
              <div className="text-red-500">{formik.errors.phoneorEmail}</div>
            ) : null}
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
            {formik.touched.password && formik.errors.password ? (
              <div className="text-red-500">{formik.errors.password}</div>
            ) : null}
          </div>
          <button
            type="submit"
            className="bg-violet-800 text-white px-5 py-2 rounded-md w-full my-5"
          >
            SingIn
          </button>
          {isLoginSuccess &&
            !fadeOut && ( // Show only if not fading out
              <div
                className={`bg-green-600 text-white px-5 py-3 text-center transition-transform transform ${
                  fadeOut
                    ? "translate-y-20 opacity-0"
                    : "translate-y-0 opacity-100"
                }`}
              >
                Login Successfull... Redirecting to Dashboard
              </div>
            )}
        </form>
      </div>
    </>
  );
};

export default Login;
