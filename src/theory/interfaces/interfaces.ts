interface Reportable {
    summary():string
}

const oldCivic = {
    name: 'civic',
    year: new Date(),
    broken: true,
    summary():string {
        return `Name: ${this.name}`
    }
}

const drink = {
    name: 'Beer',
    color: 'brown',
    summary():string{
        return `Color: ${this.color}`
    }
}

const printSummary = (item: Reportable):void => {
    console.log(item.summary())
}

printSummary(oldCivic)
printSummary(drink)