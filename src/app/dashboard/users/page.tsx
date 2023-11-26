import React from 'react';
import Users, {IUser} from "@components/dashboard/users";

const fetchUsers = async (query: string) => {
    try {
        const users = await fetch(`${process.env.LOCAL_PATH}/api/users${query ? '?query=' + query : ''}`);
        return users.json();
    } catch (e) {
        console.error(e);
    }
}

interface ISearchParamsWithQuery {
    searchParams: {
        query: string
    }
}

const Page = async ({searchParams}: ISearchParamsWithQuery) => {
    const users = await fetchUsers(searchParams.query) as unknown as IUser[];
    return <Users users={users}/>
};

export default Page;