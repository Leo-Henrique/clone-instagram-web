import { useDispatch } from "react-redux";
import { showUsers } from "../../../../../../app/slices/modal";
import SVGPerson from "../../../../../../assets/icons/vectors/person.svg";
import PostControl from "../../../../../../components/Misc/PostControl";
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
            <PostControl
                label="Ver pessoas marcadas"
                $paddingY="bottom"
                $paddingX="left"
                onClick={openUsersModal}
            >
                <SVGPerson aria-label="Ver pessoas marcadas" />
            </PostControl>

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
