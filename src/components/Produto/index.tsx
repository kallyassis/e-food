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
import { useNavigate } from "react-router-dom";

const Produto = ({ avaliacao, capa, descricao, tipo, titulo, id }: Food) => {
  const navigate = useNavigate();

  const getDescricao = (descricao: string) => {
    if (descricao.length > 250) {
      return descricao.slice(0, 248) + "...";
    }
    return descricao;
  };
  return (
    <>
      <div className="container">
        <Card>
          <img src={capa} alt="" />
          <TextBox>
            <div>
              <Titulo>{titulo}</Titulo>
              <div>
                <Rating>{avaliacao}</Rating>
                <Star />
              </div>
            </div>
            <Infos>
              <Tag>{tipo}</Tag>
            </Infos>
            <Descricao>{getDescricao(descricao)}</Descricao>
            <BotaoLink onClick={() => navigate(`/perfil/${id}`)}>
              Saiba mais
            </BotaoLink>
          </TextBox>
        </Card>
      </div>
    </>
  );
};

export default Produto;
