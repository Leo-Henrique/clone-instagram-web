import { useDispatch } from "react-redux";
import { showMessage } from "../app/slices/message";

export default function useDisable() {
    const dispatch = useDispatch();
    const message = text => dispatch(showMessage({ text, duration: 6000 }));
    const linkDisabled = () => message("Esse link está indisponível por enquanto.");
    const buttonDisabled = () =>
        message("Essa funcionalidade está indisponível por enquanto.");

    return { linkDisabled, buttonDisabled };
}
