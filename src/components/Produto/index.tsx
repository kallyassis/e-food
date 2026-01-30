import {
  BotaoLink,
  Card,
  Descricao,
  Infos,
  Rating,
  Star,
  TextBox,
  Titulo,
} from "./styles";
import Tag from "../Tag";

type Props = {
  image: string;
  star: string;
  title: string;
  rating: string;
  infos: string[];
  description: string;
};

const Produto = ({ description, image, infos, rating, title, star }: Props) => {
  return (
    <>
      <div className="container">
        <Card>
          <img src={image} alt="" />
          <TextBox>
            <div>
              <Titulo>{title}</Titulo>
              <div>
                <Rating>{rating}</Rating>
                <Star src={star} alt="Estrela" />
              </div>
            </div>
            <Infos>
              {infos.map((infor) => (
                <Tag key={infor}>{infor}</Tag>
              ))}
            </Infos>
            <Descricao>{description}</Descricao>
            <BotaoLink href="#">Saiba mais</BotaoLink>
          </TextBox>
        </Card>
      </div>
    </>
  );
};

export default Produto;
