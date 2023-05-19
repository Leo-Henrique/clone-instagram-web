import { Button } from "./style";
import Spinner from "../Spinner";

export default function SubmitBtn({ text, isLoading }) {
    return (
        <>
            <Button disabled={isLoading && true}>
                {isLoading ? (
                    <Spinner $themeColor="white" $padding="1.5px 0" />
                ) : (
                    text
                )}
            </Button>
        </>
    );
}
