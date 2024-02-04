import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const MainHeader = () => {
    const [menuIsOpened, setMenuIsOpened] = useState(false);

    const handleMenu = () => {
        setMenuIsOpened(!menuIsOpened);
        console.log('menu:' + menuIsOpened);
    };

    return (
        <header className="mainheader">
            <div className="mainheader__nav">
                <div className="mainheader__nav-logo">
                    <img src={logo} alt="logo" />
                </div>
                <ul className={menuIsOpened ? "mainheader__nav-list _active" : "mainheader__nav-list"}>
                    <li>
                        <Link to="/">Item</Link>
                    </li>
                    <li>
                        <Link to="/">Item</Link>
                    </li>
                    <li>
                        <Link to="/">Item</Link>
                    </li>
                    <li>
                        <Link to="/">Item</Link>
                    </li>
                    <li>
                        <Link to="/">Item</Link>
                    </li>
                    <li>
                        <Link to="/">Item</Link>
                    </li>
                    <li>
                        <Link to="/">Item</Link>
                    </li>
                    <li>
                        <Link to="/">Item</Link>
                    </li>
                </ul>
            </div>

            <div className={menuIsOpened ? "mainheader__search _active" : "mainheader__search"}>
                <input type="text" placeholder="Search for..." />
                <svg
                    width="18.571289"
                    height="18.571289"
                    viewBox="0 0 18.5713 18.5713"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    xlink="http://www.w3.org/1999/xlink"
                >
                    <desc>Created with Pixso.</desc>
                    <defs />
                    <path
                        id=""
                        d="M12.8571 7.857C12.8571 10.6137 10.6138 12.857 7.85714 12.857C5.10045 12.857 2.85714 10.6137 2.85714 7.857C2.85714 5.10031 5.10045 2.857 7.85714 2.857C10.6138 2.857 12.8571 5.10031 12.8571 7.857ZM18.5714 17.1427C18.5714 16.7633 18.4152 16.3949 18.1585 16.1383L14.3304 12.3101C15.2344 11.0043 15.7143 9.44182 15.7143 7.857C15.7143 3.51548 12.1987 -0.000141144 7.85714 -0.000141144C3.51563 -0.000141144 0 3.51548 0 7.857C0 12.1985 3.51563 15.7141 7.85714 15.7141C9.44197 15.7141 11.0045 15.2342 12.3103 14.3302L16.1384 18.1472C16.3951 18.415 16.7634 18.5713 17.1429 18.5713C17.9241 18.5713 18.5714 17.924 18.5714 17.1427Z"
                        fill="#E1541B"
                        fillOpacity="1.000000"
                        fillRule="evenodd"
                    />
                </svg>
            </div>
            <div className="mainheader__burger" onClick={handleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </header>
    );
};

export default MainHeader;
