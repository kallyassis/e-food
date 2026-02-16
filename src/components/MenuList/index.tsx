import { useState } from "react";
import { useParams } from "react-router-dom";
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
import { useGetRestaurantByIDQuery } from "../../Services/index";
import close from "../../assets/close.png";
import { CardapioItem } from "../../Pages/Home";
import { add, open } from "../../Store/reducer/Cart";
import { useDispatch } from "react-redux";

export const formatPreco = (preco: number) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(preco);
};

const MenuList = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { data: produto, isLoading } = useGetRestaurantByIDQuery(id!);

  const [itemSelecionado, setItemSelecionado] = useState<CardapioItem | null>(
    null,
  );

  const addToCart = () => {
    if (!itemSelecionado) return;

    dispatch(add(itemSelecionado));
    dispatch(open());
  };

  const getDescricao = (descricao: string) => {
    if (descricao.length > 200) {
      return descricao.slice(0, 197) + "...";
    }
    return descricao;
  };

  if (!produto) {
    return <h3 className="container">Caregando...</h3>;
  }

  return (
    <>
      <Container>
        <div className="container">
          <List>
            {produto.cardapio.map((item) => (
              <Menu
                key={item.id}
                foto={item.foto}
                titulo={item.nome}
                descricao={getDescricao(item.descricao)}
                onClick={() => {
                  setItemSelecionado(item);
                }}
              />
            ))}
          </List>
        </div>
      </Container>
      {itemSelecionado && (
        <Modal>
          <ModaContent className="container">
            <div>
              <Image src={itemSelecionado.foto} alt="Imagem da media" />
            </div>
            <Content>
              <h4>{itemSelecionado.nome}</h4>
              <p>{itemSelecionado.descricao}</p>
              <span>Serve de {itemSelecionado.porcao}</span>
              <Button onClick={addToCart}>
                Adicionar ao carrinho - {formatPreco(itemSelecionado.preco)}
              </Button>
            </Content>
            <Close
              src={close}
              alt=""
              onClick={() => setItemSelecionado(null)}
            />
          </ModaContent>
          <div
            className="overlay"
            onClick={() => setItemSelecionado(null)}
          ></div>
        </Modal>
      )}
    </>
  );
};

export default MenuList;
