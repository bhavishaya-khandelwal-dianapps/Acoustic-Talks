import React, { useState } from 'react';
import "../styles/header.css";
import { HiMenu } from "react-icons/hi";
import { MenuItem } from './MenuItem';


export const Header = () => {
  
    const [showMenu, setShowMenu] = useState(false);

    return (
        <>
            <div className="container-fluid header d-flex justify-content-between align-items-center">
                <h2>Acoustic Talk</h2>
                
                <ul className='d-none d-md-flex justify-content-between align-items-center gap-lg-5 gap-md-4'>
                    <MenuItem />
                </ul>
                
                <HiMenu className='d-md-none' style={{fontSize: "2.2rem"}} onClick={() => {setShowMenu(!showMenu)}} />
                
                <div className={`menuBox d-md-none ${showMenu === true ? "d-flex justify-content-center" : "d-none"}`}>
                    <ul className='d-flex flex-column gap-5 justify-content-center align-items-center'>
                        <MenuItem />
                    </ul>
                </div>
            </div>
        </>
    );
};
