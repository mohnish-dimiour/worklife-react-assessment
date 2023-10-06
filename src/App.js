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
  baseURL:
    "https://8373-2409-4043-4c95-8b15-1d1a-707d-3a61-d99e.ngrok-free.app/auth",
});
export const AppInstance = axios.create({
  baseURL:
    "https://8373-2409-4043-4c95-8b15-1d1a-707d-3a61-d99e.ngrok-free.app/api",
  headers: { "ngrok-skip-browser-warning": "69420" },
});

function App() {
  AuthInstance.defaults.baseURL =
    "https://8373-2409-4043-4c95-8b15-1d1a-707d-3a61-d99e.ngrok-free.app/auth";
  const { token } = useSelector((state) => state.auth);
  return (
    <div className="App">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes token={token} />
        </ThemeProvider>
      </LocalizationProvider>
    </div>
  );
}

export default App;
