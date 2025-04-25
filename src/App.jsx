import './App.css'
import  {ThemeProvider} from "@mui/material";
import theme from "./theme.js";
import MaterialForm from "./components/MaterialForm.jsx";

export default function App() {

  return (
      <ThemeProvider theme={theme}>
        <MaterialForm />
        {/*  asdasd*/}
      </ThemeProvider>
  )
}

