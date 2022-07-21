import React from 'react'
import cn from 'classnames'
import MenuList from '../MenuList/MenuList'

import styles from './MobileMenu.module.css'

import imgCloseMenu from '../../static/images/icon-close-menu.svg'


function MobileMenu({ active, onClose }) {
    const handleCloseClick = () => {
        onClose()
    }

    return (
        <div className={cn(styles.overlay, { [styles.active]: active })}>
            <div className={cn(styles.mobileManu)}>
                <div className={cn(styles.imgCloseMenuWrapper)}>
                    <img className={cn(styles.imgCloseMenu)} src={imgCloseMenu} alt="" onClick={handleCloseClick} />
                </div>
                <MenuList />
                <div className={cn(styles.loginLinkWrapper)}>
                    <a className={cn(styles.loginLink)} href="/">Login</a>
                </div>
                <div className={cn(styles.registerLinkWrapper)}>
                    <a className={cn(styles.registerLink)} href="/">Register</a>
                </div>
            </div>
        </div>
    )
}

export default MobileMenu