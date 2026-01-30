import { Button, Card, Descricao, Titulo } from "./styles";

type Props = {
  image: string;
  title: string;
  description: string;
};

const Menu = ({ description, image, title }: Props) => {
  return (
    <>
      <div className="container">
        <Card>
          <img src={image} alt="" />
          <div>
            <Titulo>{title}</Titulo>
            <Descricao>{description}</Descricao>
          </div>
          <Button>Adicionar ao carrinho</Button>
        </Card>
      </div>
    </>
  );
};

export default Menu;
