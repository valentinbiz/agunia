import { useDispatch, useSelector } from "react-redux/es/exports";

import { addItemToCart } from "../../Store/Cart/CartAction";
import { selectCartItems } from "../../Store/Cart/CartSelector";

import "./ProductCard.Styles.scss";

import Button, { BUTTON_TYPE } from "../Button/Button.Component";


const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product;
    const cartItems = useSelector(selectCartItems)
    const dispatch = useDispatch();

    const addProductToCart = () => dispatch(addItemToCart(cartItems, product))

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name"> {name} </span>
        <span className="price"> {price} </span>
      </div>
      <Button buttonType={BUTTON_TYPE.inverted} onClick={addProductToCart}> Add to cart</Button>
    </div>
  );
};

export default ProductCard;
