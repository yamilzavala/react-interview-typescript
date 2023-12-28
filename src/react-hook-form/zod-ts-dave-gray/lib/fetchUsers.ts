import {z} from 'zod'
import { UserSchemaWithGeo } from '../models/User'

const UsersResults = z.array(UserSchemaWithGeo)

type UserArray = z.infer<typeof UsersResults>

export default async function fetchUsers(): Promise<UserArray | undefined> {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users')

        if(!res.ok) return undefined;
        
        const usersJson: UserArray = await res.json();

        const parsedData = UsersResults.parse(usersJson);

        console.log(parsedData)

        return parsedData;

    } catch (error) {
        if(error instanceof Error) console.log(error.stack)
    }
} 