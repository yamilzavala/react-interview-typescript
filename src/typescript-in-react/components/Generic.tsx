import React from 'react';
import { type colors } from '../lib/types';

type TBtnColors = {
    color: colors
}

const convertToArray = <T,>(value: T): T[] => {
    return [value]
}

function convertToArrayFn <T>(value: T): T[] {
    return [value]
}

convertToArray(5)
convertToArray('hi')

function getIndexInArr<T>(value:T, arr:T[]): number {
    return arr.indexOf(value)
}

getIndexInArr('b',['a','b','c'])
getIndexInArr(10,[1,3,4])

function createPairArr <T, G>(v1: T , v2: G): [T, G] {
    return [v1,v2]
}

createPairArr(2,10)
createPairArr('hi',false)


type TGenericProps<T> = {
    countValue: T,
    historyValues: T
}

const Generic = <T,>({countValue, historyValues}: TGenericProps<T>) => {
    return (
        <div>
            <button>click me</button>
        </div>
    );
};

export default Generic;