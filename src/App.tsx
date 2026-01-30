import { BrowserRouter } from "react-router-dom";

import { GlobalStyles } from "./styles";
import Rotas from "./routes";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Rotas />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
