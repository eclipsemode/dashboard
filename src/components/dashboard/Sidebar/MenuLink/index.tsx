'use client'

import React from 'react';
import {IMenuItem} from "@components/dashboard/Sidebar";
import Link from "next/link";
import {usePathname} from "next/navigation";

interface IProps {
    menuItem: IMenuItem
}

const MenuLink = ({menuItem}: IProps) => {
    const pathname = usePathname();
    return (
        <Link href={menuItem.path} className={`flex items-center gap-x-2.5 p-5 mt-1.5 mb-1.5 hover:bg-slate-400 dark:hover:bg-dark-950 rounded-md ${pathname === menuItem.path && 'bg-slate-200 dark:bg-gray-700'}`}>
            {menuItem.icon}
            {menuItem.title}
        </Link>
    );
};

export default MenuLink;