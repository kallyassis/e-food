import { CartContaner, Overlay, SideBar } from "./styles";
import { RootReducer } from "../../Store";
import { useSelector } from "react-redux";

type Props = {
  title: string;
  children: React.ReactNode;
};

const Card = ({ children, title }: Props) => {
  const { isOpenCheckout } = useSelector((state: RootReducer) => state.cart);

  return (
    <>
      <CartContaner className={isOpenCheckout ? "is-visible" : ""}>
        <Overlay></Overlay>
        <SideBar>
          <h3>{title}</h3>
          {children}
        </SideBar>
      </CartContaner>
    </>
  );
};

export default Card;
