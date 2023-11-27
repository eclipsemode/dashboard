'use client'
import React, {ChangeEvent, useState} from 'react';
import Search from "@ui/Search";
import Link from "next/link";
import UserItem from "@components/dashboard/users/UserItem/page";
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import {useDebouncedCallback} from "use-debounce";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import PaginationUsers from "@components/dashboard/users/PaginationUsers";

export interface IUser {
    id: number,
    username: string,
    image?: string,
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
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const [loading, setLoading] = useState<boolean>(true);
    const {replace} = useRouter();

    const handleInput = useDebouncedCallback((e: ChangeEvent<HTMLInputElement>) => {
        setLoading(true);
        const params = new URLSearchParams(searchParams);
        params.set('page', '1');
        if (e.target.value) {
            params.set('query', e.target.value);
        } else {
            params.delete('query');
        }

        replace(`${pathname}?${params}`);
    }, 500)

    const disableLoadingWithDebounce = useDebouncedCallback(() => {
        setLoading(false)
    }, 300)

    React.useEffect(() => {
        disableLoadingWithDebounce();
    }, [users])

    const renderSkeleton = () => (
        <tr>
            <td colSpan={6}><Skeleton count={6} height={42}
                                      className='opacity-20 dark:opacity-40 [&:not(:first-child)]:mt-2.5'/></td>
        </tr>
    )

    return (
        <div className='flex flex-col gap-y-2.5 custom-container mt-5'>
            <div className='flex flex-row justify-between items-center'>
                <Search inputEvent={handleInput} placeholder='Search for a products'/>
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
                    loading
                        ? renderSkeleton()
                        : users.map(user => <UserItem key={user.id} isActive={user.isActive} createdAt={user.createdAt}
                                                      email={user.email} id={user.id} username={user.username}
                                                      role={user.role}/>)
                }
                </tbody>
                <tfoot>
                <tr>
                    <td colSpan={6}><PaginationUsers/></td>
                </tr>
                </tfoot>
            </table>
        </div>
    );
};

export default Users;