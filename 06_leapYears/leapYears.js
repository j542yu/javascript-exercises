const leapYears = function(year) {
    let isDivisibleByFour = (year % 4 === 0);
    let isCenturyYear = (year % 100 === 0);
    let isDivisibleByFourHundred = (year % 400 === 0);
    
    if (isDivisibleByFour && 
        (!isCenturyYear || isDivisibleByFourHundred)
    ) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
