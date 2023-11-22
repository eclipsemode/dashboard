import React from 'react';

interface IProps {
    name: string
}

const FormBlock = ({name}: IProps) => {
    return (
        <div className='flex-1 flex flex-col gap-y-5 custom-container'>
            <label className='flex flex-col gap-y-2.5' htmlFor="formBlock_name">
                Name
                <input className='custom-input' id='formBlock_name' name='username' placeholder='John Doe' type="text"
                       required defaultValue={name}/>
            </label>

            <label className='flex flex-col gap-y-2.5' htmlFor="formBlock_email">
                Email
                <input className='custom-input' id='formBlock_email' name='email' placeholder='john@gmail.com'
                       type="email" required/>
            </label>

            <label className='flex flex-col gap-y-2.5' htmlFor="formBlock_password">
                Password
                <input className='custom-input' id='formBlock_password' name='password' placeholder='Password'
                       type="password"/>
            </label>

            <label className='flex flex-col gap-y-2.5' htmlFor="formBlock_phone">
                Phone
                <input className='custom-input' id='formBlock_phone' name='phone' placeholder='+7 (918) 000-00-00'
                       type="tel"/>
            </label>

            <label className='flex flex-col gap-y-2.5' htmlFor="formBlock_address">
                Address
                <textarea className='custom-input' name="address" id="formBlock_address" placeholder='Address' cols={30}
                          rows={3}/>
            </label>


            <label className='flex flex-col gap-y-2.5' htmlFor="formBlock_role">
                Role
                <select className='custom-input' name="role" id="formBlock_role" defaultValue='default'>
                    <option value="default" disabled>Your role</option>
                    <option value="admin">Administrator</option>
                    <option value="user">User</option>
                </select>
            </label>

            <label className='flex flex-col gap-y-2.5' htmlFor="formBlock_status">
                Status
                <select className='custom-input' name="status" id="formBlock_status">
                    <option value="no">No</option>
                    <option value="yes">Yes</option>
                </select>
            </label>
            <button className='custom-button-apply' type='submit'>Update
            </button>
        </div>
    );
};

export default FormBlock;