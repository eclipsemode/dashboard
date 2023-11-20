'use client'
import React from 'react';
import {usePathname} from "next/navigation";
import {MdNotifications, MdOutlineChat, MdPublic, MdSearch} from "react-icons/md";
import ToggleThemeButton from "../../../ui/ToggleThemeButton";
import Search from "@ui/Search";

const Navbar = () => {
    const pathname = usePathname();
    return (
        <section className='bg-slate-300 dark:bg-dark-900 flex justify-between items-center p-5 rounded-md'>
            <h1 className='font-medium text-slate-500 dark:text-slate-400 capitalize'>{pathname.split('/').at(-1)}</h1>
            <div className='flex gap-x-5 items-center'>
                <Search placeholder='Search...'/>
                <div className='flex gap-5 items-center'>
                    <MdOutlineChat size={20}/>
                    <MdNotifications size={20}/>
                    <MdPublic size={20}/>
                    <ToggleThemeButton size={20}/>
                </div>
            </div>
        </section>
    );
};

export default Navbar;