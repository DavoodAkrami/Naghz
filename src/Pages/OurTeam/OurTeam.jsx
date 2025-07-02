import TeamData from "@/Data/TeamData";
import styles from "./OurTeam.module.css";
import Card from "@/Components/Card/Card"
import { IoNewspaperOutline } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa6";
import Footer from "@/Layers/Footer/Footer"




const OurTeam = () => {
    return (
        <div className={styles.root}>
            <div className={styles.container}>
                <div className={styles.team}>
                    <Card>
                    <div className={styles.IOtext}>
                        <h2>{TeamData.teamData.teamHeader}</h2>
                        <div dangerouslySetInnerHTML={{ __html: TeamData.teamData.teamText }} />
                    </div>
                    </Card>    
                </div>  
                <div className={styles.CardContainer}> 
                    {TeamData.teamMembers.map((member, index) => (
                        <Card imgSrc={member.photo} key={index}> 
                            <h2 className={styles.memberName}>
                                {member.name} {member.className}
                            </h2>
                            <div className={styles.role}>
                                {member.role}
                            </div>
                            <div className={styles.social}>
                                <div className={styles.resume}>
                                    <IoNewspaperOutline />
                                </div>
                                <div className={styles.linkedin}>
                                    <FaLinkedinIn />
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default OurTeam;