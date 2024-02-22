import * as yup from "yup";
import axios from "axios"
axios.defaults.baseURL="http://localhost:4000"
const phoneRegExp =
  /^((\+[0-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const passwordRegExp =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#;:])[A-Za-z\d@$!%*?&#;:]{8,}$/;
export const signUpValidate = yup.object().shape({
  firstName: yup.string().required("Please fill up this field"),
  lastName: yup.string().required("Please fill up this field"),
  email: yup
    .string()
    .email("please enter a valid email")
    .required("Please fill up this field"),
  phoneNumber: yup
    .string()
    .required("Please fill up this field")
    .matches(phoneRegExp, "Phone number is not valid")
    .max(15, "too long"),
  nin: yup
    .string()
    .required("Please fill up this field")
    .matches(phoneRegExp, "Phone number is not valid")
    .max(15, "too long"),
  password: yup
    .string()
    .min(8, "password must containat least 8 characters ")
    .matches(
      passwordRegExp,
      "characters with at least one of each: uppercase, lowercase, number and special"
    )
    .required("Please fill up this field"),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Please fill up this field"),
});

export const signUpcleanersValidate = yup.object().shape({
  firstName: yup.string().required("Please fill up this field"),
  lastName: yup.string().required("Please fill up this field"),
  email: yup
    .string()
    .email("please enter a valid email")
    .required("Please fill up this field"),
  phoneNumber: yup
    .string()
    .required("Please fill up this field")
    .matches(phoneRegExp, "Phone number is not valid")
    .max(15, "too long"),
  nin: yup
    .string()
    .required("Please fill up this field")
    .matches(phoneRegExp, "Phone number is not valid")
    .max(15, "too long"),
  // password: yup
  //   .string()
  //   .min(8, "password must containat least 8 characters ")
  //   .matches(
  //     passwordRegExp,
  //     "characters with at least one of each: uppercase, lowercase, number and special"
  //   )
  //   .required("Please fill up this field"),
  // passwordConfirmation: yup
  //   .string()
  //   .oneOf([yup.ref("password")], "Passwords must match")
  //   .required("Please fill up this field"),
});

export const loginValidate = yup.object().shape({
  email: yup
    .string()
    .email("please enter a valid email")
    .required("Please fill up this field"),
  password: yup.string().required("Please fill up this field"),
});
