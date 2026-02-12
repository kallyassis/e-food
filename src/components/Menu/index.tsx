import { Button, Card, Descricao, Titulo } from "./styles";

type Props = {
  foto: string;
  titulo: string;
  descricao: string;
  onClick: () => void;
};

const Menu = ({ descricao, foto, titulo, onClick }: Props) => {
  return (
    <>
      <div className="container">
        <Card onClick={onClick}>
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
