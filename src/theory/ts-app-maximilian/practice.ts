
//union types
type TUnion = string | number;
export let unionTypes : TUnion = 3;
unionTypes = 'lala'

//objects
type TAddress = {
    code: number,
    street: string
}

type TUser = {
    name: string,
    age: number,
    email: string,
    address: TAddress
}

const user: TUser = {
    name: 'yamil',
    age: 38,
    email: 'test@gmail.com',
    address: {
        code: 300,
        street: 'san nicolas'
    }
}

//arrays
const hobbies: Array<string>= ['run','swim']

//functions
type TFC =  (a:number, b:number) => number;

function add(a: number, b:number):number{
    return a + b
}

function calculate(a: number, b: number, cf: TFC){
    cf(a,b)
}

calculate(1,2,add)

//interfaces
interface Credentials {
    user: string,
    password: string
}

interface Credentials {
    token: string;
}

const cred: Credentials = {
    user: 'test',
    password: '123',
    token: 'abn'
}

class Auth implements Credentials {
    user: string = '';
    password: string = '';
    token: string = ''
}

function authFc(cred: Credentials){
}

authFc(cred)


interface I1 {
    name: string
}
interface I2 {
    age: number
}
interface I3 extends I1, I2 {
    address: string
}
let i:I3 = {
    address: '',
    age: 1,
    name: ''
}


//types
type TAdmin = {
    user: string
}
type TAppAmin = {
    permissions: string[]
}
type TAdminMergin = TAdmin & TAppAmin;

let admin: TAdminMergin = {
    permissions: [''],
    user: ''
}

//literal types
type TLiteral = 'admin' | 'manager' | 'employee'
let userL: TLiteral = 'admin';

//Generics
type GType <T,G> = {
    storage: T
    role: G
}
let g: GType<string, number> = {
    storage: 'test',
    role: 1
}
let g2: GType<string[], string> = {
    storage: ['test'],
    role: 'admin'
}

function merge<T,G>(a:T, b:G): T & G{
    return {
        ...a,
        ...b
    }
}

const newUser = merge({name: 'juan'}, {age: 45})