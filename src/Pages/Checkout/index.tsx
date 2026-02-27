import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { InputMask } from "@react-input/mask";

import Card from "../../components/Card";
import { BoxInput, Button, GrupInput, Label } from "./styles";
import { open, openPayment, setDelivery } from "../../Store/reducer/Cart";

const Checkout = () => {
  const dispatch = useDispatch();

  const returnToCart = () => {
    dispatch(open());
  };

  const form = useFormik({
    initialValues: {
      fullName: "",
      address: "",
      city: "",
      zipCode: "",
      houseNumber: "",
      complement: "",
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(6, "O nome deve conter 5 caracteres ou mais")
        .required("Campo obrigatório"),
      address: Yup.string().required("Campo obrigatório"),
      city: Yup.string().required("Campo obrigatório"),
      zipCode: Yup.string()
        .min(9, "O CEP deve conter 8 caracteres")
        .max(9, "CEP inválido")
        .required("Campo obrigatório"),
      houseNumber: Yup.string().required("Campo obrigatório"),
      complement: Yup.string(),
    }),
    onSubmit: (values) => {
      dispatch(
        setDelivery({
          receiver: values.fullName,
          address: {
            description: values.address,
            city: values.city,
            zipCode: values.zipCode,
            number: Number(values.houseNumber),
            complement: values.complement,
          },
        }),
      );
      dispatch(openPayment());
    },
  });
  const getErrorMessege = (fieldName: string, messege?: string) => {
    const isTouched = fieldName in form.touched;
    const isInvalid = fieldName in form.errors;

    if (isTouched && isInvalid) return messege;
    return "";
  };

  return (
    <>
      <form onSubmit={form.handleSubmit} className="container">
        <Card title="Entrega">
          <GrupInput>
            <div>
              <label htmlFor="fullName">Quem irá receber</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Nome completo"
                value={form.values.fullName}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>{getErrorMessege("fullName", form.errors.fullName)}</small>
            </div>

            <div>
              <label htmlFor="address">Endereço</label>
              <input
                type="text"
                id="address"
                name="address"
                value={form.values.address}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>{getErrorMessege("address", form.errors.address)}</small>
            </div>
            <div>
              <label htmlFor="city">Cidade</label>
              <input
                type="text"
                id="city"
                name="city"
                value={form.values.city}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>{getErrorMessege("city", form.errors.city)}</small>
            </div>

            <BoxInput>
              <Label maxWidth="155px">
                <label htmlFor="zipCode">CEP</label>
                <InputMask
                  type="text"
                  id="zipCode"
                  name="zipCode"
                  value={form.values.zipCode}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  mask="99999-999"
                  replacement={{ 9: /\d/ }}
                />
                <small>{getErrorMessege("zipCode", form.errors.zipCode)}</small>
              </Label>

              <Label maxWidth="155px">
                <label htmlFor="houseNumber">Número</label>
                <input
                  type="text"
                  id="houseNumber"
                  name="houseNumber"
                  value={form.values.houseNumber}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                <small>
                  {getErrorMessege("houseNumber", form.errors.houseNumber)}
                </small>
              </Label>
            </BoxInput>
            <label htmlFor="complement">Complemento(Opcional)</label>
            <input
              type="text"
              id="complement"
              name="complement"
              value={form.values.complement}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
          </GrupInput>
          <Button type="submit">Continuar com o pagamento</Button>
          <Button type="button" onClick={returnToCart}>
            Voltar para o carrinho
          </Button>
        </Card>
      </form>
    </>
  );
};

export default Checkout;
