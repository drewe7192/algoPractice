import { fibonacci } from './fibonacci'
export enum recursionProblem
{
    all = 0,
    fib = 1,
    other = 2
}

const inRecursionProblem = (HS : Set<recursionProblem>, target: recursionProblem) =>
{
    return HS.has(recursionProblem.all) || HS.has(target)
}    


// fib problem...
/*
const fibProblem = () => {
    const _f = new fibonacci()
    const fib7 = _f.getNumber(7)
    console.log(fib7)
    const fib4 = _f.getNumber(4)
    console.log(fib4)
    _f.showSeq()
}*/

const _problems = [
    {
        key: recursionProblem.fib,
        func: () => {
            debugger
            const _f = new fibonacci()
            const fib7 = _f.getNumber(7)
            console.log(fib7)
            const fib4 = _f.getNumber(4)
            console.log(fib4)
            _f.showSeq()
        }
    }
]

export const recursionProblemsSet = (recursionProblems: Array<recursionProblem>) => {
    const problemSet = new Set(recursionProblems);
    _problems.forEach(o => inRecursionProblem(problemSet, o.key) && o.func())
}