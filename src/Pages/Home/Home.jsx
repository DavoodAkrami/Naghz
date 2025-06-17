import styles from "./Home.module.css"
import HomeSecOne from "@/Components/HomeSecOne/HomeSecOne";
import HomeSecTwo from "@/Components/HomeSecTwo/HomeSecTwo";
import HomeSecThree from "@/Components/HomeSecThree/HomeSecThree";
import HomeSecFour from "@/Components/HomeSecFour/HomeSecFour";


const Home = () => {
    return (
        <div className={styles.root}>
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
        </div>
    )
}


export default Home;