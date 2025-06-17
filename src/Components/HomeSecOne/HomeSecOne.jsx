import styles from "./HomeSecOne.module.css";
import Data from "@/Data/Data";
import Button from "@/Components/Button/Button";


const HomeSecOne = () => {
    return (
        <section className={styles.root}>
            <div className={styles.container}>
                <div className={styles.sectionOne}>
                    <h1>{Data.homePage.sectionOne.headerText}</h1>
                    <h1>{Data.homePage.sectionOne.underHeaderText}</h1>
                    <Button size= 'medium' variant= 'fill' className= 'button' >
                        {Data.homePage.sectionOne.buttonText}
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default HomeSecOne;
