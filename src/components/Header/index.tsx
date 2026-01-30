import { BoxUl, Container, Image, NavList } from "./styles";
import logo from "../../assets/logo.svg";
import apresentacao from "../../assets/apresentacao.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Container>
        <div className="container">
          <nav>
            <BoxUl>
              <NavList>Restaurantes</NavList>
              <li>
                <Link to={"/"}>
                  <img src={logo} alt="logo" />
                </Link>
              </li>
              <NavList>0 produto(s) no carrinho</NavList>
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
