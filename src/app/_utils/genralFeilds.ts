import * as yup from "yup";
const generalFields = () => {
  return {
    name: yup.string().required("Full name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    mobile_country_code: yup.string().required("Mobile code is required"),
    mobile: yup.string().required("Phone is required"),
    password: yup.string().required("Password is required"),
    password_confirmation: yup
      .string()
      .required("Confirm password is required"),
    code: yup
      .string()
      .required("Verification code is required")
      .max(6, "Verification code must be 6 digits")
      .min(6, "Verification code must be 6 digits"),
  };
};
export default generalFields;
