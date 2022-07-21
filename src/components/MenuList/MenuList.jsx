import React, { useState } from 'react'
import cn from 'classnames'

import styles from './MenuList.module.css'

import imgArrowDown from '../../static/images/icon-arrow-down.svg'
import imgArrowUp from '../../static/images/icon-arrow-up.svg'
import imgCalender from '../../static/images/icon-calendar.svg'
import imgTodoList from '../../static/images/icon-todo.svg'
import imgReminders from '../../static/images/icon-reminders.svg'
import imgPlanning from '../../static/images/icon-planning.svg'

function MenuList() {
    const [menuFeaturesIsOpen, setMenuFeaturesIsOpen] = useState(false)
    const [menuCompanyIsOpen, setMenuCompanyIsOpen] = useState(false)

    const handleOpenFeaturesMenuClick = () => {
        setMenuFeaturesIsOpen(!menuFeaturesIsOpen)
        setMenuCompanyIsOpen(false)
    }

    const handleOpenCompanyMenuClick = () => {
        setMenuCompanyIsOpen(!menuCompanyIsOpen)
        setMenuFeaturesIsOpen(false)
    }

    return (
        <ul className={cn(styles.menuList)}>
            <li className={cn(styles.featuresMenu)} onClick={handleOpenFeaturesMenuClick}>
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
            <li>
                <a className={cn(styles.menuLink)} href="/">Careers</a>
            </li>
            <li>
                <a className={cn(styles.menuLink)} href="/">About</a>
            </li>
        </ul>
    )
}

export default MenuList