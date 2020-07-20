// The Purpose of this class is to add functions to existing JS Objects
// For Each new Object we will create a function - Example in Array, Console
// then we call the function inside the create method
class prototypesBootstrap
{
    private static protoIsDefined(protoName: string, fromObject: string, proto?: Function):void
    {
        /*
        if(typeof proto === 'function')
            throw 'the following has already been defined.'
        else    
        */
        console.dir(`now defining ${protoName} from ${fromObject} Object`)
    }

    private static _ArrayPrototypes():void
    {
        // Adding to the Array Methods like pop, push, map, forEach... like this
        // this also works because I have added the types in file ---> customTypes.d.ts
        /**
        * Will sort collection with predicate passed in.
        */
        this.protoIsDefined('mergeSort', 'Array', Array.prototype.mergeSort)
        Array.prototype.mergeSort = function<T>(compareFn: (a: T, b: T) => boolean, collection?: Array<T>) {
            if (collection === undefined) collection = this
            if (collection.length === 1) return collection

            // this is the middle index of the collection
            // example Math.floor(5/2)      = Math.floor(2.5)    = 2
            // example Math.floor(6/2)      = Math.floor(3)      = 3
            const middleIndx = Math.floor(collection.length / 2)
            // let collection = [1,2,3,4,5]

            // this would be [1,2]
            const collectionFirstHalf = collection.mergeSort(compareFn, collection.slice(0, middleIndx))
            // this would be [3,4,5]
            const collectionSecondHalf = collection.mergeSort(compareFn, collection.slice(middleIndx))

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
    }

    private static _ConsolePrototypes():void
    {
        this.protoIsDefined('prettyLog', 'console', console.prettyLog)
        console.prettyLog = function<T>(fancyObject: T): void {
            console.log(JSON.stringify(fancyObject, null, 2))
        }
    }

    public static setUp():void
    {
        this._ArrayPrototypes()
        this._ConsolePrototypes()   
    }
}

prototypesBootstrap.setUp()