import { RingLoader } from "react-spinners";
import { Container } from "./styles";
import { colors } from "../../styles";

const Loader = () => {
  return (
    <>
      <Container>
        <RingLoader color={colors.coral} />
      </Container>
    </>
  );
};

export default Loader;
