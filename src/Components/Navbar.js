import React, { useEffect, useState } from 'react';

const Navbar = () => {
    const [user, setUser] = useState({})
    useEffect(() => {
        fetch('http://refertest.pythonanywhere.com/user/data', {
            method: 'GET'
        })
            .then(res => res.json())
            .then(data => setUser(data))
    }, [])
    return (
        <div>
            <div class="navbar bg-base-300">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-1 shadow bg-base-100 rounded-box w-52">
                            <li><a>{user?.data?.name}</a></li>

                            <li><a>{user?.data?.college}</a></li>
                        </ul>
                    </div>
                    <a class="btn btn-ghost normal-case text-xl">Job Portal</a>
                </div>
                <div class="navbar-center hidden lg:flex">

                </div>
                <div class="navbar-end">
                    <ul class="menu menu-horizontal p-0 hidden lg:flex gap-2">
                        <li>{user?.data?.name && <a className='btn btn-accent'>{user?.data?.name}</a>}</li>

                        <li><a>{user?.data?.college}</a></li>
                    </ul>
                    <div class="avatar m-2">
                        <div class="w-12 rounded-full">
                            <img src={user?.data?.pictureUrl} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;