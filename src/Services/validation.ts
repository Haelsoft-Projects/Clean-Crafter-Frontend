import * as yup from "yup";
export const addressValidation = yup.object().shape({
  city:yup.string().required("Please fill up this field"),
    address: yup.string().required("Please fill up this field"),
  });

export const job_descripValidation=yup.object().shape({
  job_decription:yup.string().required("Please fill up this field"),
 
  });
