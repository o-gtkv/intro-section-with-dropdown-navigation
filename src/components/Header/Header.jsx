import React, { useState } from "react"
import cn from 'classnames'
import MobileMenu from "../MobileMenu/MobileMenu"
import MenuList from "../MenuList/MenuList"
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
            <Media queries={{
                small: "(max-width: 1023px)",
                large: "(min-width: 1024px)"
            }}>
                {matches => (
                    <>
                        {matches.small && <MobileMenu active={mobileMenuIsActive} onClose={() => setMobileMenuIsActive(false)} />}
                        {matches.large && <MenuList />}
                        {matches.large &&
                            <div className={cn(styles.authWrapper)}>
                                <a className={cn(styles.loginLink)} href="/">Login</a>
                                <a className={cn(styles.registerLink)} href="/">Register</a>
                            </div>
                        }
                    </>
                )}
            </Media>
        </header>
    )
}

export default Header