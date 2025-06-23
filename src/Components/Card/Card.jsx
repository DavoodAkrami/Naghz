import styles from "./Card.module.css"


const Card = ({imgSrc, children, key, className}) => {
    return (
        <div className={`${styles.root} ${className || ""}`} key={key}>
            <div className={styles.card}>
                <img src={imgSrc} alt="تصویر کارت" className={styles.cardImg} />
                <div className={styles.children}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Card;