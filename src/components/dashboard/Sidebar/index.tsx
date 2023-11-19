import React, {ReactElement} from 'react';
import {
    MdAnalytics,
    MdAttachMoney,
    MdDashboard, MdHelpCenter, MdLogout, MdOutlineSettings,
    MdPeople,
    MdShoppingBag,
    MdSupervisedUserCircle,
    MdWork
} from "react-icons/md";
import {IconType} from "react-icons";
import MenuLink from "@components/dashboard/Sidebar/MenuLink";
import Image from "next/image";

export interface IMenuItem {
    id: number,
    title: string,
    path: string,
    icon: ReactElement<IconType, IconType>
}

interface IMenuList {
    id: number,
    title: string,
    items: IMenuItem[]
}

const menulist: IMenuList[] = [
    {
        id: 1,
        title: 'Pages',
        items: [
            {
                id: 1,
                title: 'Dashboard',
                path: '/dashboard',
                icon: <MdDashboard/>
            },
            {
                id: 2,
                title: 'Users',
                path: '/dashboard/users',
                icon: <MdSupervisedUserCircle/>
            },
            {
                id: 3,
                title: 'Products',
                path: '/dashboard/products',
                icon: <MdShoppingBag/>
            },
            {
                id: 4,
                title: 'Transactions',
                path: '/dashboard/Transactions',
                icon: <MdAttachMoney/>
            },
        ]
    },
    {
        id: 2,
        title: "Analytics",
        items: [
            {
                id: 1,
                title: "Revenue",
                path: "/dashboard/revenue",
                icon: <MdWork/>,
            },
            {
                id: 2,
                title: "Reports",
                path: "/dashboard/reports",
                icon: <MdAnalytics/>,
            },
            {
                id: 3,
                title: "Teams",
                path: "/dashboard/teams",
                icon: <MdPeople/>,
            },
        ],
    },
    {
        id: 3,
        title: "User",
        items: [
            {
                id: 1,
                title: "Settings",
                path: "/dashboard/settings",
                icon: <MdOutlineSettings/>,
            },
            {
                id: 2,
                title: "Help",
                path: "/dashboard/help",
                icon: <MdHelpCenter/>,
            },
        ],
    },
]

const Sidebar = () => {
    return (
        <>
            <div className='flex flex-row gap-x-5 items-center mb-5'>
               <Image className='rounded-full object-cover h-full w-full max-w-fit' src='/noavatar.png' height={50} width={50} alt='user_logo' />
                <div className='flex flex-col items-start'>
                    <span className='font-medium'>John Doe</span>
                    <span className='text-xs'>Administrator</span>
                </div>
            </div>
            <ul className=''>
                {menulist.map(listItem => (
                    <li key={listItem.id}>
                        <span className='text-dark-900 dark:text-slate-400 font-medium text-sm mt-2.5 mb-2.5'>{listItem.title}</span>
                        {listItem.items.map(menuItem => (
                            <MenuLink key={menuItem.id} menuItem={menuItem}/>
                        ))}
                    </li>
                ))}
                <li>
                    <button className='flex items-center w-full gap-x-1.5 p-5 mt-1.5 mb-1.5 hover:bg-slate-400 dark:hover:bg-dark-950 rounded-md'>
                        <MdLogout/>
                        Logout
                    </button>
                </li>
            </ul>

        </>
    );
};

export default Sidebar;