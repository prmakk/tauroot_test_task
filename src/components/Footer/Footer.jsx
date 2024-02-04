import React from 'react'
import AboutWidget from '../AboutWidget'
import FooterMenu from './FooterMenu'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__wrapper">
                <div className="footer__wrapper-container">
                    <AboutWidget />
                    <FooterMenu />
                </div>
            </div>
        </footer>
    )
}

export default Footer