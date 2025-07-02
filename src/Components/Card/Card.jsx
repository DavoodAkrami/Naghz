import { Children } from "react";
import styles from "./Card.module.css";


const Card = ({ imgSrc, children }) => {
    return (
        <div className={styles.card}>
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