import React from "react"
import cn from 'classnames'
import MobileMenu from "../MobileMenu/MobileMenu"

import styles from './Main.module.css'

import imgHero from '../../static/images/image-hero-mobile.png'
import imgClientAudiophile from '../../static/images/client-audiophile.svg'
import imgClientDatabiz from '../../static/images/client-databiz.svg'
import imgClientMaker from '../../static/images/client-maker.svg'
import imgClientMeet from '../../static/images/client-meet.svg'


function Main() {
    return (
        <main className={cn(styles.main)}>
            <img className={cn(styles.imgHero)} src={imgHero} alt="hero" />
            <div className={cn(styles.wrapper)}>
                <h1>Make remote work</h1>
                <p className={cn(styles.paragraph)}>Get your team in sync, no matter your location. Stremaline processes, create team rituals, and watch productivity soar.</p>
                <button className={cn(styles.btn)}>Learn more</button>
                <div className={cn(styles.imgsClientWrapper)}>
                    <img className={cn(styles.imgClient)} src={imgClientDatabiz} alt="client databiz" />
                    <img className={cn(styles.imgClient)} src={imgClientAudiophile} alt="client audiophile" />
                    <img className={cn(styles.imgClient)} src={imgClientMeet} alt="client meet" />
                    <img className={cn(styles.imgClient)} src={imgClientMaker} alt="client maker" />
                </div>
            </div>
        </main>
    )
}

export default Main