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
import close from "../../assets/close.png";
import { useEffect, useState } from "react";

import { CardapioItem } from "../../Pages/Home";
import { useParams } from "react-router-dom";

const MenuList = () => {
  const { id } = useParams();
  const [produto, setProduto] = useState<CardapioItem[]>([]);
  const [itemSelecionado, setItemSelecionado] = useState<CardapioItem | null>(
    null,
  );

  useEffect(() => {
    if (!id) return;
    fetch(`https://api-ebac.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((data) => setProduto(data.cardapio));
  }, [id]);

  const getDescricao = (descricao: string) => {
    if (descricao.length > 200) {
      return descricao.slice(0, 197) + "...";
    }
    return descricao;
  };

  const formatPreco = (preco: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(preco);
  };

  return (
    <>
      <Container>
        <div className="container">
          <List>
            {produto.map((item) => (
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
            <Image src={itemSelecionado.foto} alt="Imagem da media" />
            <Content>
              <h4>{itemSelecionado.nome}</h4>
              <p>{itemSelecionado.descricao}</p>
              <span>{itemSelecionado.porcao}</span>
              <Button>{formatPreco(itemSelecionado.preco)}</Button>
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
