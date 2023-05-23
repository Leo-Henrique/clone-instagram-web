import useHead from "../../hooks/useHead";

export default function Feed() {
    useHead({ title: "Instagram", index: false });

    return <div>Feed</div>;
}
