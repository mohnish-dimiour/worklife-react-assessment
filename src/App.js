import "./App.css";
import { Routes } from "./routes";
import axios from "axios";
import { useSelector } from "react-redux";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { theme } from "./utils/theme";
import "./index.css";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

// Create an Axios instance for authentication-related requests
export const AuthInstance = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}/auth`,
});

// Create an Axios instance for application-related requests
export const AppInstance = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}/api`,
});

function App() {
  // Set the base URL for AuthInstance
  AuthInstance.defaults.baseURL = `${process.env.REACT_APP_BASE_URL}/auth`;
  AppInstance.defaults.baseURL = `${process.env.REACT_APP_BASE_URL}/api`;

  // Get the token from Redux state
  const { token } = useSelector((state) => state.auth);

  return (
    <div className="App">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {/* Render the Routes component with the token */}
          <Routes token={token} />
        </ThemeProvider>
      </LocalizationProvider>
    </div>
  );
}

export default App;
