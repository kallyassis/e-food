import {
  Box,
  BoxUl,
  Container,
  Image,
  Linnk,
  NameRestaurant,
  NavList,
  TextType,
} from "./styles";
import logo from "../../assets/logo.svg";
import { open } from "../../Store/reducer/Cart";
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../Store";
import { useGetRestaurantByIDQuery } from "../../Services";
import { useParams } from "react-router-dom";
import Loader from "../Loader";

const Header = () => {
  const { items } = useSelector((state: RootReducer) => state.cart);
  const dispatch = useDispatch();

  const { id } = useParams();
  const { data: restaurante } = useGetRestaurantByIDQuery(id!);

  if (!restaurante) return <Loader />;

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
      <Box>

          <TextType>{restaurante.tipo}</TextType>
          <NameRestaurant>{restaurante.titulo}</NameRestaurant>

        <Image $background={restaurante?.capa} />
      </Box>
    </>
  );
};

export default Header;
