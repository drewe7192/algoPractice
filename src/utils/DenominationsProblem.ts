/*
    American currency come in eleven total denominations
    Paper currency come in the following seven denominations: $1, $2, $5, $10, $20, $50, and $100
    Coin currency come in four denominations: 1c, 5c, 10c, and 25c

    write a function called "denominateMoney" that will take in a single number, 
    which value is positive and is either an integer or a floating number(upto 2 decimal places!)
    and will return the least amount of denominations to make up that number

    NOTE: validate that the value given is...
        1. a number
        2. positive
        3. integer or decimal
        4. if number input parameter is decimal, then only allow for 2 decimal places

    example input: denominateMoney(284.64)
    example output: {
        100USD: 2,
        50USD: 1,
        20USD: 1,
        10USD: 1,
        5USD: 0,
        1USD: 4,
        25c: 2,
        10c: 1,
        5c: 0,
        1c: 4
    }
*/

interface IDenominationBreakdown {
    '100USD'    : number
    '50USD'     : number
    '20USD'     : number
    '10USD'     : number
    '5USD'      : number
    '1USD'      : number
    '25c'       : number
    '10c'       : number
    '5c'        : number
    '1c'        : number
}

// Here is where you can work from...
export function denominateMoney(moneyIn: number): IDenominationBreakdown
{
    let moneyOut = {
        '100USD'    : 0,
        '50USD'     : 0,
        '20USD'     : 0,
        '10USD'     : 0,
        '5USD'      : 0,
        '1USD'      : 0,
        '25c'       : 0,
        '10c'       : 0,
        '5c'        : 0,
        '1c'        : 0        
    }

    // do some validation here...
    return moneyOut

}