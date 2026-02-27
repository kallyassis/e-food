import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Card from "../../components/Card";
import { Button, Descricao } from "./styles";
import { RootReducer } from "../../Store";

import {
  closeOrder,
  closePayment,
  closeCheckout,
  close,
} from "../../Store/reducer/Cart";

const Order = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { orderId } = useSelector((state: RootReducer) => state.cart);

  const backTOHome = () => {
    navigate("/");
    dispatch(closeOrder());
    dispatch(closePayment());
    dispatch(closeCheckout());
    dispatch(close());
  };

  return (
    <>
      <div className="container">
        <Card title={`Pedido realizado - ${orderId ?? ""}`}>
          <div>
            <Descricao>
              Estamos felizes em informar que seu pedido já está em processo de
              preparação e, em breve, será entregue no endereço fornecido.{" "}
              <br /> <br />
              Gostaríamos de ressaltar que nossos entregadores não estão
              autorizados a realizar cobranças extras. <br /> <br />
              Lembre-se da importância de higienizar as mãos após o recebimento
              do pedido, garantindo assim sua segurança e bem-estar durante a
              refeição. <br /> <br />
              Esperamos que desfrute de uma deliciosa e agradável experiência
              gastronômica. Bom apetite!
            </Descricao>
          </div>
          <Button type="button" onClick={() => backTOHome()}>
            Concluir
          </Button>
        </Card>
      </div>
    </>
  );
};

export default Order;
