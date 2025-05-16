import { useContext, useRef } from "react";
import { createPortal } from "react-dom";
import styles from "./Checkout.module.css";

import { ModalContext } from "../../store/modal-context";
import { CartContext } from "../../store/cart-context.jsx";
import Modal from "../../UI/Modal/Modal.jsx";
import Input from "../../UI/Input/Input.jsx";
import useHttp from "../../hooks/Http/useHttp.js";
import ErrorInfo from "../ErrorInfo/ErrorInfo.jsx";
import Button from '../../UI/Button/Button.jsx';

const urlPutOrder = 'https://app-portfolio-ba2d4-default-rtdb.europe-west1.firebasedatabase.app/app-food-order/order-checkout.json';

export default function Checkout() {
    const { modalText, closeModal, showModal } = useContext(ModalContext);
    const { items } = useContext(CartContext);

    const formRef = useRef();

    const { sendRequest, error, data: respData, isFetching } = useHttp([]);

    async function handleOrder(event) {
        event.preventDefault();
        const formDataObj = new FormData(event.target);
        const data = Object.fromEntries(formDataObj.entries());

        const resData = await sendRequest(
            urlPutOrder,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    order: {
                        items,
                        customer: { ...data }
                    }
                })
            }
        );

        if (resData) {
            closeModal();
            showModal("order");
            formRef.current.reset();
        }
    }

    let errorInfo = ""
    if (error) {
        errorInfo = <ErrorInfo title={"Error sending order"} message={error.message} />
    }

    return (
        createPortal(
            <Modal openModal={modalText === "checkout"} onClose={modalText === "checkout" ? closeModal : null}>
                <form className={styles["form-container"]} ref={formRef} onSubmit={handleOrder}>
                    <Input label={"Name"} id={"name"} name={"name"} />
                    <Input type="email" label="E-Mail" id="email" name="email" />
                    <Input label="Street" id="street" name="street" />
                    <div className={styles["item-address"]}>
                        <Input type="text" label={"City"} id={"city"} name={"city"} />
                        <Input type="number" label={"Postal Code"} id={"postal-code"} name={"postal-code"} />
                    </div>
                    {errorInfo}
                    <div className={styles["item-actions"]}>
                        {!isFetching &&
                            <>
                                <Button onlyText onClick={() => closeModal()}> CLOSE </Button>
                                <Button type="submit"> ORDER </Button>
                            </>
                        }
                        {isFetching && <p> Sending order...</p>}
                    </div>
                </form>
            </Modal>,
            document.getElementById("modal"))
    )

}