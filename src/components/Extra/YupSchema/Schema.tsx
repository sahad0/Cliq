import * as yup from 'yup'



export const emailSchema = yup.object().shape({
    email: yup
      .string()
      .email("Please enter valid email !")
      .required('Email Address is Required'),
   
  })


export const passwordSchema = yup.object().shape({
  password: yup
  .string()
  .min(8, ({ min }) => `Password must be at least ${min} characters`)
  .required('Password is required'),
})