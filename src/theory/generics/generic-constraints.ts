export class House {
    print() {
        console.log('I`m a house')
    }
}
class Car {
    print() {
        console.log('I`m a car')
    }
}

interface Printable{
    print():void;
}

//generic
function printHousesOrCars<T extends Printable>(arr: T[]){
    for(let i = 0; i < arr.length; i++){
        arr[i].print()
    }
}

const h = new House()
const c = new Car()
printHousesOrCars<Printable>([h,c])