import Data from "@/Data/Data";
import LandingCard from "@/Components/LandingCard/LandingCard";
import styles from "./HomeSecFive.module.css";
import Button from "@/Components/Button/Button";



const HomeSecFive = () => {
    return (
        <div className={styles.root}>
            <div className={styles.cardOne}>
                <LandingCard>
                    <p>{Data.homePage.sectionFive.cardOne.line1}</p>
                    <p>{Data.homePage.sectionFive.cardOne.line2}</p>
                    <p>{Data.homePage.sectionFive.cardOne.line3}</p>
                    <p>{Data.homePage.sectionFive.cardOne.line4}</p>
                    <Button size= 'medium' variant= 'fill' >
                        {Data.homePage.sectionFive.cardOne.buttonText}
                    </Button>
                </LandingCard>
            </div>
        </div>
    )
}

export default HomeSecFive;