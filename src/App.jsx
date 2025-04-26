import './App.css'
import  {ThemeProvider} from "@mui/material";
import theme from "./theme.js";
import MaterialForm from "./components/MaterialForm.jsx";
import Container from "@mui/material/Container";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TablePassword from "./components/TablePassword.jsx";
export default function App() {

  return (
      <ThemeProvider theme={theme}>
          <Container maxWidth="xl">
              <Box sx={{flexGrow: 1}}>
                  <Grid container gap={4}>
                      <Grid size={4}>
                          <MaterialForm />
                      </Grid>
                      <Grid size={7.5}>
                          <TablePassword />
                      </Grid>
                  </Grid>
              </Box>
          </Container>
      </ThemeProvider>
  )
}

