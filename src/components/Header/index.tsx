import { BoxUl, Container, Image, Linnk, NavList } from "./styles";
import logo from "../../assets/logo.svg";
import apresentacao from "../../assets/apresentacao.png";

const Header = () => {
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
