'use client'
import React from 'react';
import {usePathname} from "next/navigation";
import {MdNotifications, MdOutlineChat, MdPublic, MdSearch} from "react-icons/md";

const Navbar = () => {
    const pathname = usePathname();
    return (
        <section className='bg-slate-300 dark:bg-dark-900 flex justify-between items-center p-5 rounded-md'>
            <h1 className='font-medium dark:text-slate-400 capitalize'>{pathname.split('/').at(-1)}</h1>
            <div className='flex gap-x-5 items-center'>
                <div className='flex items-center bg-slate-100 dark:bg-gray-700 pl-2.5 pr-2.5 pt-2 pb-2 gap-x-2.5 rounded-lg'>
                    <MdSearch/>
                    <input type="text" placeholder='Search...' className='bg-transparent text-xs'/>
                </div>
                <div className='flex gap-5 items-center'>
                    <MdOutlineChat size={20}/>
                    <MdNotifications size={20}/>
                    <MdPublic size={20}/>
                </div>
            </div>
        </section>
    );
};

export default Navbar;