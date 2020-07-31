import { fibonacci } from "./fibonacci";
import { TwoNumberSum } from "./algoExpert/TwoNumberSum";
export enum Problems {
  all = 0,
  fib = 1,
  TwoNumberSum = 2,
}

const inRecursionProblem = (HS: Set<Problems>, target: Problems) =>
  HS.has(Problems.all) || HS.has(target);

const _problems = [
  {
    key: Problems.fib,
    func: () => {
      const _f = new fibonacci();
      const fib7 = _f.getNumber(7);
      console.log(fib7);
      const fib4 = _f.getNumber(4);
      console.log(fib4);
      _f.showSeq();
    },
  },
  {
    key: Problems.TwoNumberSum,
    func: () => TwoNumberSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 12),
  },
];

export const problemsSet = (recursionProblems: Array<Problems>) => {
  _problems.forEach(
    (o) => inRecursionProblem(new Set(recursionProblems), o.key) && o.func()
  );
};
