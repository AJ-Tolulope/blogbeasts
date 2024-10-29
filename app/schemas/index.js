import * as yup from "yup";

// min 10 characters, 1 upper case leter, 1 lower case leter, 1 numeric digit
const passRule = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{10,}$/;

export const registerSchema = yup.object().shape({
  username: yup.string().required("Required"),
  email: yup.string().email("Please enter a valid email").required("Required"),
  password: yup
    .string()
    .min(10)
    .matches(passRule, {
      message: "Include atleast 1 uppercase, 1 lowercase, 1 digit",
    })
    .required("Required"),
  confirmpassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Password does not match")
    .required("Required"),
  isVerified: yup.boolean(false),
  isAdmin: yup.boolean(false),
  forgotPasswordToken: yup.string(),
  forgotPasswordTokenExpire: yup.date(),
  verifyToken: yup.string(),
  verifyTokenExpire: yup.date(),
});

export const loginSchema = yup.object().shape({
  email: yup.string().email("Please enter a valid email").required("Required"),
  password: yup.string().required("Required"),
});
