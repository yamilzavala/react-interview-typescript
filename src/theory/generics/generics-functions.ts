//string
export function printString(arr: string []): void{
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i])
    }
}

//numbers
function printNumbers(arr: number []): void{
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i])
    }
}

//generic
function printAnything<T>(arr: T []): void{
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i])
    }
}

printAnything<string>(['1','2','hola'])
printAnything<string | number | boolean>([1,'2',false])

