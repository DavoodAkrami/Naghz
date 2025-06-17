import styles from "./LandingCard.module.css";
import Data from "@/Data/Data"


const LandingCard = ({imgSrc, imgAlt, children}) => {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.img}>
                    <img src={imgSrc} alt={imgAlt} />
                </div>
                <div className={styles.content}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default LandingCard;