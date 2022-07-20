import React, { useState } from 'react'
import cn from 'classnames'
import imgCloseMenu from '../../static/images/icon-close-menu.svg'

import styles from './MobileMenu.module.css'

import imgArrowDown from '../../static/images/icon-arrow-down.svg'
import imgArrowUp from '../../static/images/icon-arrow-up.svg'
import imgCalender from '../../static/images/icon-calendar.svg'
import imgTodoList from '../../static/images/icon-todo.svg'
import imgReminders from '../../static/images/icon-reminders.svg'
import imgPlanning from '../../static/images/icon-planning.svg'

function MobileMenu({ active, onClose }) {
    const [menuFeaturesIsOpen, setMenuFeaturesIsOpen] = useState(false)
    const [menuCompanyIsOpen, setMenuCompanyIsOpen] = useState(false)

    const handleCloseClick = () => {
        onClose()
    }

    const handleOpenFeaturesMenuClick = () => {
        setMenuFeaturesIsOpen(!menuFeaturesIsOpen)
    }

    const handleOpenCompanyMenuClick = () => {
        setMenuCompanyIsOpen(!menuCompanyIsOpen)
    }

    return (
        <div className={cn(styles.overlay, { [styles.active]: active })} >
            <div className={cn(styles.mobileManu)}>
                <div className={cn(styles.imgCloseMenuWrapper)}>
                    <img className={cn(styles.imgCloseMenu)} src={imgCloseMenu} alt="" onClick={handleCloseClick} />
                </div>
                <ul className={cn(styles.menuList)}>
                    <li onClick={handleOpenFeaturesMenuClick}>
                        Features
                        <img className={cn(styles.imgArrow)} src={menuFeaturesIsOpen ? imgArrowUp : imgArrowDown} alt="arrow down" />
                        <ul className={cn(styles.featuresMenuList, { [styles.visible]: menuFeaturesIsOpen })}>
                            <li>
                                <img src={imgTodoList} alt="todo list" />
                                <a href="/">Todo List</a>
                            </li>
                            <li>
                                <img src={imgCalender} alt="calendar" />
                                <a href="/">Calendar</a>
                            </li>
                            <li>
                                <img src={imgReminders} alt="reminders" />
                                <a href="/">Reminders</a>
                            </li>
                            <li>
                                <img src={imgPlanning} alt="planning" />
                                <a href="/">Planning</a>
                            </li>
                        </ul>
                    </li>
                    <li onClick={handleOpenCompanyMenuClick}>
                        Company
                        <img className={cn(styles.imgArrow)} src={menuCompanyIsOpen ? imgArrowUp : imgArrowDown} alt="arrow down" />
                        <ul className={cn(styles.companyMenuList, { [styles.visible]: menuCompanyIsOpen })}>
                            <li>
                                <a href='/'>History</a>
                            </li>
                            <li>
                                <a href="/">Our Team</a>
                            </li>
                            <li>
                                <a href="/">Blog</a>
                            </li>
                        </ul>
                    </li>
                    <li>Careers</li>
                    <li>About</li>
                    <li className={cn(styles.loginLinkMenuItem)}>
                        <a className={cn(styles.loginLink)} href="/">Login</a>
                    </li>
                    <li className={cn(styles.registerLinkMenuItem)}>
                        <a className={cn(styles.registerLink)} href="/">Register</a>
                    </li>
                </ul>
            </div >
        </div >
    )
}

export default MobileMenu