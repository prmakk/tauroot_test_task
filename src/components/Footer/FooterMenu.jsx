import React from 'react'

const FooterMenu = () => {
    return (
        <div className="footer__info">
            <div className="footer__info-lists">
                <div className="footer__info-lists-list">
                    <p>Cathegory</p>
                    <ul>
                        <li>item 1</li>
                        <li>item 2</li>
                        <li>item 3</li>
                        <li>item 4</li>
                        <li>item 5</li>
                    </ul>
                </div>
                <div className="footer__info-lists-list">
                    <p>Play better</p>
                    <ul>
                        <li>item 1</li>
                        <li>item 2</li>
                        <li>item 3</li>
                        <li>item 4</li>
                        <li>item 5</li>
                    </ul>
                </div>
                <div className="footer__info-lists-list">
                    <p>Useful links</p>
                    <ul>
                        <li><a href="#f">link 1</a></li>
                        <li><a href="#f">link 2</a></li>
                        <li><a href="#f">link 3</a></li>
                        <li><a href="#f">link 4</a></li>
                        <li><a href="#f">link 5</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer__info-copyright">
                <p>Copyright © 2024. Tous droits réservés.</p>
            </div>
        </div>
    )
}

export default FooterMenu