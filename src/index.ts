import { PeopleCollection } from './Data/PeopleSample'
import { Logger } from './Utilities/Logger'

// will clear at every bundle
console.clear()

// Adding to the Array Methods like pop, push, map, forEach... like this
// this also works because I have added the types in file ---> customTypes.d.ts
Array.prototype.MergeSort = function<T>(compareFn: (a: T, b: T) => boolean, collection?: Array<T>) {
    if (collection === undefined) collection = this
    if (collection.length === 1) return collection

    // this is the middle index of the collection
    // example Math.floor(5/2)      = Math.floor(2.5)    = 2
    // example Math.floor(6/2)      = Math.floor(3)      = 3
    const middleIndx = Math.floor(collection.length / 2)
    // let collection = [1,2,3,4,5]

    // this would be [1,2]
    const collectionFirstHalf = collection.MergeSort(compareFn, collection.slice(0, middleIndx))
    // this would be [3,4,5]
    const collectionSecondHalf = collection.MergeSort(compareFn, collection.slice(middleIndx))

    const sortedArray: Array<T> = []
    // pointers*
    let i = 0
    let j = 0
  
    while (i < collectionFirstHalf.length && j < collectionSecondHalf.length) {
        if (compareFn(collectionFirstHalf[i], collectionSecondHalf[j]))
            sortedArray.push(collectionSecondHalf[j++])
        else
            sortedArray.push(collectionFirstHalf[i++])
    }
    
    while (i < collectionFirstHalf.length) sortedArray.push(collectionFirstHalf[i++])
    while (j < collectionSecondHalf.length) sortedArray.push(collectionSecondHalf[j++])
    return sortedArray
}

// see file titled PeopleSample.ts to see how this data is brought over
const peopleData = PeopleCollection.getSampleData()
// asc order like this...
// const ASCsorted = peopleData.MergeSort((a,b) => a.age > b.age)
const DESCsorted = peopleData.MergeSort((a,b) => a.age < b.age)
// console.log(JSON.stringify(DESCsorted, null, 2))
Logger.Pretty(DESCsorted)