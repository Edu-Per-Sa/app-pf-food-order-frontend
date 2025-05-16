import { useContext } from "react";
import { createPortal } from "react-dom";

import styles from './OrderSuccess.module.css';
import Modal from "../../UI/Modal/Modal";
import { ModalContext } from "../../store/modal-context";
import { CartContext } from "../../store/cart-context";
import useHttp from "../../hooks/Http/useHttp";
import Button from "../../UI/Button/Button";


export default function OrderSuccess() {

    const { modalText, closeModal } = useContext(ModalContext);
    const { clearCart } = useContext(CartContext);
    const { clearDataRespopnse } = useHttp([]);

    function handleOkOrder () {
        clearDataRespopnse();
        closeModal();
        clearCart();
    }

    return (
        createPortal(
            <Modal openModal={modalText === "order"} onClose={modalText === "order" ? handleOkOrder : null}>
                <div className={styles["form-container"]}>
                    <h2> Successful... </h2>
                    <Button className={styles["ok-seccessful"]} onClick={handleOkOrder}> Ok </Button>
                </div>
            </Modal>,
            document.getElementById("modal"))
    )
}