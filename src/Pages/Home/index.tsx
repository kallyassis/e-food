import ProdutList from "../../components/ProdutList";

import Banner from "../../components/Benner";


export type Food = {
  id: number;
  titulo: string;
  destacado: boolean;
  tipo: string;
  avaliacao: number;
  descricao: string;
  capa: string;
  cardapio: [
    {
      foto: string;
      preco: number;
      id: number;
      nome: string;
      descricao: string;
      porcao: string;
    },
  ];
};

const Home = () => {
  
  return (
    <>
      <Banner />
      <ProdutList />
    </>
  );
};

export default Home;
