import { BoxUl, Container, Image, Linnk, NavList } from "./styles";
import logo from "../../assets/logo.svg";
import apresentacao from "../../assets/apresentacao.png";

import { open } from "../../Store/reducer/Cart";
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../Store";

const Header = () => {
  const { items } = useSelector((state: RootReducer) => state.cart);
  const dispatch = useDispatch();

  const openCart = () => {
    dispatch(open());
  };
  return (
    <>
      <Container>
        <div className="container">
          <nav>
            <BoxUl>
              <Linnk to={"/"}>
                <NavList>Restaurantes</NavList>
              </Linnk>
              <li>
                <img src={logo} alt="logo" />
              </li>
              <NavList onClick={openCart}>
                {items.length} produto(s) no carrinho
              </NavList>
            </BoxUl>
          </nav>
        </div>
      </Container>
      <div>
        <Image src={apresentacao} alt="Foto de apresentação do prato" />
      </div>
    </>
  );
};

export default Header;
