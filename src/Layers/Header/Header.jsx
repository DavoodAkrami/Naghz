import styles from "./Header.module.css";
import Data from "../../Data/Data";
import { useNavigate, useLocation } from "react-router-dom";
import React, { useRef, useEffect, useState } from 'react';
import clsx from 'clsx';

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

    return (
        <div className={styles.root}>
            <div className={styles.container}>

                {/* هَمبِرگر */}
                <div
                    className={clsx(styles.hamburgerMenu, isMenuOpen && styles.open)}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                {/* منوی دسکتاپ */}
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

                {/* منوی موبایل همیشه رندر می‌شود اما با کلاس open کنترل می‌شود */}
                <ul className={clsx(styles.mobileMenu, isMenuOpen && styles.open)}>
                    {Data.sections.map((section, index) => (
                        <li
                            key={index}
                            className={styles.mobileLi}
                            onClick={() => handleNavigate(section.route)}
                        >
                            {section.name}
                        </li>
                    ))}
                </ul>

                {/* لوگو */}
                <div className={styles.naghzLogo}>
                    <img src="/Naghz-logo.svg" alt="لوگو نغز" />
                </div>
            </div>
        </div>
    )
}

export default Header;
