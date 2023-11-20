import React from 'react';
import Sidebar from "@components/dashboard/Sidebar";
import Navbar from "@components/dashboard/Navbar";

interface IProps {
    children: React.ReactNode
}

const Layout = ({children}: IProps) => {
    return (
        <div className='flex'>
            <aside className='flex-1 min-w-fit min-h-screen bg-slate-300 dark:bg-dark-900 p-5 sticky'>
                <Sidebar/>
            </aside>
            <section className='flex-4 p-5'>
                <Navbar/>
                {children}
            </section>

        </div>
    );
};

export default Layout;