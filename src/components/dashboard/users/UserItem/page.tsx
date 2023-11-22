import React from 'react';
import Image from "next/image";
import {IUser} from "@components/dashboard/users";
import {useRouter} from "next/navigation";

const defaultImagePath = '/noavatar.png';

const UserItem = ({id, image, createdAt, role, isActive, email, username}: IUser) => {
    const router = useRouter();
    return (
        <tr>
            <td className='flex flex-row gap-x-1.5 items-center'>
                <Image className='rounded-full' src={image || defaultImagePath} alt='logo' width={40} height={40}/>
                {username}
            </td>
            <td className='max-w-xs whitespace-nowrap overflow-hidden overflow-ellipsis'>{email}</td>
            <td>{isActive ? 'active' : 'not activated'}</td>
            <td>{createdAt.toDateString()}</td>
            <td>{role}</td>
            <td>
                <div className='flex items-center gap-x-1.5'>
                    <button onClick={() => router.push(`/dashboard/users/${id}`)} className='text-xs bg-emerald-700 px-2.5 py-1 rounded-md w-fit'>View</button>
                    <button className='text-xs bg-red-700 px-2.5 py-1 rounded-md w-fit' onClick={() => console.log(id)}>Delete</button>
                </div>
            </td>
        </tr>
    );
};

export default UserItem;