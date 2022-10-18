import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux/es/exports";

import Duck from '../../Pictures/duck.png';

import { selectCurrentUser } from "../../Store/User/UserSelector";

import { selectIsCartOpen } from "../../Store/Cart/CartSelector";

import { signOutUser } from "../../Utils/Firebase/Firebase.Utils";

import CartIcon from "../../Components/CartIcon/CartIcon.Component";
import CartDropdown from "../../Components/CartDropdown/CartDropdown.Component";

import {NavigationContainer, LogoContainer, NavLinkContainer, NavLink} from './Navigation.Styles.jsx';

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to='/'>
          <img src={Duck} className="logo"  alt="/" width={50}/>
        </LogoContainer>
        <NavLinkContainer>
          <NavLink to='/shop'>
            Shop
          </NavLink>
          {
            currentUser ? (
              <NavLink as='span' onClick={signOutUser}> Sign out </NavLink>) 
              : (<NavLink to='/auth'>
              Sign In
              </NavLink>
            )
          }
          <CartIcon />
        </NavLinkContainer>
        { isCartOpen && <CartDropdown /> }
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
