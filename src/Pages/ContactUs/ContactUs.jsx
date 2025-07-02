import styles from "./ContactUs.module.css";
import React, { useState } from "react";

const ContactUs = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const res = await fetch('https://formspree.io/f/mqabjarz', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(form)
        });
        if (res.ok) {
            setStatus("Success");
            setForm({ name: "", email: "", message: "" });
        } else {
            setStatus("Error");
        }
        setLoading(false);
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    return (
        <div className={styles.root}>
            <div className={styles.container}>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange} 
                        placeholder="نام"
                        required
                    />
                    <input 
                        type="email" 
                        name="email"
                        placeholder="ایمیل"
                        value={form.email}
                        onChange={handleChange}
                        required 
                    />
                    <textarea 
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="پیام خود را وارد کنید"
                        required                        
                    />
                    <button type="submit" disabled={loading}>
                        {loading ? "ارسال..." : "ارسال"}
                    </button>
                    {status === "Success" && <p>ممنونیم!</p>}
                    {status === "Error" && <p>خطا در ارسال پیام. لطفا دوباره تلاش کنید.</p>}
                </form>
            </div>
        </div>
    );
};

export default ContactUs;