import styles from "./OurTeam.module.css";
import Card from "@/Components/Card/Card";
import TeamData from "@/Data/TeamData";
import { LinkedinLogo, ResumeLogo } from "@/Components/Icons/Icons";


const OurTeam = () => {
    return (
        <div className={styles.root}>
            <div className={styles.container}>
                {TeamData.teamMembers.map((member, index) => (
                    <Card imgSrc={member.photo} key={index} className={styles.membersCard}>
                        <h2 className={styles.memberName}>{member.name} {member.lastName}</h2>
                        <div className={styles.role}>
                            {member.role}
                        </div>
                        <div className={styles.bio}>
                            {member.bio}
                        </div>
                        <div className={styles.social}>
                            <div className={styles.linkedin} onClick={() => {window.open(member.linkedin)}}>
                                <LinkedinLogo />
                            </div>
                            <div className={styles.resume} onClick={() => {window.open(member.resume)}}>
                                <ResumeLogo />
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    )
}

export default OurTeam;