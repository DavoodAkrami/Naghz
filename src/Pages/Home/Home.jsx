import styles from "./Home.module.css"
import HomeSecOne from "@/Components/HomeSecOne/HomeSecOne";
import HomeSecTwo from "@/Components/HomeSecTwo/HomeSecTwo";
import HomeSecThree from "@/Components/HomeSecThree/HomeSecThree";
import HomeSecFour from "@/Components/HomeSecFour/HomeSecFour";
import HomeSecFive from "@/Components/HomeSecFive/HomeSecFive";
import Footer from "@/Layers/Footer/Footer";


const Home = () => {
    return (
        <div className={styles.root}>
            <div className={styles.backGround}>
                <section className={styles.HomeSecOne}>
                    <HomeSecOne />
                </section>
                <hr className={styles.sectionDivider} />
                <section className={styles.HomeSecTwo}>
                    <HomeSecTwo />
                </section>
                <hr className={styles.sectionDivider} />
                <section className={styles.HomeSecThree}>
                    <HomeSecThree />
                </section>
                <hr className={styles.sectionDivider} />
                <section className={styles.HomeSecFour}>
                    <HomeSecFour />
                </section>
                <hr className={styles.sectionDivider} />
                <section className={styles.HomeSecFive}>
                    <HomeSecFive />
                </section>
                <section>
                    <Footer />
                </section>
            </div>
        </div>
    )
}


export default Home;