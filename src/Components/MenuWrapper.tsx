import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './wrapper.scss';

const MenuWrapper = (props: any) => {
    const [menuClosed, setMenuClosed] = useState(false)
    const navigate = useNavigate()


    const { children } = props;
    return (
        <div className='wrapper'>

            <div className={`wrapper-menu ${menuClosed ? "wrapper-menu-closed" : ''}`}>
                CONTENT
                <div onClick={() => navigate("/")}>Home</div>
                <div onClick={() => navigate("/champs")}>Champions</div>
                <div onClick={() => navigate("/items")}>Items</div>
            </div>
            <div className='wrapper-content'>
                <div className='wrapper-top-bar'>
                 <span onClick={() => setMenuClosed(!menuClosed)} className="material-symbols-outlined">menu</span>
                    <div >MenuWrapper</div>
                </div>
                <div className='wrapper-children'>
                    {children}
                </div>
            </div>
        </div >
    )
}



export default MenuWrapper