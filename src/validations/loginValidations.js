import * as Yup from "yup";

/**
 * Registration form validation schema
 */
export default Yup.object({
  username: Yup.string()
    .email("Must be a valid email address.")
    .required("Required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[0-9]/, "Password must contain at least one numeric digit")
    .matches(/[^a-zA-Z0-9]/, "Password may contain at least one special character")
    .required("Password is Required."),
});
