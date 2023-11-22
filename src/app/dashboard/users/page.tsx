import React from 'react';
import Users, {IUser} from "@components/dashboard/users";
import prisma from "@prisma/prisma";

const fetchUsers = async (): Promise<IUser[]> => {
    try {
        const users = await prisma.user.findMany();
        return users;
    } catch (e) {
        throw new Error('Fetch users error!')
    }
}

const Page = async () => {
    const users = await fetchUsers();
    return <Users users={users}/>
};

export default Page;