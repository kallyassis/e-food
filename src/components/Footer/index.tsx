import logo from "../../assets/logo.svg";
import instagram from "../../assets/instagram.png";
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";
import { BoxUl, Container, Logo, Rodape } from "./styles";

const Footer = () => {
  return (
    <>
      <Rodape>
        <div className="container">
          <Container>
            <Logo src={logo} alt="logo" />
            <div>
              <BoxUl>
                <li>
                  <img src={instagram} alt="" />
                </li>
                <li>
                  <img src={facebook} alt="" />
                </li>
                <li>
                  <img src={twitter} alt="" />
                </li>
              </BoxUl>
            </div>
            <p>
              A efood é uma plataforma para divulgação de estabelecimentos, a
              responsabilidade pela entrega, qualidade dos produtos é toda do
              estabelecimento contratado.
            </p>
          </Container>
        </div>
      </Rodape>
    </>
  );
};

export default Footer;
