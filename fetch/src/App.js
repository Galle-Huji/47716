import Container from "@mui/material/Container";
import FixedBottomNavigation from "./Components/FixedBottomNavigation";
import { BrowserRouter } from "react-router-dom";
import Pages from "./Pages/Pages";
import MenuAppBar from "./Components/MenuAppBar";
import { createTheme, colors, ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: colors.orange[400],
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Container>
          <BrowserRouter>
            <MenuAppBar />
            <Pages />
            <FixedBottomNavigation
              sx={{
                width: "50%",
                position: "fixed",
                bottom: 0,
              }}
            />
          </BrowserRouter>
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
