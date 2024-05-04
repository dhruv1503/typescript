// object defination in a function
export const printCoordinates = (coords) => {
    return `Coords are as follws x-axis ${coords.x}, y-axis ${coords.y}`;
};
// optional keys in objects are defined by a ?
export const printName = (name) => {
    if (!name.lastName) {
        return `My name is ${name.firstName}`;
    }
    return `My name is ${name.firstName} ${name.lastName}`;
};
