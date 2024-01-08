export function add(a:number, b:number): number {
    return a + b
}

type TWeather = {
    date: Date,
    weather: string
}
interface IWeather {
    date: Date,
    weather: string
}

const todayWeather = {
    date: new Date(),
    weather: 'sunny'
}

const getWeather2 = <T extends IWeather>(forecast: T) => {
    console.log(forecast.date)
    console.log(forecast.weather)
}


const getWeather1 = (forecast: {date: Date, weather: string}) => {
    console.log(forecast.date)
    console.log(forecast.weather)
}

const getWeather3 = ({date, weather}: {date: Date, weather: string}) => {
    console.log(date)
    console.log(weather)
}

const getWeather4 = ({date, weather}: IWeather) => {
    console.log(date)
    console.log(weather)
}

getWeather1(todayWeather);
getWeather2(todayWeather);