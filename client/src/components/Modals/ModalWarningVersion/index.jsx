import { useDispatch } from "react-redux";

import { useEffect, useState } from "react";
import { closeModal } from "../../../app/slices/modal";
import Modal from "../../Features/Modal";
import Button from "../../Misc/Button";
import * as Styled from "./style";

export default function WarningVersion() {
    const dispatch = useDispatch();
    const [time, setTime] = useState(15);
    const name = "warningVersion";

    useEffect(() => {
        const id = setTimeout(() => {
            if (time > 0) setTime(time - 1);
        }, 1000);

        return () => clearInterval(id);
    }, [time]);

    return (
        <Modal
            name={name}
            dialogStyles={Styled.dialogStyles}
            closeOptions={{
                clickOutside: false,
                escapeKey: false,
            }}
        >
            <Styled.Title>Aviso de versão pré-alfa!</Styled.Title>

            <Styled.Text>
                Como o Instagram é uma rede social bem ampla, decidi postar esse
                clone como está para fornecer uma prévia e atualiza-lo
                progressivamente.
            </Styled.Text>

            <Styled.Text>
                Atualmente há varias funcionalidades incompletas / indisponíveis,
                link quebrados e como qualquer projeto em versão pré-alfa pode haver
                resultados inesperados.
            </Styled.Text>

            <Button
                disabled={time > 0}
                text={time > 0 ? `${time}s` : "Ok"}
                onClick={() => {
                    localStorage.setItem(name, true);
                    dispatch(closeModal(name));
                }}
            />
        </Modal>
    );
}
