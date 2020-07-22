function flattenDiscendants(arrayToFlat, flatArray) {
    var arrayElement = [];
    // init if no value given in props
    typeof flatArray === "undefined" ? (flatArray = []) : null;
    for (var index = 0; index < arrayToFlat.length; index++) {
        arrayElement = arrayToFlat[index];
        if (Array.isArray(arrayElement) && arrayElement.length > 0) {
            // the array still has values of discendants
            flattenDiscendants(arrayElement, flatArray);
        } else {
            flatArray.push(arrayElement);
        }
    }
    return flatArray;
}