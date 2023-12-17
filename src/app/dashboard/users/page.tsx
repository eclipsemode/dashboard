import React from 'react';
import Users, {IUser} from "@components/dashboard/users";
import {revalidatePath} from "next/cache";

const fetchUsers = async (query: string, page: string) => {
    try {
        const users = await fetch(`${process.env.LOCAL_PATH}/api/users?page=${page ? page : 1}${query ? '&query=' + query : ''}`, {cache: 'no-store'});
        return users.json();
    } catch (e) {
        console.error(e);
    }
}

interface ISearchParamsWithQuery {
    searchParams: {
        query: string,
        page: string
    }
}

export interface IFetchUsers {
    users: IUser[],
    usersAmount: number,
    take: number
}

const Page = async ({searchParams}: ISearchParamsWithQuery) => {
    const {users, usersAmount, take} = await fetchUsers(searchParams.query, searchParams.page) as unknown as IFetchUsers;
    // revalidatePath('/dashboard/users');
    return <Users users={users} usersAmount={usersAmount} take={take} />
};

export default Page;