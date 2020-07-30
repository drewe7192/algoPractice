/**
 * 
 * On a web form, 
 * users are asked to enter dates which come in as strings. 
 * Before storing them to the database 
 * they need to be converted to a standard date format 
 * Write a function to convert the dates as database, 
 * they need to be converted to a standard date format. 
 * Write a function to convert the dates as described.
 * 
 * 
 * Given a date string in the format Day Month Year, where:
 * Day a string in the form "1st", "2nd", "3rd", "21st", "22nd", "23rd", "31st" 
 * and all others are the number + "th", e.g. "4th" or "12th".
 * 
 * Month is the first three letters of the English language months, 
 * like "Jan" for January through "Dec" for December.
 * 
 * Year is 4 digits ranging from 1900 to 2100
 * 
 * Convert the date string "Day Month Year" to the date string "YYYY-MM-DD" 
 * in the format "4 digit year - 2 digit month - 2 digit day".
 * 
 * Example
 * 1st Mar 1974 → 1974-03-01
 * 22nd Jan 2013 → 2013-01-22
 * 7th Apr 1904 → 1904-04-07
 * 
 * 
 * Function Description
 * Complete the function preprocessDate in the editor below.
 * preprocessDate has the following parameter(s):
 * string dates[n]: an array of date strings in the format Day Month Year
 * Returns:
 *  string[n]: array of converted date strings
 * 
 * Constraints
 *  > The values of Day, Month, and Year are restricted to the value ranges specified above.
 *  > The given dates are guaranteed to be valid, so no error handling is necessary.
 *  > 1 ≤ n ≤ 10^4
 */


 /**
  * Validation is a custom type of error...
  */
 class ValidationError extends Error
 {
     constructor(msg: string)
     {
         super(msg)
         this.name = 'Validation Error'
     }
 }

interface IMonthLookup {
    "Jan": string
    "Feb": string
    "Mar": string
    "Apr": string
    "May": string
    "Jun": string
    "Jul": string
    "Aug": string
    "Sep": string
    "Oct": string
    "Nov": string
    "Dec": string
}

const MonthsDictionary: IMonthLookup = {
    "Jan": "01",
    "Feb": "02",
    "Mar": "03",
    "Apr": "04",
    "May": "05",
    "Jun": "06",
    "Jul": "07",
    "Aug": "08",
    "Sep": "09",
    "Oct": "10",
    "Nov": "11",
    "Dec": "12"
}

/**
 * A type that is a string abbreviation for the Months of the year
 */
type Months = keyof IMonthLookup


export abstract class DateSolver
{
    private static readonly _delimitor: string = '-'
    private static readonly MonthsSet = new Set<Months>([
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ])

    private static readonly constraint = {
        small: 1,
        large: Math.pow(10,4) // 10 * 10 * 10 * 10 = 10,000
    }


    private static _validateDay = (dayString: string) => {
        // checks if day string passed ends with st, nd, rd, or th
        const dayRegex = /(st|nd|rd|th)$/gm
        const isValid = dayRegex.test(dayString.trim())
        if(!isValid) throw new ValidationError("invalid day input")
        return isValid
    }

    private static _betweenContraintRange(n: number)
    {
        const _inRange = n >= DateSolver.constraint.small && n <= DateSolver.constraint.large
        if(!_inRange) throw new ValidationError('number does not fall in between range!')
        return _inRange
    }

    private static _toMonth(month: string): string
    {
        const m = month as Months
        if(!DateSolver.MonthsSet.has(m)) throw new ValidationError("error - unable to cast month to number.")
        return MonthsDictionary[m]
    }

    /**
     * function will take in int and will add 0 if number is less than or equal to 9 as string, will return number as string if not.
     * @param numberDate number value passed in as value
     */
    private static toDateNumber = (numberDate: number):string => 
        numberDate <= 9 
            ? `0${numberDate.toString()}`
                : numberDate.toString()

    /**
     * function will transform a single date
     * @param date Date String will be used in casting...
     */
    private static _preprocessDate(date: string) : string
    {
        try {
            if(typeof date === 'string' && date.length > 0) 
            {
                // splits the string to 3 strings in a perfect world... 
                // where first string is represented by the Day
                // where seconds string is the Month
                // where the third string is the Year 
                const dateSplit = date.split(' ')
                if(Array.isArray(dateSplit) && dateSplit.length === 3) {
                    const [Day, Month, Year] = dateSplit
                    // gives me back a string between 01 - 12 based on Month Abbreviation Passed
                    const monthNumber = DateSolver._toMonth(Month)
                    let dayNumber = 'dd'
                    let D = parseInt(Day)
                    if(DateSolver._betweenContraintRange(D) && DateSolver._validateDay(Day)) dayNumber = DateSolver.toDateNumber(D)
                    DateSolver._betweenContraintRange(parseInt(Year))
                    return Year + DateSolver._delimitor + monthNumber + DateSolver._delimitor + dayNumber
                }
            } else throw new ValidationError("date is not valid string");

        } catch (thrownError) {
            console.error(thrownError.message)
        }

        // should be impossible to get to this...
        return ''

    }


    /**
     * Complete the function preprocessDate in the editor below.
     * preprocessDate has the following parameter(s):
     * string dates[n]: an array of date strings in the format Day Month Year
     * Returns:
     *  string[n]: array of converted date strings
     * @param dates as the Array of strings in format of 1st Mar 1974
     */
    public static preprocessDates(dates: Array<string>): Array<string>
    {
        let outCollection: Array<string> = [];
        if(Array.isArray(dates) && Array.length > 0) outCollection = dates.map(DateSolver._preprocessDate)
        return outCollection
    }
}