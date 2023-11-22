import React from 'react';
import LogoBlockUser from "@components/dashboard/users/view/LogoBlockUser";
import FormBlockUser from "@components/dashboard/users/view/FormBlockUser";

const Page = () => {
    return (
        <div className='flex flex-wrap gap-5 mt-5'>
            <LogoBlockUser name='John Doe'/>
            <FormBlockUser name='John Doe'/>
        </div>
    );
};

export default Page;