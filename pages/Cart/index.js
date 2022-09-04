import CartComp from "../../components/cart/CartComp";


export default function Cart(props) {

  return (
    <div className="container">
      <CartComp suggested={props.suggestedProduct} />
    </div>
  );
}


