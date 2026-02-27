declare type Product = {
  id: number;
  price: number;
};

declare type DeliveryType = {
  receiver: string;
  address: {
    description: string;
    city: string;
    zipCode: string;
    number: number;
    complement?: string;
  };
};

type Pay = {
  card: {
    name: string;
    number: string;
    code: number;
    expires: {
      month: number;
      year: number;
    };
  };
};

declare type PurchasePayload = {
  products: Product[];
  delivery: DeliveryType | null;
  payment: Pay | null;
};

declare type CardapioItem = {
  foto: string;
  preco: number;
  id: number;
  nome: string;
  descricao: string;
  porcao: string;
};

declare type Food = {
  id: number;
  titulo: string;
  destacado: boolean;
  tipo: string;
  avaliacao: number;
  descricao: string;
  capa: string;
  cardapio: CardapioItem[];
};

