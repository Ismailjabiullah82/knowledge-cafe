import React from 'react';
import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <header className='flex justify-between items-center p-4 mx-4 border-b-4'>
            <h1 className='text-4xl font-bold'>React Knowledge Cafe</h1>
            <img src={profile}/>

        </header>
    );
};

export default Header; 