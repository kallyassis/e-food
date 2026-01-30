import Menu from "../Menu";
import { Container, List } from "./styles";
import Pratos from "../../model/Pratos";

export type Props = {
  prato: Pratos[];
};

const MenuList = ({ prato }: Props) => {
  return (
    <>
      <Container>
        <div className="container">
          <List>
          {prato.map((pratos) => (
            <Menu
              key={pratos.id}
              title={pratos.title}
              image={pratos.image}
              description={pratos.description}
            />
          ))}
        </List>
        </div>
      </Container>
    </>
  );
};

export default MenuList;
