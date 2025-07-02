import { Children } from "react";
import styles from "./Card.module.css";
import clsx from "clsx";


const Card = ({ imgSrc, children }) => {
    return (
        <div className={clsx(styles.card, !imgSrc && styles.noImg)}>
            {imgSrc &&
                 <img src={imgSrc} alt="تصویر کارت" className={styles.cardImg} />
            }
            <div className={styles.content} >
                {children}
            </div>
        </div>
    )
}

export default Card;