export type Animal = {
    name: string
}

type Human = {
    firstName: string,
    lastName: string
}

const getDisplayName = <T extends Animal | Human>(item: T): {name: string} => {
   return 'name' in item ? {name: item.name} : {name: item.firstName}   
}

