export default function filteredContent(content, { items, collection }) {
    if (items && collection) {
        const endIndex = items * collection;

        return content.filter(
            (item, index) => index >= endIndex - items && index < endIndex
        );
    } else return content;
}
