import Header from "./components/layout/header/Header";
import Footer from "./components/layout/footer/Footer";
import LogoPanel from "./components/logopanel/LogoPanel";
import OrderProcess from "./components/orderprocess/OrderProcess";

function App() {
  return (
    <div className="App">
      <Header />
      <LogoPanel />
      <OrderProcess />
      <Footer />
    </div>
  );
}

export default App;
