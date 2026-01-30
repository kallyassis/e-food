import Food from "../../model/Food";
import Produto from "../Produto";
import { Container, List } from "./styles";

export type Props = {
  foods: Food[];
};

const ProdutList = ({ foods }: Props) => {
  return (
    <>
      <Container>
        <div className="container">
          <List>
            {foods.map((food) => (
              <Produto
                key={food.id}
                description={food.description}
                image={food.image}
                star={food.star}
                infos={food.infos}
                rating={food.rating}
                title={food.title}
              />
            ))}
          </List>
        </div>
      </Container>
    </>
  );
};

export default ProdutList;
