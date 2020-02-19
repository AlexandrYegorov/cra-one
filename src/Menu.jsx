import React from 'react';
import MenuItem from './MenuItem';


function Menu(props) {

    // const a = [];
    // for (let i = 0; i < items.length; i++){
    //   a.push(<MenuItem key={items[i].text} menuItem={items[i]} />);
    // }
    //
    // console.log(a)

    return (
        <nav>
            <ul>
                {props.menuItems.map(el => <MenuItem key={el.text} menuItem={el} abc='123'/>)}
            </ul>
        </nav>
    );
}

export default Menu;