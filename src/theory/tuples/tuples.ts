export const tuple: [string, number, boolean] = ['hi', 2, false]
//tuple[1] = 'bye' => BAD
tuple[2] = true; //Good

type TDrink = [string, boolean, number]

const pepsi: TDrink = ['brown', true, 400]