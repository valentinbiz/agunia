import {ShoppingIcon, CartIconContainer, ItemCount} from './CartItem.Styles.jsx';

import { useDispatch, useSelector } from 'react-redux/es/exports.js';

import { selectCartCount, selectIsCartOpen } from '../../Store/Cart/CartSelector.js';

import { setIsCartOpen } from '../../Store/Cart/CartAction.js';

const CartIcon = () => {
    const dispatch = useDispatch();

    const cartCount = useSelector(selectCartCount);

    const isCartOpen = useSelector(selectIsCartOpen);

    const toggleIsCartOpen =  () => dispatch(setIsCartOpen(!isCartOpen));

    return (
        <CartIconContainer onClick={toggleIsCartOpen}>
            <ShoppingIcon className='shopping-icon'/>
            <ItemCount> {cartCount} </ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon;