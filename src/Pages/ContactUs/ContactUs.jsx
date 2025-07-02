import styles from "./ContactUs.module.css";
import React, { useState } from "react";


const ContactUs = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    })

    const handleChange = (e) => {
        setForm ({
            ...form,
            [e.target.name]: e.target.value, 
        });
    };
    
    return (
        <div className={styles.root}>
            <div className={styles.container}>
                <form 
                    action="https://formspree.io/f/{form_id}" 
                    className={styles.contactForm}
                    method="POST"
                >
                    <input 
                        type="text"
                        placeholder="Name"
                         
                    />
                </form>
            </div>
        </div>
    )
}