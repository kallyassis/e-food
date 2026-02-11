import Menu from "../Menu";
import {
  Button,
  Close,
  Container,
  Content,
  Image,
  List,
  ModaContent,
  Modal,
} from "./styles";

import pizza from "../../assets/pizza.png";
import close from "../../assets/close.png";
import { useEffect, useState } from "react";

import { Food } from "../../Pages/Home";
import { useParams } from "react-router-dom";

const MenuList = () => {
  const { id } = useParams();
  const [modalEstaAberto, setModalEstaAberto] = useState(false);
  const [produto, setProduto] = useState<Food[]>([]);

  useEffect(() => {
    fetch(`https://api-ebac.vercel.app/api/efood/restaurantes/${id}`)
      .then((data) => data.json())
      .then((data) => setProduto(data.cardapio));
  }, [id]);

  return (
    <>
      <Container>
        <div className="container">
          <List>
            {produto.map((item) => (
              <Menu
                key={item.id}
                foto={item.capa}
                titulo={item.titulo}
                descricao={item.descricao}
              />
            ))}
          </List>
        </div>
      </Container>
      <Modal className={modalEstaAberto ? "visible" : ""}>
        <ModaContent className="container">
          <Image
            src={pizza}
            alt="Imagem da media"
            onClick={() => setModalEstaAberto(true)}
          />
          <Content>
            <h4>Pizza Margarita</h4>
            <p>
              A pizza Margherita é uma pizza clássica da culinária italiana,
              reconhecida por sua simplicidade e sabor inigualável. Ela é feita
              com uma base de massa fina e crocante, coberta com molho de tomate
              fresco, queijo mussarela de alta qualidade, manjericão fresco e
              azeite de oliva extra-virgem. A combinação de sabores é perfeita,
              com o molho de tomate suculento e ligeiramente ácido, o queijo
              derretido e cremoso e as folhas de manjericão frescas, que
              adicionam um toque de sabor herbáceo. É uma pizza simples, mas
              deliciosa, que agrada a todos os paladares e é uma ótima opção
              para qualquer ocasião.
            </p>
            <span>Serve: de 4 a 3 pessoas</span>
            <Button>Adicionar ao carrinho - R$ 60,90</Button>
          </Content>
          <Close src={close} alt="" onClick={() => setModalEstaAberto(false)} />
        </ModaContent>
        <div
          className="overlay"
          onClick={() => setModalEstaAberto(false)}
        ></div>
      </Modal>
    </>
  );
};

export default MenuList;
