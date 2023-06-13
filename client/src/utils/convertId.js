export default function convertId(response) {
    const convert = data => {
        const id = data._id;

        delete data._id;
        return { id, ...data };
    };

    if (Array.isArray(response)) return response.map(convert);
    else return convert(response);
}
