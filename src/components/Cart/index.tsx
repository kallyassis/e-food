import {
  ButtonCart,
  CartContaner,
  CartItem,
  ImageMain,
  Lixeria,
  Overlay,
  SideBar,
} from "./styles";
import lixeira from "../../assets/lixeira-de-reciclagem.png";
import { close, remove } from "../../Store/reducer/Cart";
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../Store";
import { formatPreco } from "../MenuList";

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart);

  const dispatch = useDispatch();

  const CloseCart = () => {
    dispatch(close());
  };

  const removeItem = (id: number) => {
    dispatch(remove(id));
  };

  const getTotalPrice = () => {
    return items.reduce((acc, valorTotal) => {
      return (acc += valorTotal.preco);
    }, 0);
  };
  return (
    <>
      <CartContaner className={isOpen ? "is-open" : ""}>
        <Overlay onClick={CloseCart}></Overlay>
        <SideBar>
          <ul>
            {items.map((item) => (
              <CartItem>
                <ImageMain src={item.foto} alt={item.nome} />
                <div>
                  <h3>{item.nome}</h3>
                  <span>{formatPreco(item.preco)}</span>
                </div>
                <Lixeria src={lixeira} onClick={() => removeItem(item.id)} />
              </CartItem>
            ))}
          </ul>
          <p>
            Valor Total <span>{formatPreco(getTotalPrice())}</span>
          </p>
          <ButtonCart>Continuar com a entrega</ButtonCart>
        </SideBar>
      </CartContaner>
    </>
  );
};

export default Cart;
