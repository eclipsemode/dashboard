import React from 'react';
import Rightbar from "@components/dashboard/Rightbar";
import Transactions from "@components/dashboard/Transactions";
import Chart from "@components/dashboard/Chart";
import Cards from "@components/dashboard/Cards";

const Page = () => {
    return (
        <section className='flex flex-row gap-x-5 mt-5'>
            <div className='flex flex-col gap-y-5 flex-3'>
                <Cards/>
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