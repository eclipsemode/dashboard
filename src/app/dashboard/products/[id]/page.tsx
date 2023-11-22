import React from 'react';
import LogoBlockProducts from "@components/dashboard/products/view/LogoBlockProduct";
import FormBlockProducts from "@components/dashboard/products/view/FormBlockProduct";

const Page = () => {
    return (
        <div className='flex flex-wrap gap-5 mt-5'>
            <LogoBlockProducts title='iPhone'/>
            <FormBlockProducts title='iPhone'/>
        </div>
    );
};

export default Page;