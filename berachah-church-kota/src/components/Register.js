import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const Register = () => {
  const registerSchema = Yup.object().shape({
    fullname: Yup.string()
      .required("Full Name is required")
      .min(3, "Full Name atleast 3 characters")
      .max(50, "Full Name Too Long"),
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
      fullname: "",
      phoneorEmail: "",
      password: "",
    },
    validationSchema: registerSchema,
    onSubmit: (values) => {
      console.log("Form Data", values);
    },
  });

  return (
    <>
      <div className="w-[1024px] mx-auto py-10">
        <form className="w-[400px] mx-auto" onSubmit={formik.handleSubmit}>
          <h1 className="text-3xl font-bold text-center">Register</h1>
          <div className="mt-5">
            <label
              htmlFor="fullname"
              className="block text-sm font-medium text-gray-700"
            >
              Full Name
            </label>
            <div className="mt-1">
              <input
                type="text"
                id="fullname"
                name="fullname"
                autoComplete="fullname"
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-violet-500 focus:border-violet-500 sm:text-sm"
                value={formik.values.fullname}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            {formik.touched.fullname && formik.errors.fullname ? (
              <div className="text-red-500">{formik.errors.fullname}</div>
            ) : null}
          </div>
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
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-violet-500 focus:border-violet-500 sm:text-sm"
                value={formik.values.phoneorEmail}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
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
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-violet-500 focus:border-violet-500 sm:text-sm"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
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
            SingUp
          </button>
        </form>
      </div>
    </>
  );
};

export default Register;
