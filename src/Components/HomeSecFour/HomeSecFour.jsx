import styles from "./HomeSecFour.module.css";
import Data from "@/Data/Data";
import LandingCard from "@/Components/LandingCard/LandingCard"


const HomeSecFour = () => {
    return (
        <div className={styles.root}>
            <div className={styles.container}>
                <section className={styles.sectionFour}>
                    <h2>{Data.homePage.sectionFour.headerText}</h2>
                    <div className={styles.cardOne}>
                        <LandingCard imgSrc='Naghz-logo.jpg' imgAlt= 'naghz-logo'>
                            <h3>{Data.homePage.sectionFour.cardOne.headerText}</h3>
                            <ul>
                                <li>{Data.homePage.sectionFour.cardOne.li1}</li>
                                <li>{Data.homePage.sectionFour.cardOne.li2}</li>
                                <li>{Data.homePage.sectionFour.cardOne.li3}</li>
                            </ul>
                        </LandingCard>
                    </div>
                    <div className={styles.cardTwo}>
                        <div className={styles.content}>
                            <h3>{Data.homePage.sectionFour.line3.olHeader}</h3>
                            <ol>
                                <li>{Data.homePage.sectionFour.line3.line1}</li>
                                <li>{Data.homePage.sectionFour.line3.line2}</li>
                                <li>{Data.homePage.sectionFour.line3.line3}</li>
                                <li>{Data.homePage.sectionFour.line3.line4}</li>
                            </ol>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default HomeSecFour;