const bigInt = require("big-integer")
const maxNativeNumber = 9007199254740992

let formatNumber = (number, toBigInt = false) => {
    let isBigInt = false

    if(typeof(number) === "number") {
        if(number > maxNativeNumber) {
            throw RangeError("The given number is too big. Please pass it as bigInt or string")
        } else if (toBigInt) {
            number = bigInt(number)
            isBigInt = true
        }
    } else if(typeof(number) === "string") {
        if(number > maxNativeNumber || toBigInt) {
            number = bigInt(number)
            isBigInt = true
        } else {
            number = parseInt(number)
        }
    } else if(bigInt.isInstance(number)) {
        isBigInt = true
    } else {
        throw TypeError("Parameter doesn't match. You must provide a number, bigInt or string")
    }

    if(isBigInt) {
        if(number.lesser(0)) {
            throw RangeError("The given number must be a positive number")
        }
    } else {
        if(number < 0) {
            throw RangeError("The given number must be a positive number")
        }
    }

    return { number, isBigInt }
}

let isPrime = (number) => {
    ({ number } = formatNumber(number, true))

    return number.isPrime()
}

let getPrimesInRange = (begin, end) => {
    let returnBigInt = false

    begin = formatNumber(begin)
    end = formatNumber(end)

    if(begin.isBigInt || end.isBigInt) {
        returnBigInt = true
    }

    if(!begin.isBigInt) { begin = formatNumber(begin.number, true) }
    if(!end.isBigInt) { end = formatNumber(end.number, true) }

    if(begin.number.greater(end.number)) {
        ({ begin: end, end: begin } = { begin, end })
    }

    let primes = []

    for(let number = begin.number; number.lesser(end.number); number = number.plus(1)) {
        if(number.isPrime()) {
            primes.push(number)
        }
    }

    if(returnBigInt) {
        return primes
    } else {
        return primes.map( number => {
            return number.valueOf()
        })
    }
}

let getRandomPrime = (begin = 0, end = 1000) => {
    let primes = getPrimesInRange(begin, end)

    return primes[Math.floor(Math.random() * primes.length)]
}

module.exports = { isPrime, getPrimesInRange, getRandomPrime }