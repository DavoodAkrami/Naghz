import styles from "./Header.module.css";
import Data from "../../Data/Data";
import { useNavigate, useLocation } from "react-router-dom";
import React, { useRef, useEffect, useState } from 'react';
import clsx from 'clsx';
import { FaArrowLeft } from "react-icons/fa6";



const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const currentPath = location.pathname;
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    


    const liRefs = useRef({});
    const [indicatorStyle, setIndicatorStyle] = useState({});

    useEffect(() => {
        const activeLink = Data.sections.find(section => section.route === currentPath);
        if (activeLink && liRefs.current[activeLink.route]) {
            const activeLi = liRefs.current[activeLink.route];
            setIndicatorStyle({
                width: activeLi.offsetWidth + 'px',
                left: activeLi.offsetLeft + 'px',
            });
        }
    }, [currentPath]);

    const handleNavigate = (route) => {
        navigate(route);
        setIsMenuOpen(false);
    };


    const headerPages = [ "/", "/blogs", "/ourteam", "/contactus" ];

    if (headerPages.includes(currentPath)) {
        return (
            <div className={styles.root}>
                <div className={styles.container}>

                    <div
                        className={clsx(styles.hamburgerMenu, isMenuOpen && styles.open)}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                    <div className={styles.sections}>
                        <ul className={styles.desktopMenu}>
                            <div className={styles.activeBackgroundIndicator} style={indicatorStyle}></div>

                            {Data.sections.map((section, index) => (
                                <li
                                    key={index}
                                    ref={el => liRefs.current[section.route] = el}
                                    className={clsx(
                                        styles.li,
                                        currentPath === section.route && styles.activeLiText
                                    )}
                                    onClick={() => navigate(section.route)}
                                >
                                    {section.name}
                                </li>
                            ))}
                        </ul>
                    </div>


                    <ul className={clsx(styles.mobileMenu, isMenuOpen && styles.open)}>
                        {Data.sections.map((section, index) => (
                            <li
                                key={index}
                                className={clsx(
                                    styles.mobileLi,
                                    currentPath === section.route && styles.activeLiText
                                )}
                                onClick={() => handleNavigate(section.route)}
                            >
                                {section.name}
                            </li>
                        ))}
                    </ul>

                    <div className={styles.naghzLogo}>
                        <img src="/Naghz-logo.svg" alt="لوگو نغز" />
                    </div>
                </div>
            </div>
        )
    } else{
        return (
            <div className={styles.backHeaderBar}>
                <div className={styles.naghzLogoRight}>
                    <img src="/Naghz-logo.svg" alt="لوگو نغز" />
                </div>
                <span className={styles.backArrow} onClick={() => navigate(-1)}>
                    <FaArrowLeft />
                </span>
            </div>
        )
    }
}

export default Header;
