import React from 'react';
import Logo from './Logo';
import Menu from './Menu';

function Header(props) {
    return (
        <header>
            <div className="container">
                <Logo />
                <Menu menuItems={props.menuItems} />
            </div>
        </header>
    );
}

export default Header;