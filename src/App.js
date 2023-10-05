import "./App.css";
import { Routes } from "./routes";
import axios from "axios";
import { useSelector } from "react-redux";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { theme } from "./utils/theme";
import "./index.css";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export const AuthInstance = axios.create({
  baseURL: "https://fbca-49-43-2-10.ngrok-free.app/auth",
});
export const AppInstance = axios.create({
  baseURL: "https://fbca-49-43-2-10.ngrok-free.app/api",
});

function App() {
  AuthInstance.defaults.baseURL = "https://fbca-49-43-2-10.ngrok-free.app/auth";
  const { token } = useSelector((state) => state.auth);
  return (
    <div className="App">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes token={"token"} />
        </ThemeProvider>
      </LocalizationProvider>
    </div>
  );
}

export default App;
