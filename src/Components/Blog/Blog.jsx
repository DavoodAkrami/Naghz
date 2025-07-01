import styles from "./Blog.module.css";
import { useState } from "react";

const Blog = ({ blog, index}) => {
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
        <div key={index} className={styles.root}>
                <div className={styles.blogComponent}>
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
                        <h1>{blog.title}</h1>
                    </div>
                    {blog.paragraphs && Array.isArray(blog.paragraphs) && blog.paragraphs.length > 0 ? (
                        blog.paragraphs.map((paragraph, index) => (
                            <div key={index} className={styles.blogText}>
                                {paragraph}
                            </div>
                        ))
                    ) : blog.text ? (
                        <div className={styles.blogText}>
                            {blog.text}
                        </div>
                    ) : null}
                    <div className={styles.marqueeContainer}>
                        <div className={styles.marqueeTrack}>
                            {Array.from({ length: 60 }).map((_, i) => (
                                <img
                                    src="/Naghz-logo.jpg"
                                    alt="Naghz Logo"
                                    className={styles.marqueeLogo}
                                    key={i}
                                />
                            ))}
                        </div>
                    </div>
                </div>
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