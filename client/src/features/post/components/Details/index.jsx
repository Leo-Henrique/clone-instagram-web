import SVGComments from "../../../../assets/icons/vectors/comments.svg";
import SVGLike from "../../../../assets/icons/vectors/heart.svg";
import SVGSave from "../../../../assets/icons/vectors/save.svg";
import SVGShare from "../../../../assets/icons/vectors/share.svg";
import Skeleton from "../../../../components/Loaders/Skeleton";

export default function Details({ post }) {
    const actions = [
        {
            desc: "Curtir publicação",
            icon: <SVGLike />,
        },
        {
            desc: "Comentar na publicação",
            icon: <SVGComments />,
        },
        {
            desc: "Compartilhar publicação",
            icon: <SVGShare />,
        },
        {
            desc: "Salvar a publicação",
            icon: <SVGSave />,
        },
    ];
    const likes = post?.likes?.length;
    const likesFormatted = likes?.toLocaleString("pt-BR");
    const createdAt = post?.createdAt && new Date(post.createdAt).toString();
    const tempDate =
        createdAt && createdAt.replace(" GMT-0300 (Horário Padrão de Brasília)", "");

    if (!post) return <Skeleton count={2} />;

    return (
        <div>
            <ul>
                {actions.map(({ desc, icon }) => (
                    <li key={desc}>
                        <button type="button" aria-label={desc}>
                            {icon}
                        </button>
                    </li>
                ))}
            </ul>

            {likes > 0 ? (
                <button type="button">
                    {likesFormatted} {likes > 1 ? "curtidas" : "curtida"}
                </button>
            ) : (
                <p>Seja a primeira pessoa a curtir essa publicação</p>
            )}

            <time dateTime={post?.createdAt}>{tempDate}</time>
        </div>
    );
}
