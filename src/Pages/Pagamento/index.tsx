import { useFormik } from "formik";
import * as YUP from "yup";
import { useDispatch, useSelector } from "react-redux";
import  {  InputMask  }  from  '@react-input/mask' ;

import { RootReducer } from "../../Store";
import { setOrderId } from "../../Store/reducer/Cart";
import { closePayment, openOrder } from "../../Store/reducer/Cart";
import { usePurchaseMutation } from "../../Services";
import FormatPrice from "../../utils";

import Card from "../../components/Card";
import { BoxInput, Button, GrupInput, SmallBoxInput } from "./styles";


const Payment = () => {
  const dispatch = useDispatch();

  const { delivery, products, items } = useSelector(
    (state: RootReducer) => state.cart,
  );
  const [purchase, { isLoading }] = usePurchaseMutation();

  const returnToAddress = () => {
    dispatch(closePayment());
  };

  const form = useFormik({
    initialValues: {
      nameOwner: "",
      cardNumber: "",
      cvv: "",
      exMonth: "",
      exYear: "",
    },
    validationSchema: YUP.object({
      nameOwner: YUP.string()
        .min(5, "Nome muito curto")
        .required("Campo obrigatóri"),
      cardNumber: YUP.string()
        .max(19, "Cartão inválido")
        .required("Campo obrigatório"),
      cvv: YUP.string()
        .max(3, "Código do cartão inválido")
        .required("Campo obrigatório"),
      exMonth: YUP.string()
        .max(2, "Mês inválido ex(01)")
        .required("Campo obrigatório"),
      exYear: YUP.string()
        .max(2, "Ano inválido ex(27)")
        .required("Campo obrigatório"),
    }),

    onSubmit: async (values) => {
      const payload: PurchasePayload = {
        products,
        delivery,
        payment: {
          card: {
            name: values.nameOwner,
            number: values.cardNumber,
            code: Number(values.cvv),
            expires: {
              month: Number(values.exMonth),
              year: Number(values.exYear),
            },
          },
        },
      };
      const response = await purchase(payload).unwrap();
      dispatch(setOrderId(response.orderId));
      dispatch(openOrder());
    },
  });

  const getErrorMessege = (fieldName: string, messege?: string) => {
    const isTouched = fieldName in form.touched;
    const isInvalid = fieldName in form.errors;

    if (isTouched && isInvalid) return messege;
    return "";
  };

  const totalPrice = items.reduce((acc, totalValue) => {
    return (acc += totalValue.preco);
  }, 0);

  return (
    <>
      <form onSubmit={form.handleSubmit} className="container">
        <Card
          title={`Pagamento - Valor a pagar R$: ${FormatPrice(totalPrice)}`}
        >
          <BoxInput>
            <div>
              <label htmlFor="nameOwner">Nome no cartão</label>
              <input
                type="text"
                id="nameOwner"
                name="nameOwner"
                value={form.values.nameOwner}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                placeholder="Nome no cartão"
              />
              <small>
                {getErrorMessege("nameOwner", form.errors.nameOwner)}
              </small>
            </div>
            <GrupInput>
              <SmallBoxInput maxWidth="228px">
                <label htmlFor="cardNumber">Número do cartão</label>
                <InputMask
                  type="text"
                  id="cardNumber"
                  name="cardNumber"
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  value={form.values.cardNumber}
                  mask="9999 9999 9999 9999 "
                  replacement={{ 9: /\d/ }}
                />
                <small>
                  {getErrorMessege("cardNumber", form.errors.cardNumber)}
                </small>
              </SmallBoxInput>
              <SmallBoxInput maxWidth="87px">
                <label htmlFor="cvv">CVV</label>
                <InputMask
                  type="text"
                  id="cvv"
                  name="cvv"
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  value={form.values.cvv}
                  mask="999"
                  replacement={{ 9: /\d/ }}
                />
                <small>{getErrorMessege("cvv", form.errors.cvv)}</small>
              </SmallBoxInput>
            </GrupInput>
            <GrupInput>
              <SmallBoxInput maxWidth="155px">
                <label htmlFor="exMonth">Mês de vencimento</label>
                <InputMask
                  type="text"
                  id="exMonth"
                  name="exMonth"
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  value={form.values.exMonth}
                  mask="99"
                  replacement={{ 9: /\d/ }}
                />
                <small>{getErrorMessege("exMonth", form.errors.exMonth)}</small>
              </SmallBoxInput>
              <SmallBoxInput maxWidth="155px">
                <label htmlFor="exYear">Ano de vencimento</label>
                <InputMask
                  type="text"
                  id="exYear"
                  name="exYear"
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  value={form.values.exYear}
                  mask="99"
                  replacement={{ 9: /\d/ }}
                />
                <small>{getErrorMessege("exYear", form.errors.exYear)}</small>
              </SmallBoxInput>
            </GrupInput>
          </BoxInput>
          <Button type="submit">
            {isLoading ? "Finalizando compra..." : "Finalizar compra"}
          </Button>
          <Button type="button" onClick={returnToAddress}>
            Voltar para edição de endereço
          </Button>
        </Card>
      </form>
    </>
  );
};

export default Payment;
