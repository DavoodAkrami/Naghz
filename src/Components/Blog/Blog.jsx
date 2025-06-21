import styles from "./Blog.module.css";
import BlogData from "@/Data/BlogData";
import { useState } from "react";

const Blog = () => {
    const [isGalleryOpen, setIsGalleryOpen] = useState(false)
    const [galleryImg, setGalleryImg] = useState('')

    const openGallery = (imgUrl) => {
        setIsGalleryOpen(true)
        setGalleryImg(imgUrl)
    }

    const closeGallery = (e) => {
        if (e.target.id === 'overlay' || e.target.id === 'closeButton') {
        setIsGalleryOpen(false)
        setGalleryImg('')
        }
    }

    const handleContentClick = (e) => {
        e.stopPropagation();
      };
    
    return(
        <div className={styles.root}>
            {BlogData.map((blog, index) => (
                <div key={index} className={styles.blogComponent}>
                    <div className={styles.info}>
                        <div className={styles.writerInfo}>
                            <div className={styles.writerPic}>
                                <img src={blog.writerPicUrl} alt="عکس نویسنده بلاگ" onClick={() => openGallery(blog.writerPicUrl)} />
                            </div>
                            <div className={styles.writerName}>
                                {blog.writer}
                            </div>
                        </div>
                        <div className={styles.uploadedAt}>
                            {blog.uploadedAt}
                        </div>
                    </div>
                    <div className={styles.title}>
                        <h2>{blog.title}</h2>
                    </div>
                    <div className={styles.blogText}>
                        {blog.text}
                    </div>
                    <hr className={styles.hr}/>
                </div>
            ))}
            {isGalleryOpen && 
                <div className={styles.galleryRoot} id="overlay" onClick={closeGallery}>
                    <div className={styles.closeButton} onClick={closeGallery}>
                        <span className={styles.closeLine} onClick={closeGallery} id="closeButton"></span>
                        <span className={styles.closeLine} onClick={closeGallery} id="closeButton"></span>
                    </div>
                    <div className={styles.gallery} onClick={handleContentClick}>
                        <img src={galleryImg} alt="عکس نویسنده بلاگ" />
                    </div>
                </div>
            }
        </div>
    )
}

export default Blog;