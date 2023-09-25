import Header from "./components/layout/header/Header";
import Footer from "./components/layout/footer/Footer";
import { Box } from "@mui/material";

function App() {
  return (
    <div className="App">
      <Header />
      <Box sx={{ height: 20 }}></Box>
      <Footer />
    </div>
  );
}

export default App;
