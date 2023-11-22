import React from 'react';
import Users, {IUser} from "@components/dashboard/users";
import prisma from "@prisma/prisma";

const fetchUsers = async (): Promise<IUser[]> => {
    const response = await prisma.user.findMany({

    });
    if (response) {
        return response;
    }
    return [];
}

const Page = async () => {
    const res = await fetchUsers();
    return <Users users={res}/>
};

export default Page;