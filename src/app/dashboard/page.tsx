import React from 'react';
import Card from "@components/dashboard/Card";
import Rightbar from "@components/dashboard/Rightbar";
import Transactions from "@components/dashboard/Transactions";
import Chart from "@components/dashboard/Chart";

const Page = () => {
    return (
        <section className='flex flex-row gap-x-5 mt-5'>
            <div className='flex flex-col gap-y-5 flex-3'>
                <div className='flex justify-between gap-x-5'>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
                <Transactions/>
                <Chart/>
            </div>
            <div className='flex-1'>
                <Rightbar/>
            </div>
        </section>
    );
};

export default Page;