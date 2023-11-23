import React from 'react';
import Users, {IUser} from "@components/dashboard/users";

const fetchUsers = async () => {
    try {
        const users = await fetch(`${process.env.LOCAL_PATH}/api/users`);
        return users.json();
    } catch (e) {
        console.error(e);
    }
}

const Page = async () => {
    const users = await fetchUsers() as unknown as IUser[];
    return <Users users={users}/>
};

export default Page;