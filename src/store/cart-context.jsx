import { createContext, useState } from "react";
import { setLocalStorage, getFromLocalStorage } from "../util/manageLocalStorage";

export const CartContext = createContext({
    items: [],
    addItem: () => {},
    removeItem: () => {},
    clearCart: () => {}
})

export default function CartContextProvider({ children }) {

    const [items, setItems] = useState(getFromLocalStorage("foodCartItems") ? getFromLocalStorage("foodCartItems") : [] );

    function addItem(meal) {
        setItems((prevItems) => {
            const newItems = [...prevItems];

            const indexItem = newItems.findIndex((item) => item.id === meal.id);

            if (indexItem >= 0) {

                const updatedItem = {
                    ...newItems[indexItem],
                    quantity: newItems[indexItem].quantity + 1
                };

                newItems[indexItem] = updatedItem;

            } else {
                newItems.unshift({
                    id: meal.id,
                    name: meal.name,
                    quantity: 1,
                    price: meal.price
                })
            }
            setLocalStorage("foodCartItems", [...newItems]);
            return [...newItems];
        })
    }

    function removeItem (id) {
        setItems((prevItems) => {

            const newItems = [...prevItems];

            const indexItem = newItems.findIndex((item) => item.id === id);
            const quatityItem = newItems[indexItem].quantity;

            if (quatityItem > 1) {

                const updatedItem = {
                    ...newItems[indexItem],
                    quantity: newItems[indexItem].quantity - 1
                };

                newItems[indexItem] = updatedItem;

            } else {
                newItems.splice(indexItem, 1);
            }

            setLocalStorage("foodCartItems", [...newItems]);
            return [...newItems];
        })
    }

    function clearCart () {
        setLocalStorage("foodCartItems", []);
        setItems([]);
    }

    const cartContext = {
        items,
        addItem,
        removeItem,
        clearCart,
    };

    return (
        <CartContext.Provider value={cartContext}>
            {children}
        </CartContext.Provider>
    )
}