import { useContext, useState } from "react";
import { createPortal } from "react-dom";
import styles from './AppInfo.module.css';

import Modal from "../../UI/Modal/Modal";
import { ModalContext } from "../../store/modal-context";
import { appInfoES } from "./AppInfoES";
import { appInfoEN } from "./AppInfoEN";
import Button from "../../UI/Button/Button";

export default function AppInfo() {

    const [englisLang, setEnglisLang] = useState("EN");
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
                <div className={styles["container"]}>
                    <div className={styles["button-lan"]}>
                        <Button onClick={handleLanguage}> {englisLang ? "ES" : "EN"} </Button>
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
                    <div className={styles["button-close"]}>
                        <Button onClick={handleClose}> Close </Button>
                    </div>
                </div>
            </Modal>
            ,
            document.getElementById("modal")
        )
    )
};