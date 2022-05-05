import Container from "@mui/material/Container";
import FixedBottomNavigation from "./Components/FixedBottomNavigation";
import { BrowserRouter } from "react-router-dom";
import Pages from "./Pages/Pages";
import MenuAppBar from "./Components/MenuAppBar";

function App() {
  return (
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
  );
}

export default App;
