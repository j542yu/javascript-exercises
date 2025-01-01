const sumAll = function(lowbound, highbound) {
    if (lowbound > highbound) {
        let tmp = lowbound;
        lowbound = highbound;
        highbound = tmp;
    }
    if (!Number.isInteger(lowbound) ||
        !Number.isInteger(highbound) ||
        (lowbound < 0) ||
        (highbound < 0))
    {
        return 'ERROR';
    } else {
        let sum = 0;
        for (let i = lowbound; i <= highbound; ++i) {
            sum += i;
        }
        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
