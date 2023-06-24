import { useDispatch } from "react-redux";
import { showMessage } from "../app/slices/message";

export default function useCopy({ text, success, error }) {
    const dispatch = useDispatch();

    return async () => {
        try {
            await navigator.clipboard.writeText(text);

            dispatch(showMessage({ text: success, duration: 6000 }));
        } catch {
            dispatch(showMessage({ text: error, duration: 6000 }));
        }
    };
}
