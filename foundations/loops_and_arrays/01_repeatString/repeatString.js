const repeatString = function(word, iter) {
    var count = 0;
    var output = "";
    if (iter < 0) { 
        return "ERROR"
    }
    else {
        while (count < iter){
            output += word; 
            count += 1;
        }
        return output;
    } 
};

// Do not edit below this line
module.exports = repeatString;
