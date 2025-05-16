import { useContext } from "react";
import { createPortal } from "react-dom";
import { useState } from "react";

import Modal from "../../UI/Modal/Modal";
import { ModalContext } from "../../store/modal-context";
import { appInfoES } from "./AppInfoES";
import { appInfoEN } from "./AppInfoEN";

export default function AppInfo() {

    const [englisLang, setEnglisLang] = useState(null);
    const { modalText, closeModal } = useContext(ModalContext);

    let content = appInfoES;

    if (englisLang) {
        content = appInfoEN;
    };

    function handleClose() {
        closeModal();
    };

    function handleLanguage() {
        setEnglisLang((prevState) => !prevState);
    };

    return (
        createPortal(
            <Modal openModal={modalText === "app-info"} onClose={modalText === "app-info" ? handleClose : null}>
                <div>
                    <button onClick={handleLanguage}> {englisLang ? "ES" : "EN"} </button>
                </div>
                {content.map((info) => {
                    return (
                        <div key={info.title}>
                            <h3>{info.title} </h3>
                            <div>
                                {info.paragrahs.map(ph => <p key={ph}> {ph} </p>)}
                            </div>
                        </div>
                    )
                })}
                <button onClick={handleClose}> Close </button>
            </Modal>
        )
    )
};