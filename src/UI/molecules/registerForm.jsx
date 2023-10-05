import { useContext } from "react";
import { InputField } from "../atoms";
import Button from "@mui/material/Button";
import { RegisterContext } from "../../utils/contexts";
import { Stack } from "@mui/material";
import * as React from "react";
import Avatar from "@mui/material/Avatar";
// import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
// import Link from "@mui/material/Link";
import { Link } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Lottie from "lottie-react";
import loginAnimation from "../../assets/lottieFiles/animation_lnbstp1d.json";

export const RegisterForm = () => {
  const { errors, handleBlur, handleChange, handleSubmit, touched, values } =
    useContext(RegisterContext);
  function Copyright(props) {
    return (
      <Typography
        variant="body2"
        color="text.secondary"
        align="center"
        {...props}
      >
        {"Copyright © "}
        <Link color="inherit" href="https://mui.com/">
          Your Website
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    );
  }

  return (
    <form noValidate onSubmit={handleSubmit}>
      <Grid
        container
        component="main"
        sx={{ height: "100vh", justifyContent: "space-between" }}
      >
        <CssBaseline />
        <Grid xs={6} item>
          <Lottie animationData={loginAnimation} loop={true} />
        </Grid>
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              mx: 4,
              mt: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 4, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Register
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 2, mb: 2, width: "75%" }}
            >
              <Stack spacing={2}>
                <Stack direction="row" spacing={1}>
                  <InputField
                    size={"medium"}
                    lable={"First Name"}
                    value={values.firstName}
                    name={"firstName"}
                    type={"firstName"}
                    id={"firstName"}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    required={true}
                    errortext={touched.firstName && errors.firstName}
                    error={Boolean(errors.firstName && touched.firstName)}
                  />
                  <InputField
                    size={"medium"}
                    lable={"Last Name"}
                    value={values.lastName}
                    name={"lastName"}
                    type={"lastName"}
                    id={"lastName"}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    required={true}
                    error={Boolean(touched.lastName && errors.lastName)}
                    errortext={touched.lastName && errors.lastName}
                  />
                </Stack>

                <InputField
                  size={"medium"}
                  lable={"Email"}
                  value={values.email}
                  name={"email"}
                  type={"email"}
                  id={"email"}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  required={true}
                  error={Boolean(touched.email && errors.email)}
                  errortext={touched.email && errors.email}
                />
                <InputField
                  size={"medium"}
                  lable={"Password"}
                  value={values.password}
                  name={"password"}
                  type={"password"}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  id={"password"}
                  required={true}
                  error={Boolean(touched.password && errors.password)}
                  errortext={touched.password && errors.password}
                />
                <InputField
                  size={"medium"}
                  lable={"Confirm Password"}
                  value={values.confirmPassword}
                  name={"confirmPassword"}
                  type={"password"}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  id={"confirmPassword"}
                  required={true}
                  error={Boolean(
                    touched.confirmPassword && errors.confirmPassword
                  )}
                  errortext={touched.confirmPassword && errors.confirmPassword}
                />
              </Stack>

              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                size="large"
              >
                Register
              </Button>
              <Grid container>
                {/* <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid> */}
                <Grid item>
                  <Typography sx={{ mt: 0 }} variant="body1">
                    Already have an account{" "}
                    <Link variant="body1" to="/login">
                      Login
                    </Link>
                  </Typography>
                </Grid>
              </Grid>
              {/* <Copyright sx={{ mt: 5 }} /> */}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </form>
  );
};
