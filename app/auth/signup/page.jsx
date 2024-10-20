"use client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { login } from "../../features/stateSlice/userSlice";
import { useFormik } from "formik";
import { registerSchema } from "../../schemas";
import { RegisterUser } from "../../api";
import toast, { Toaster } from "react-hot-toast";
import Image from "next/image";
import "../auth.css";

const Signup = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (values, action) => {
    try {
      setLoading(true);

      // Make the API request to register the user
      const res = await RegisterUser(values);

      if (res.message === "User Registered Successfully") {
        toast.success(res.message);

        setTimeout(() => {
          // Dispatch the action to update the 'isUserLogged' state
          dispatch(login());

          // Reset the form after a successful registration
          action.resetForm();

          // Redirect user to the login page
          router.push("/auth/login");
        }, 500);
      }
    } catch (error) {
      // Check if the error is an object with a message
      toast.error(error.message || "Registration failed, please try again.");
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
      username: "",
      email: "",
      password: "",
      confirmpassword: "",
    },
    validationSchema: registerSchema,
    onSubmit,
  });

  return (
    <section className="form">
      <div className="left">
        <Image
          src={"/asset/1.jpeg"}
          width={1000}
          height={1000}
          alt="Signup Image"
        />
      </div>

      <div className="right">
        <div className="container">
          <form onSubmit={handleSubmit} autoComplete="off">
            <h3>Sign up</h3>

            {loading && (
              <div className="loading">
                <span className="fas fa-spin"></span>
              </div>
            )}

            <div className="input-box">
              <label htmlFor="username">Username</label>
              <input
                id="username"
                type="text"
                placeholder="Enter a username"
                value={values.username}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.username && touched.username ? "input-error" : ""
                }
              />
              <p>{errors.username && touched.username && errors.username}</p>
            </div>

            <div className="input-box">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.email && touched.email ? "input-error" : ""}
              />
              <p>{errors.email && touched.email && errors.email}</p>
            </div>

            <div className="input-box">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                placeholder="Enter a unique password"
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
              <label htmlFor="confirmpassword">Confirm Password</label>
              <input
                id="confirmpassword"
                type="password"
                placeholder="Confirm password"
                value={values.confirmpassword}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.confirmpassword && touched.confirmpassword
                    ? "input-error"
                    : ""
                }
              />
              <p>
                {errors.confirmpassword &&
                  touched.confirmpassword &&
                  errors.confirmpassword}
              </p>
            </div>

            <div className="input-box">
              <button
                className="primary-btn"
                type="submit"
                disabled={isSubmitting}>
                Sign up
              </button>
            </div>
          </form>
          <p className="alt">
            I already have an account <Link href="/auth/login">Login</Link>
          </p>
        </div>
      </div>

      <Toaster />
    </section>
  );
};

export default Signup;
