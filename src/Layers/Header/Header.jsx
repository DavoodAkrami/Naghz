import styles from "./Header.module.css";
import Data from "../../Data/Data";
import { useNavigate, useLocation } from "react-router-dom";
import React, { useRef, useEffect, useState } from 'react';
import clsx from 'clsx';


const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const currentPath = location.pathname;

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

    return (
        <div className={styles.root}>
            <div className={styles.container}>
                <div className={styles.sections}>
                    <ul>
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
                <div className={styles.naghzLogo}>
                    <img src="/Naghz-logo.svg" alt="لوگو نغز" />
                </div>
            </div>
        </div>
    )
}

export default Header;