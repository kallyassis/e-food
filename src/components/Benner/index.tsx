import logo from "../../assets/logo.svg";
import { Container, Image, TextoInicial } from "./styles";

const Banner = () => {
  return (
    <>
      <Container>
        <div className="container">
          <Image src={logo} alt="food" />
          <TextoInicial>Viva experiências gastronômicas no conforto da sua casa</TextoInicial>
        </div>
      </Container>
    </>
  );
};

export default Banner;
