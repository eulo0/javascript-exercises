const sumAll = function(a, b) {
    if (Number.isInteger(a) && Number.isInteger(b) && a >= 0 && b >= 0) {
        var sum = 0;
        const min = Math.min(a,b)
        const max = Math.max(a,b)
        for (var i = min; i <= max; i++) {
            sum += i;
        }
        return sum;
    }
    else {
        return "ERROR"
    }
    
};

// Do not edit below this line
module.exports = sumAll;
