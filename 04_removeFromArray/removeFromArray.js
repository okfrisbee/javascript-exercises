const removeFromArray = function(arr, ...args) {
    for (let i = 0; i < arr.length; i++) {
        let index = args.indexOf(arr[i]);
        if (index > -1) {
            arr.splice(i, 1);
            i--;
        }
    }
    
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
