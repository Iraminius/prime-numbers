const primeNumbers = require("./index")

describe("Test prime-numbers functions", () => {

    describe("Checking the primality for number type", () => {

        test("isPrime(113) should return true", () => {
            expect(primeNumbers.isPrime(113)).toBeTruthy()
        })

        test("isPrime(7919) should return true", () => {
            expect(primeNumbers.isPrime(7919)).toBeTruthy()
        })

        test("isPrime(548) should return false", () => {
            expect(primeNumbers.isPrime(548)).toBeFalsy()
        })

        test("isPrime(7920) should return false", () => {
            expect(primeNumbers.isPrime(7920)).toBeFalsy()
        })

        test("isPrime(35742549198872617291353508656626642567) should throw error", () => {
            expect(() => { primeNumbers.isPrime(35742549198872617291353508656626642567) }).toThrow()
        })

    })

    describe("Checking the primality for strings", () => {

        test("isPrime(\"35742549198872617291353508656626642567\") should return true", () => {
            expect(primeNumbers.isPrime("35742549198872617291353508656626642567")).toBeTruthy()
        })

        test("isPrime(\"42541575368552451252132646423524524554\") should return false", () => {
            expect(primeNumbers.isPrime("42541575368552451252132646423524524554")).toBeFalsy()
        })

    })

    describe("Getting primes in range", () => {

        test("getPrimes(2, 10) should return [2, 3, 5, 7]", () => {
            expect(primeNumbers.getPrimesInRange(2, 10)).toEqual([2, 3, 5, 7])
        })

        test("getPrimes(10, 2) should return [2, 3, 5, 7]", () => {
            expect(primeNumbers.getPrimesInRange(10, 2)).toEqual([2, 3, 5, 7])
        })

    })

})