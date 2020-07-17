export abstract class Logger
{
    static Pretty<T>(fancyObject: T): void
    {
        console.log(JSON.stringify(fancyObject, null, 2))
    }
}