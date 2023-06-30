import { useDispatch } from "react-redux";
import { showUsers } from "../../../../../../app/slices/modal";
import SVGPerson from "../../../../../../assets/icons/vectors/person.svg";
import * as Styled from "./style";

export default function Marked({ type, persons, showMarked }) {
    const dispatch = useDispatch();
    const openUsersModal = () => {
        const users = persons.map(({ user }) => user);

        dispatch(
            showUsers({
                name: "Marcados",
                data: users,
            })
        );
    };

    return (
        <>
            <Styled.Button onClick={openUsersModal}>
                <SVGPerson aria-label="Ver pessoas marcadas" />
            </Styled.Button>

            {type === "image" && showMarked && (
                <Styled.Badges>
                    {persons.map(({ user, offsetX, offsetY }) => (
                        <Styled.Badge
                            key={user.username}
                            to={`/${user.username}`}
                            $offsetX={offsetX}
                            $offsetY={offsetY}
                        >
                            {user.username}
                        </Styled.Badge>
                    ))}
                </Styled.Badges>
            )}
        </>
    );
}
