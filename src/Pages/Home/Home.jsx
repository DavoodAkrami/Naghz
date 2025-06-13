import styles from "./Home.module.css"
import HomeSecOne from "@/Components/HomeSecOne/HomeSecOne";
import HomeSecTwo from "@/Components/HomeSecTwo/HomeSecTwo";

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
        </div>
    )
}


export default Home;