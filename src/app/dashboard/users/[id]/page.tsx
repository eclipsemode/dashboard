import React from 'react';
import LogoBlock from "@components/dashboard/Users/LogoBlock";
import FormBlock from "@components/dashboard/Users/FormBlock";

const Page = () => {
    return (
        <div className='flex flex-wrap gap-5 mt-5'>
            <LogoBlock name='John Doe'/>
            <FormBlock name='John Doe'/>
        </div>
    );
};

export default Page;