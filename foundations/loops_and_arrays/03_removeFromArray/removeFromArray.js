const removeFromArray = function(arr, ...elements) {
    const newArr = [];
    for (var element of arr) {
        if (!elements.includes(element)) {
            newArr.push(element);
        }
    }
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
