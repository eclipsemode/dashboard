'use client'
import React from 'react';
import Pagination from "@ui/Pagination";
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import {IFetchUsers} from "@app/dashboard/users/page";

interface IProps extends Omit<IFetchUsers, 'users'>{
}

const PaginationUsers = ({usersAmount, take}: IProps) => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const {replace} = useRouter();
    const previousButtonVisibility = Number(searchParams.get('page')) < 2;
    const nextButtonVisibility = ((Number(searchParams.get('page')) || 1) * take) >= usersAmount;

    const handlePrevButton = () => {
        const params = new URLSearchParams(searchParams);
        let currentPage = params.get('page') ? Number(params.get('page')) : 1;
        params.set('page', String(--currentPage));
        replace(`${pathname}?${params}`);

    }
    const handleNextButton = () => {
        const params = new URLSearchParams(searchParams);
        let currentPage = params.get('page') ? Number(params.get('page')) : 1;
        params.set('page', String(++currentPage));
        replace(`${pathname}?${params}`);
    }

    return (
        <Pagination previousButtonDisabled={previousButtonVisibility} nextButtonDisabled={nextButtonVisibility}
                    onPreviousClick={handlePrevButton}
                    onNextClick={handleNextButton}/>
    );
};

export default PaginationUsers;