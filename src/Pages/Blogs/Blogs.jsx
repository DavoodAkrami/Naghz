import styles from "./Blogs.module.css";
import Blog from "@/Components/Blog/Blog";


const Blogs = () => {
    return (
        <div className={styles.root}>
            <div className={styles.container}>
                <Blog />
            </div>
        </div>
    )
}

export default Blogs;