import { useSelector } from "react-redux";

import { selectCartItems, selectCartTotal } from "../../Store/Cart/CartSelector";

import CheckoutItem from "../../Components/CheckoutItem/CheckoutItem.Component";
import PaymentForm from "../../Components/PaymentForm/PaymentForm.Component";

import "./Checkout.Styles.scss";

const CheckoutPage = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span> Product </span>
        </div>
        <div className="header-block">
          <span> Description </span>
        </div>
        <div className="header-block">
          <span> Quantity </span>
        </div>
        <div className="header-block">
          <span>
            Price
          </span>
        </div>
        <div className="header-block">
          <span> remove </span>
        </div>
      </div>
        {cartItems.map((cartItem) => {
          return (
            <CheckoutItem key={cartItem.id} cartItem={cartItem} />
          );
        })}
        <span className="total"> Total: ${cartTotal}</span>
        <PaymentForm />
      </div>
  );
};

export default CheckoutPage;
