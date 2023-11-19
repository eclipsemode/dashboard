'use client'
import React from 'react';
import {ThemeProvider} from "next-themes";

interface IProps {
    children: React.ReactNode
}

const Providers = ({children}: IProps) => {
    return (
        <ThemeProvider attribute='class'>
            {children}
        </ThemeProvider>
    );
};

export default Providers;