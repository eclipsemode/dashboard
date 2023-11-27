'use client'
import React from 'react';
import {ThemeProvider} from "next-themes";
import {SkeletonTheme} from "react-loading-skeleton";

interface IProps {
    children: React.ReactNode
}

const Providers = ({children}: IProps) => {
    return (
        <ThemeProvider attribute='class'>
            <SkeletonTheme baseColor="#202020" highlightColor="#444">
                {children}
            </SkeletonTheme>
        </ThemeProvider>
    );
};

export default Providers;