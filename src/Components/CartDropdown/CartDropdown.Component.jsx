import { useSelector } from 'react-redux/es/exports';
import { useNavigate } from 'react-router-dom';

import { selectCartItems } from '../../Store/Cart/CartSelector';

import {CartDropdownContainer, CartItems, EmptyMessage} from  './CartDropdown.Styles.jsx';

import Button from '../Button/Button.Component';
import CartItem from '../CartItem/CartItem.Compoenent';

const CartDropdown = () => {
    const cartItems = useSelector(selectCartItems);
    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate('/checkout')
    }

    return (
        <CartDropdownContainer>
            <CartItems>
            {
                cartItems.length ? (cartItems.map((item) => (
                    <CartItem key={item.id} cartItem={item} />
                    ))) : ( 
                        <EmptyMessage> Your cart is empty </EmptyMessage>
                        )
            }
                
            </CartItems>
            <Button onClick={goToCheckoutHandler} buttonType="inverted"> Go to checkout</Button>
        </CartDropdownContainer>
    )
};

export default CartDropdown;