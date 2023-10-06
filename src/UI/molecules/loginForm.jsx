import { useContext } from "react";
import { ButtonAtom, InputField } from "../atoms";
import { LoginContext } from "../../utils/contexts";
import { Stack } from "@mui/material";
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Link } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Lottie from "lottie-react";
import loginAnimation from "../../assets/lottieFiles/animation_lnbq0mjf.json";

// LoginForm component
export const LoginForm = () => {
  const { errors, handleBlur, handleChange, handleSubmit, touched, values } =
    useContext(LoginContext);

  return (
    <form noValidate onSubmit={handleSubmit}>
      {/* Grid layout */}
      <Grid
        container
        component="main"
        sx={{ height: "100vh", justifyContent: "space-between" }}
      >
        <CssBaseline />
        {/* Left side with animation */}
        <Grid xs={6} justifyContent={"center"} alignItems={"center"} item>
          <Lottie animationData={loginAnimation} loop={true} />
        </Grid>
        {/* Right side with login form */}
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 16,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 4, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Login
            </Typography>
            <Box sx={{ mt: 2, mb: 2, width: "75%" }}>
              <Stack spacing={2}>
                {/* Email input */}
                <InputField
                  size={"medium"}
                  id="email"
                  label="Email"
                  value={values.email}
                  required
                  errortext={touched.email && errors.email}
                  error={Boolean(errors.email && touched.email)}
                  name="email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                {/* Password input */}
                <InputField
                  size={"medium"}
                  id="password"
                  label="Password"
                  type="password"
                  value={values.password}
                  required
                  errortext={touched.password && errors.password}
                  error={Boolean(errors.password && touched.password)}
                  name="password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
              </Stack>
              {/* Remember me checkbox */}
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              {/* Login button */}
              <ButtonAtom
                fullWidth
                type="submit"
                variant="contained"
                size="large"
                sx={{ mt: 3, mb: 2 }}
                disableElevation
              >
                Login
              </ButtonAtom>
              {/* Forgot password and Register links */}
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Typography sx={{ mt: 0 }} variant="body1">
                    Don't have an account?{" "}
                    <Link variant="body1" to="/register">
                      Register
                    </Link>
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </form>
  );
};
