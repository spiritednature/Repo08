function randomRangeNumber(minNumber, maxNumber) {
    return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber
}

console.log(randomRangeNumber(2,18));

module.exports = randomRangeNumber;