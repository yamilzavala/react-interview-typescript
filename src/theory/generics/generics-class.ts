//only number
export class ArrayOfNumbers {
    constructor(public collection: number[]){}

    public getData(index: number): number {
        return this.collection[index]
    }
}
//only string
export class ArrayOfStrings {
    constructor(public collection: string[]){}

    public getData(index: number): string {
        return this.collection[index]
    }
}
//generic - any type
export class ArrayOfAnything <T>{
    constructor(public collection: T[]){}

    public getData(index: number): T {
        return this.collection[index]
    }
}

const arr = new ArrayOfAnything<string | number | {a: boolean;}>([1,'2',{a: false}])