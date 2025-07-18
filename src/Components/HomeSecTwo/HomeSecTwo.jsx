import styles from "./HomeSecTwo.module.css";
import Data from "../../Data/Data";



const HomeSecTwo = () => {
    return (
        <section className={styles.root}>
            <div className={styles.container}>
                <div className={styles.sectionTwo}>
                    <h2 className={styles.header}>
                        {Data.homePage.sectionTwo.headerText}
                    </h2>
                    <div className={styles.text}>
                        <div style={{ fontWeight: 800 }}>
                            {Data.homePage.sectionTwo.line1}
                        </div>
                        <div>
                            {Data.homePage.sectionTwo.line2}
                        </div>
                        <div>
                            {Data.homePage.sectionTwo.line3}
                        </div>
                        <div>
                            {Data.homePage.sectionTwo.line4}
                        </div>
                        <div>
                            {Data.homePage.sectionTwo.line5}
                        </div>
                        <div>
                            {Data.homePage.sectionTwo.line6}
                        </div>
                        <div style={{ fontWeight: 800 }}>
                            {Data.homePage.sectionTwo.line7}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeSecTwo;