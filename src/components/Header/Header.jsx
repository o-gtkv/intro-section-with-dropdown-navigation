import React, { useState } from "react"
import cn from 'classnames'
import MobileMenu from "../MobileMenu/MobileMenu"
import Media from 'react-media'

import styles from './Header.module.css'

import logo from '../../static/images/logo.svg'
import menu from '../../static/images/icon-menu.svg'

function Header() {
    const [mobileMenuIsActive, setMobileMenuIsActive] = useState(false)

    const handleHamburgerIconClick = () => {
        setMobileMenuIsActive(true)
    }

    return (
        <header className={cn(styles.header)}>
            <img src={logo} alt="logo" />
            <img className={cn(styles.hamburgerIcon)} src={menu} alt="menu" onClick={handleHamburgerIconClick} />
            <MobileMenu active={mobileMenuIsActive} onClose={() => setMobileMenuIsActive(false)} />
        </header>
    )
}

export default Header