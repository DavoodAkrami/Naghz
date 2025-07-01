import Data from "@/Data/Data";
import styles from "./HomeSecThree.module.css";
import LandingCard from "@/Components/LandingCard/LandingCard";

const HomeSecThree = () => {
    return (
        <div className={styles.root}>
            <div className={styles.container}>
                <h2 className={styles.header}>{Data.homePage.sectionThree.headerText}</h2>
                <p className={styles.answer}>{Data.homePage.sectionThree.answer}</p>
                <section className={styles.cardContainer}>
                    <LandingCard imgSrc='Naghz-logo.jpg' imgAlt= 'naghz-logo'>
                        <h3>{Data.homePage.sectionThree.cardOne.headerText}</h3>
                        <ol>
                            <li>{Data.homePage.sectionThree.cardOne.line1}</li>
                            <li>{Data.homePage.sectionThree.cardOne.line2}</li>
                            <li>{Data.homePage.sectionThree.cardOne.line3}</li>
                            <li>{Data.homePage.sectionThree.cardOne.line4}</li>
                            <li>{Data.homePage.sectionThree.cardOne.line5}</li>
                        </ol>
                    </LandingCard>

                    <LandingCard imgSrc='Naghz-logo.jpg' imgAlt= 'naghz-logo'>
                    <h3>{Data.homePage.sectionThree.cardTwo.headerText}</h3>
                        <ol>
                            <li>{Data.homePage.sectionThree.cardTwo.line1}</li>
                            <li>{Data.homePage.sectionThree.cardTwo.line2}</li>
                            <li>{Data.homePage.sectionThree.cardTwo.line3}</li>
                            <li>{Data.homePage.sectionThree.cardTwo.line4}</li>
                            <li>{Data.homePage.sectionThree.cardTwo.line5}</li>
                        </ol>
                    </LandingCard>
                </section>
            </div>
        </div>
    )
}

export default HomeSecThree;