import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { GlobalStyles } from "./styles";
import Rotas from "./routes";
import Footer from "./components/Footer";
import { store } from "./Store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyles />
        <Rotas />
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
