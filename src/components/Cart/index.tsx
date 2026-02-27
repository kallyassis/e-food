import { useDispatch, useSelector } from "react-redux";

import { RootReducer } from "../../Store";
import { close, remove, openCheckout } from "../../Store/reducer/Cart";
import FormatPrice from "../../utils";
import lixeira from "../../assets/lixeira-de-reciclagem.png";

import * as S from "./styles";

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart);
  const dispatch = useDispatch();

  const CloseCart = () => {
    dispatch(close());
  };

  const removeItem = (id: number) => {
    dispatch(remove(id));
  };

  const openCheckOut = () => {
    dispatch(openCheckout());
  };

  const getTotalPrice = () => {
    return items.reduce((acc, valorTotal) => {
      return (acc += valorTotal.preco);
    }, 0);
  };

  return (
    <>
      <S.CartContaner className={isOpen ? "is-open" : ""}>
        <S.Overlay onClick={CloseCart}></S.Overlay>
        <S.SideBar>
          {items.length > 0 ? (
            <>
              <ul>
                {items.map((item) => (
                  <S.CartItem key={item.id}>
                    <S.ImageMain src={item.foto} alt={item.nome} />
                    <div>
                      <h3>{item.nome}</h3>
                      <span>{FormatPrice(item.preco)}</span>
                    </div>
                    <S.Lixeria
                      src={lixeira}
                      onClick={() => removeItem(item.id)}
                    />
                  </S.CartItem>
                ))}
              </ul>
              <p>
                Valor Total <span>{FormatPrice(getTotalPrice())}</span>
              </p>
              <S.ButtonCart onClick={openCheckOut}>
                Continuar com a entrega
              </S.ButtonCart>
            </>
          ) : (
            <div>
              <S.ErrorMessege>
                O carrinho está vazio. Adicione um item pra continuar
              </S.ErrorMessege>
            </div>
          )}
        </S.SideBar>
      </S.CartContaner>
    </>
  );
};

export default Cart;
