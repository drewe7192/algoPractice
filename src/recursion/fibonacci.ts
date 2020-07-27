export class fibonacci {

    constructor() {
        this._memory = {
            0: 0,
            1: 1
        }

        this._seq = [0,1]

    }

    private isFloat = (num: number) => {
        return num % 1 !== 0
    }

    private _seq: Array<number>
    public _memory: {[indx: number]: number}



    public getNumber(indx: number): number {
        if(indx < 0) throw "number cannot be less than zero"
        if(this.isFloat(indx)) throw "number cannot be a floating number"
        // if(this._passedNumbers.has(indx)) return this._memory[indx]
        if(typeof this._memory[indx] === 'number') return this._memory[indx]
        else {
            const _newValue = this.getNumber(indx - 2) + this.getNumber(indx - 1)
            this._memory[indx] = _newValue
            this._seq[indx] = _newValue
            return _newValue
        }
    }

    public showSeq() {
        console.log(this._seq)
    }

}