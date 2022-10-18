import { Routes, Route } from "react-router-dom";

import { useEffect } from "react";

import { useDispatch } from "react-redux/es/exports";

import { onAuthStateChangedListener, createUserDoc } from "./Utils/Firebase/Firebase.Utils";
import { setCurrentUser } from "./Store/User/UserAction";

import Home from "./Routes/Home/Home.Component";
import Navigation from "./Routes/Navigation/Navigation.Component";
import Authentication from "./Routes/Authentication/Authentication.Component";
import Shop from "./Routes/Shop/Shop.Component";
import CheckoutPage from "./Routes/Checkout/Checkout.Component";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
        if(user) {
            createUserDoc(user);
        }
        dispatch(setCurrentUser(user));
    });

    return unsubscribe;
}, []);
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<CheckoutPage />} />
      </Route>
    </Routes>
  );
};

export default App;
