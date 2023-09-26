import Header from "./components/layout/header/Header";
import Footer from "./components/layout/footer/Footer";
import LogoPanel from "./components/logopanel/LogoPanel";
import OrderProcess from "./components/orderprocess/OrderProcess";

import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <LogoPanel />
        <OrderProcess />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
