import salmao from "../../assets/salmão.png";
import espaguet from "../../assets/espaguete.png";
import Star from "../../assets/star.svg";
import ProdutList from "../../components/ProdutList";
import Food from "../../model/Food";
import Banner from "../../components/Benner";

const destaques: Food[] = [
  {
    id: 1,
    title: "Hioki Sushi ",
    rating: "4.9",
    image: salmao,
    star: Star,
    infos: ["Destaque", "Japonesa"],
    description:
      "Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!",
  },
  {
    id: 2,
    title: "Espaguete ",
    rating: "5",
    image: espaguet,
    star: Star,
    infos: ["Destaque"],
    description:
      "Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!",
  },
  {
    id: 3,
    title: "pizza marguerita ",
    rating: "4.9",
    image: salmao,
    star: Star,
    infos: ["Italiana"],
    description:
      "Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!",
  },
  {
    id: 4,
    title: "Hioki Sushi ",
    rating: "4.9",
    image: salmao,
    star: Star,
    infos: ["Destaque", "Japonesa"],
    description:
      "Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!",
  },
  {
    id: 5,
    title: "pizza marguerita ",
    rating: "4.9",
    image: salmao,
    star: Star,
    infos: ["Italiana"],
    description:
      "Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!",
  },
  {
    id: 6,
    title: "Hioki Sushi ",
    rating: "4.9",
    image: salmao,
    star: Star,
    infos: ["Destaque", "Japonesa"],
    description:
      "Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!",
  },
];

const Home = () => {
  return (
    <>
      <Banner />
      <ProdutList foods={destaques} />
    </>
  );
};

export default Home;
