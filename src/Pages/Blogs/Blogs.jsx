import styles from "./Blogs.module.css";
import Blog from "@/Components/Blog/Blog";
import BlogData from "@/Data/BlogData";


const Blogs = () => {
    return (
        <div className={styles.root}>
            {BlogData.map((blog, index) => (
                <div  key={index} className={styles.container}>
                    <Blog index={index} blog={blog} />
                </div>
            ))}
        </div>
    )
}

export default Blogs;