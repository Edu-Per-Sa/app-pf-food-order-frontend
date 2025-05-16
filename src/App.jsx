import AppInfo from "./components/AppInfo/AppInfo.jsx";
import Cart from "./components/Cart/Cart.jsx";
import Checkout from "./components/Checkout/Checkout.jsx";
import Header from "./components/Header/Header.jsx";
import Meals from "./components/Meals/Meals.jsx";
import OrderSuccess from "./components/OrderSuccess/OrderSuccess.jsx";

import CartContextProvider from "./store/cart-context.jsx";
import ModalContextProvider from "./store/modal-context.jsx";

function App() {

  return (
    <ModalContextProvider>
      <CartContextProvider>
        <Header />
        <Meals />
        <Cart />
        <Checkout/>
        <OrderSuccess/>
        <AppInfo/>
      </CartContextProvider>
    </ModalContextProvider>
  );
}

export default App;
