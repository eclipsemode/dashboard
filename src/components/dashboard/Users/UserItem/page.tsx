import React from 'react';
import Image from "next/image";
import {IUser} from "@components/dashboard/Users";
import Link from "next/link";

const UserItem = ({image, id, created, role, status, email, name}: IUser) => {
    return (
        <tr>
            <td className='flex flex-row gap-x-1.5 items-center'>
                <Image className='rounded-full' src={image} alt='logo' width={40} height={40}/>
                {name}
            </td>
            <td className='max-w-xs whitespace-nowrap overflow-hidden overflow-ellipsis'>{email}</td>
            <td>{status}</td>
            <td>{created.toDateString()}</td>
            <td>{role}</td>
            <td>
                <div className='flex gap-x-1.5'>
                    <Link href={`/dashboard/users/${id}`}>
                    <button className='text-xs bg-emerald-700 px-2.5 py-1 rounded-md w-fit'>View</button>
                    </Link>
                    <button className='text-xs bg-red-700 px-2.5 py-1 rounded-md w-fit'
                            onClick={() => console.log(id)}>Delete
                    </button>
                </div>
            </td>
        </tr>
    );
};

export default UserItem;