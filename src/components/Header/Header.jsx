import { useContext } from "react";
import { CartContext } from "../../store/cart-context.jsx";
import styles from "./Header.module.css";
import Button from "../../UI/Button/Button.jsx";
import { ModalContext } from "../../store/modal-context.jsx";


export default function Header() {

    const { items } = useContext(CartContext);
    const { showModal } = useContext(ModalContext);

    
    const totalItems = items.length > 0  ? items.reduce((totalItems, item) => {return totalItems + item.quantity}, 0) : 0;

    return (
        <header className={styles["header-container"]}>
            <div className={styles["app-info"]}>
                <img src={"images/logo.jpg"} alt="Logo Food App" />
                <h1> FOOD APP </h1>
            </div>
            <div>
                <Button onClick={() => showModal("app-info")}>
                    App Info
                </Button>
            </div>
            <div>
                <Button onlyText onClick={() => showModal("cart")}>
                    CART ( {totalItems} )
                </Button>
            </div>
        </header>
    )
}