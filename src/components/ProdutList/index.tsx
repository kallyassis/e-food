import { useEffect, useState } from "react";
import { Food } from "../../Pages/Home";
import Produto from "../Produto";
import { Container, List } from "./styles";

export type Props = {
  pratos: Food[];
};

const ProdutList = () => {
  const [pratos, setPratos] = useState<Food[]>([])

  useEffect(() => {
      fetch("https://api-ebac.vercel.app/api/efood/restaurantes")
        .then((res) => res.json())
        .then((res) => setPratos(res));
    }, []);
  
  return (
    <>
      <Container>
        <div className="container">
          <List>
            {pratos.map((food) => (
              <Produto
                capa={food.capa}
                descricao={food.descricao}
                destacado={food.destacado}
                tipo={food.tipo}
                titulo={food.titulo}
                avaliacao={food.avaliacao}
                id={food.id}
                cardapio={food.cardapio}
              />
            ))}
          </List>
        </div>
      </Container>
    </>
  );
};

export default ProdutList;
