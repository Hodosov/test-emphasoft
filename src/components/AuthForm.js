import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { setAuthUser } from '../store/rootReducer'
import { useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    width: '500px',
    margin: '0 auto',
  },
})

export const AuthForm = () => {

  const classes = useStyles()

  const dispatch = useDispatch()

  const validationSchema = yup.object({
    username: yup
      .string('Enter your user name')
      .min(8, 'User name should be of minimum 8 characters length')
      .required('User name is required'),
    password: yup
      .string('Enter your password')
      .min(8, 'Password should be of minimum 8 characters length')
      .required('Password is required'),
  });

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch(setAuthUser(values))
    },
  });

  return (
    <div className={classes.root}>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="username"
          name="username"
          label="Username"
          placeholder="User name"
          value={formik.values.username}
          onChange={formik.handleChange}
          error={formik.touched.username && Boolean(formik.errors.username)}
          helperText={formik.touched.username && formik.errors.username}
        />
        <TextField
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
          placeholder="Password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        {console.log(validationSchema)}
        <Button color="primary" variant="contained" fullWidth type="submit">
          Enter
        </Button>
      </form>
    </div>
  );
};
