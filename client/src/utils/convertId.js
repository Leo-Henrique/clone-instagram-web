export default function convertId(data, ...keys) {
    const modifyId = obj => {
        const { _id } = obj;

        if (_id) {
            delete obj._id;
            obj.id = _id;
        }
    };
    const handleArray = (data, callback) => {
        if (Array.isArray(data)) data.forEach(obj => callback(obj));
        else callback(data);
    };
    const modifyObjects = obj => {
        modifyId(obj);
        keys.forEach(key => handleArray(obj[key], modifyId));
    };

    handleArray(data, modifyObjects);

    return data;
}
