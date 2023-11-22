'use client'
import React from 'react';
import Search from "@ui/Search";
import Link from "next/link";
import UserItem from "@components/dashboard/users/UserItem/page";
import Pagination from "@components/dashboard/Pagination";

export interface IUser {
    id: number,
    username: string,
    email: string,
    password?: string,
    phone?: string,
    role: string,
    createdAt: Date,
    isActive: boolean,
    address?: string

}

interface IProps {
    users: IUser[]
}

const Users = ({users}: IProps) => {
    return (
        <div className='flex flex-col gap-y-2.5 custom-container mt-5'>
            <div className='flex flex-row justify-between items-center'>
                <Search placeholder='Search for a products'/>
                <Link href='/dashboard/users/add'>
                    <button className='text-sm bg-slate-400 dark:bg-indigo-900 px-2.5 py-1.5 rounded-md w-fit'>Add New
                    </button>
                </Link>
            </div>
            <table className='w-full border-separate border-spacing-3'>
                <thead>
                <tr>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Status</td>
                    <td>Created At</td>
                    <td>Role</td>
                    <td>Action</td>
                </tr>
                </thead>
                <tbody>
                {
                    users.map(user => <UserItem key={user.id} isActive={user.isActive} createdAt={user.createdAt}
                                                   email={user.email} id={user.id} username={user.username}
                                                   role={user.role}/>)
                }
                </tbody>
                <tfoot>
                <tr><td colSpan={6}><Pagination previousButtonDisabled={true} nextButtonDisabled={false} onPreviousClick={() => console.log('prev')} onNextClick={() => console.log('next')}/></td></tr>
                </tfoot>
            </table>
        </div>
    );
};

export default Users;