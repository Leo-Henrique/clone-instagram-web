import { Button } from "./style";
import Loading from "../Loading";

export default function SubmitBtn({ text, isLoading }) {
    return (
        <>
            <Button disabled={isLoading && true}>
                {isLoading ? (
                    <Loading $themeColor="white" $padding="1.5px 0" />
                ) : (
                    text
                )}
            </Button>
        </>
    );
}
