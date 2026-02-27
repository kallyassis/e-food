import { useSelector } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { GlobalStyles } from "./styles";
import Rotas from "./routes";
import Footer from "./components/Footer";
import { RootReducer } from "./Store";
import Cart from "./components/Cart";
import Checkout from "./Pages/Checkout";
import Payment from "./Pages/Pagamento";
import Order from "./Pages/Order";

function App() {
  const { isOpenCheckout, isOpenPayment, isOpenOrder } = useSelector(
    (state: RootReducer) => state.cart,
  );
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Rotas />
      <Footer />
      <Cart />

      {isOpenCheckout && <Checkout />}
      {isOpenPayment && <Payment />}
      {isOpenOrder && <Order />}
    </BrowserRouter>
  );
}

export default App;
