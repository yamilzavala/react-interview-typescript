type TCoords = {
    lat: number,
    lng: number
}

type TProfile = {
    name: string,
    age: number,
    coords: TCoords,
    setAge(age:number):void
}

export const profile = {
    name: 'alex',
    age: 38,
    coords: {
        lat: 0,
        lng: 20
    },
    setAge(age: number): void{
        this.age = age
    }
}

const {name}: {name:string} = profile;
const {age}:{age: number} = profile;
const {coords: {lat, lng}}:{coords: TCoords} = profile;
const {setAge}: {setAge: (age: number) => void} = profile;