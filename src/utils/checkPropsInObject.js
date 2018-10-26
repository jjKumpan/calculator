export const checkForEmptyPropValues = (values) => {
    Object.keys(values).forEach(key => {
        if (!values[key]) {
            values[key] = 0;
        }
    });
    return values;
}