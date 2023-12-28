import { z } from "zod"

//You can pass types to another types
export type TMyGenericType<T> = {
    data: T
}

const n: TMyGenericType<number> = {data: 1}
const s: TMyGenericType<string> = {data: 'hi'}



//create functions with helpers
const fetchData = <Tdata>(url: string): Promise<Tdata> => {
    return fetch(url).then((res) => res.json())
}

fetchData<{name: string, age: number}>('/api/endpoint')
    .then(data => console.log(data))




//set and map
const set = new Set<{name: string, age: number}>();
set.add({name: 'yamil', age: 38})




//Infer
const addIdToObj = <T>(obj: T) => {
    return {
        ...obj,
        id: 1
    }
}
const o = {name: 'juan', age: 40}
console.log(addIdToObj(o).id)



//Awaited - ReturnType (Only functions)
type GetPromiseReturnType <T extends (...args: any) => any> = Awaited<ReturnType<T>>;
type Result = GetPromiseReturnType<() => Promise<{firstName: 'yamil', age: 38}>>


//contrain generic
const getKeyWithHighestValue = <T extends Record<string, number>>(obj:T):{key: keyof T, value: number} => {
    const keys = Object.keys(obj) as Array<keyof T>;

    let highestKey: keyof T = keys[0];
    let highestValue = obj[highestKey];

    for(const key of keys) {
        if(obj[key] > highestValue) {
            highestKey = key;
            highestValue = obj[key]
        }
    }

    return {
        key: highestKey,
        value: highestValue
    }
}

const r = getKeyWithHighestValue({a:1, b:2, c:3, d:4})
const key = r.key;
const value = r.value;



//overwrite the generic
const typeObjectKeys = <T extends {}>(obj: T) => {
    return Object.keys(obj) as Array<keyof T>
}

const re = typeObjectKeys({name: 'yam', value: 1})



//get value
const getValue = <T, K extends keyof T>(o:T, key: K) => {
    return o[key]
}
const v = getValue({name: 'josue', age: 3}, 'age')


//default value
const createSet = <T = string>() => {
    return new Set<T>()
}
const numberSet = createSet<number>()
const stringSet = createSet<string>()
const otherSet = createSet()


//zod - fetch
const fetchSafeDataZod = <T>(url: string): Promise<T> => {
    return fetch(url).then((data) => data.json())
}
const d = fetchSafeDataZod<{name: string, age: number}>('/api/endpoint')
    .then(data => console.log(data))

//zod - fetch - with schema
const fetchZodSafeDataSchema = <T>(url: string, schema: z.Schema): Promise<T> => {
    return fetch(url)
        .then((data) => data.json())
        .then((res) => schema.parse(res))
}
const ds = fetchZodSafeDataSchema<{name: string, age: number}>(
    '/api/endpoint', 
    z.object({
        name: z.string(), 
        age: z.number().positive()
    }))
.then(data => console.log(data))
