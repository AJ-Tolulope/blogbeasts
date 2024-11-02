"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";

import { useFormik } from "formik";
import { loginSchema } from "../../schemas";
import toast, { Toaster } from "react-hot-toast";
import { LoginUser } from "../../api";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { login } from "../../features/stateSlice/userSlice";
import "../auth.css";

const Login = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (values, action) => {
    try {
      setLoading(true);

      //MAKE THE API REQ TO LOGIN THE USER
      const res = await LoginUser(values);

    
        // alert(res.message);
        toast.success(res.message);

        localStorage.setItem("ukcjgbSDHaksjdcserdfgvikjlakknacv", res.data);

        //DISPATCH THE ACTION TO UPDATE THE 'isUserLogged' STATE
        dispatch(login());

        //RESET THE FORM AFTER A SUCCESSFUL LOGIN
        action.resetForm();

        //REDIRECT TO THE BLOG PAGE
        router("/posts");
     
    } catch (error) {
      // alert(`Login Error: ${error.response.data.error}`);
      toast.error(`Login Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const {
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
    errors,
    touched,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit,
  });

  return (
    <section className="form">
      <div className="left">
        <Image src={"/asset/1.jpeg"} width={1000} height={1000} alt="" />
      </div>

      <div className="right">
        <div className="container">
          <form onSubmit={handleSubmit} autoComplete="off">
            <h3>Log in</h3>

            {loading && (
              <div className="loading">
                <span className="fas fa-spin"></span>
              </div>
            )}
            <div className="input-box">
              <label htmlFor="email">email</label>
              <input
                id="email"
                type="email"
                placeholder="Enter email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.email && touched.email ? "input-error" : ""
                }
              />
              <p>{errors.email && touched.email && errors.email}</p>
            </div>

            <div className="input-box">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                placeholder="Enter password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.password && touched.password ? "input-error" : ""
                }
              />
              <p>{errors.password && touched.password && errors.password}</p>
            </div>

            <div className="input-box">
              <button
                className="primary-btn"
                type="submit"
                disabled={isSubmitting}>
                Log in
              </button>
            </div>
          </form>
          <p className="alt">
            I don&apos;t have an account <Link href="/auth/signup">signup</Link>
          </p>
        </div>
      </div>

      <Toaster />
    </section>
  );
};

export default Login;
