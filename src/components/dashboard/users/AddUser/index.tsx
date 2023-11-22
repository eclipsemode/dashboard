import React from 'react';

const AddUser = () => {
    return (
        <div className='custom-container mt-5'>
            <form action="" className='flex flex-wrap justify-between gap-y-5'>
                <input type="text" placeholder='Username' name='username' required className='w-[calc(50%-20px)] p-5 rounded-md bg-slate-100 dark:bg-dark-950'/>
                <input type="email" placeholder='Email' name='email' required className='w-[calc(50%-20px)] p-5 rounded-md bg-slate-100 dark:bg-dark-950'/>
                <input type="password" placeholder='Password' name='password' required className='w-[calc(50%-20px)] p-5 rounded-md bg-slate-100 dark:bg-dark-950'/>
                <input type="tel" placeholder='Phone' name='phone' className='w-[calc(50%-20px)] p-5 rounded-md bg-slate-100 dark:bg-dark-950'/>
                <select name="role" id="role" defaultValue='general' required className='w-[calc(50%-20px)] p-5 rounded-md bg-slate-100 dark:bg-dark-950'>
                    <option value="general" disabled>Role</option>
                    <option value="computer">Admin</option>
                    <option value="phone">User</option>
                </select>
                <select name="status" id="status" defaultValue='general' className='w-[calc(50%-20px)] p-5 rounded-md bg-slate-100 dark:bg-dark-950'>
                    <option value="general" disabled>Is Active?</option>
                    <option value="computer">Yes</option>
                    <option value="phone">No</option>
                </select>
                <textarea name="address" id="address" cols={30} rows={10} placeholder='Address' className='w-full p-5 rounded-md bg-slate-100 dark:bg-dark-950'></textarea>
                <button className='custom-button-apply' type='submit'>Submit</button>
            </form>
        </div>
    );
};

export default AddUser;