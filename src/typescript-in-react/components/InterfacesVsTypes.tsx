import React from 'react';
//#### types ####
type TUserProps = {
    name: string,
    age: number,
    createdAt: Date
}

type TAdmin = TUserProps & {
    role: string
}

type TAddress = string | string[] | number;

type TGuest = Omit<TUserProps, 'name' | 'age'>;

type TAddressTuple = [number, string];

const project = {
    title: 'Project name',
    specification: {
        areaSize: 4,
        rooms: 15   
    }
}

type TProject = typeof project['specification'];

//#### interfaces ####
interface IUserProps {
    name: string,
    age: number,
    createdAt: Date
}

interface IAdmin extends IUserProps {
    role: string
}

interface IAddress {
    address: string
}

interface IGuest extends Omit<IUserProps, 'name' | 'age'> {}

interface IAddressTuple extends Array<number | string> {
    0: number;
    1: string;
}

const InterfacesVsTypes = ({name, age}: TUserProps) => {
    return (
        <div>
            
        </div>
    );
};

export default InterfacesVsTypes;