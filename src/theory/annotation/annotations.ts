//primitives
let nothingMush: null = null;
let nothing: undefined = undefined;
let now: Date = new Date();
let truths: boolean[] = [false, true, false]

//class
class Cars {

} 
let car: Cars = new Cars()

//object
let obj: {x:number, y:number} = {
    x: 10,
    y: 10
}

//functions
const logNumber: (i:number) => void = (i:number) => console.log(i)

//when to use annotations
//function that return the any type
const json = '{"x":10, "y":20}'
const coordinates: {x:number, y:number} = JSON.parse(json) //{x:10, y:20}

//when to use annotations
//when we declare a variable in one line then inicialize it later
let colors: string[] = ['red','green','blue']
let foundWord; //fix => let foundWord = false;
for(let i = 0; i < colors.length; i++) {
    if(colors[i] === 'green') foundWord = true;
}

//variable whose type cannot be inferred correctly
let numbers: number[] = [1,2,3,4,5]
let numbersAboveZero: boolean | number = false;
for(let i = 0; i < numbers.length; i++) {
    if(numbers[i] > 0) numbersAboveZero = numbers[i]
}


