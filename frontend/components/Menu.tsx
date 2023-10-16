import React from 'react'
import Navbar from './Navbar'


const Menu = (props: any) => {
    const items = [
        {name:'Dao', ref:'dao'},
        {name:'Contributor', ref: 'contributors'}
    ];
    const navbarProps = {items: items, connect: props.connectWallet};

    return (
        <Navbar {...navbarProps}/>
    )
}

export default Menu
