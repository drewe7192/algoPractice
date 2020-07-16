const isNumberOrString = (passedValue: any) => typeof passedValue === 'string' || typeof passedValue === 'number'


Array.prototype.MergeSort = function(isAsc: boolean = true, collection?: Array<ISortable>)
{
    if(collection === undefined) {
        collection = this
    }

    if (collection.length === 1) return collection
    const middleIndx = Math.floor(collection.length / 2);
    const firstHalf = collection.MergeSort(isAsc, collection.slice(0, middleIndx));
    const secondHalf = collection.MergeSort(isAsc, collection.slice(middleIndx));
    const sortedArray: Array<ISortable> = [];
  
    let i = 0;
    let j = 0;
  
    while (i < firstHalf.length && j < secondHalf.length) {
        let check = isAsc 
            ? firstHalf[i].value < secondHalf[j].value 
            : firstHalf[i].value > secondHalf[j].value 

        if (check) {
            sortedArray.push(firstHalf[i++]);
        } else {
            sortedArray.push(secondHalf[j++]);
        }
    }
    while (i < firstHalf.length) sortedArray.push(firstHalf[i++]);
    while (j < secondHalf.length) sortedArray.push(secondHalf[j++]);
    return sortedArray;
}


class CollectionSort
{
    public static toISortable<T, K extends keyof T>(array: Array<T>, key: K) {
        if(!Array.isArray(array)) {
            throw "Can not perform operation in this"
        }
        
        return array.map(element => {
            let value = element[key]
            if(!isNumberOrString(value)) {
                console.log(`this is the VALUE ----> ${value}`)
                throw "Value must be number or string"
            }

            return {
                ...element,
                value
            }
        })
    }

}

const SamplePeople: Array<IPerson> = [
    {
        name: {
            first: 'Drew',
            last: 'Sutherland'
        },
        age: 26,
        profession: 'Developer'
    },
    {
        name: {
            first: 'Felipe',
            last: 'Ferreira',
            middle: "Dutra"
        },
        age: 31,
        profession: 'Programmer'
    },
    {
        name: {
            first: 'Rebecca',
            last: 'Rose',
            middle: "Amos"
        },
        age: 31,
        profession: 'Nurse Practicioner'
    },
    {
        name: {
            first: 'Sierra',
            last: 'Applewhite',
        },
        age: 25,
        profession: 'Web Developer'
    }
]

const PeopleSortable = CollectionSort.toISortable(SamplePeople, 'age') as Array<ISortable>
const _sorted = PeopleSortable.MergeSort(false)
console.log(_sorted)