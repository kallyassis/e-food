import Produto from "../Produto";
import { Container, List } from "./styles";

import { useGetRestaurantFoodQuery } from "../../Services/index";
import Loader from "../Loader";

const ProdutList = () => {
  const { data: pratos } = useGetRestaurantFoodQuery();

  if (!pratos) {
    return <Loader />;
  }

  return (
    <>
      <Container>
        <div className="container">
          <List>
            {pratos.map((food) => (
              <Produto
                key={food.id}
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
