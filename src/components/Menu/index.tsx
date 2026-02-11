import { Button, Card, Descricao, Titulo } from "./styles";

type Props = {
  foto: string;
  titulo: string;
  descricao: string;
};

const Menu = ({ descricao, foto, titulo }: Props) => {
  return (
    <>
      <div className="container">
        <Card>
          <img src={foto} alt="" />
          <div>
            <Titulo>{titulo}</Titulo>
            <Descricao>{descricao}</Descricao>
          </div>
          <Button>Adicionar ao carrinho</Button>
        </Card>
      </div>
    </>
  );
};

export default Menu;
