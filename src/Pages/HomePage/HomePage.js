import React from 'react';
import './HomePage.scss';
import MenuItem from '../../Components/MenuItem/MenuItem';

const HomePage = () => (
    <div className='homepage'>
        <div className='directory-menu'>
           <MenuItem title="Hats" />
           <MenuItem title="Hats" />
           <MenuItem title="Hats" />
           <MenuItem title="Hats" />
           <MenuItem title="Hats" />
        </div>
    </div>
)

export default HomePage;