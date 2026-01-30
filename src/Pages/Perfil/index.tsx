import Header from "../../components/Header";
import MenuList from "../../components/MenuList";
import Pratos from "../../model/Pratos";

import pizza from "../../assets/pizza.png";

const cardapio: Pratos[] = [
  {
    id: 10,
    image: pizza,
    title: "Pizza marguerita",
    description:
      "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
  },
  {
    id: 11,
    image: pizza,
    title: "Pizza marguerita",
    description:
      "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
  },
  {
    id: 12,
    image: pizza,
    title: "Pizza marguerita",
    description:
      "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
  },
  {
    id: 13,
    image: pizza,
    title: "Pizza marguerita",
    description:
      "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
  },
  {
    id: 14,
    image: pizza,
    title: "Pizza marguerita",
    description:
      "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
  },
  {
    id: 15,
    image: pizza,
    title: "Pizza marguerita",
    description:
      "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
  },
  {
    id: 16,
    image: pizza,
    title: "Pizza marguerita",
    description:
      "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
  },
  {
    id: 17,
    image: pizza,
    title: "Pizza marguerita",
    description:
      "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
  },
  {
    id: 18,
    image: pizza,
    title: "Pizza marguerita",
    description:
      "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
  },
];

const Perfil = () => {
  return (
    <>
      <Header />
      <MenuList prato={cardapio} />
    </>
  );
};

export default Perfil;
