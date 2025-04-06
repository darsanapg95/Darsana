import { Button, Flex, Text, Image } from "@mantine/core";
import classes from './about.module.css';
import { Download } from "lucide-react";
import SkillsList from "../../components/skills";
import logo from "../../assets/pic1.webp"
import cv from "../../assets/Darsana P G - Resume.pdf"

const About: React.FC = () => {
    return (
        <Flex id='about' className={classes.aboutContainter}>
            <Text className={classes.aboutText}>ABOUT ME</Text>
            <Flex className={classes.aboutMain}>
                <Flex className={classes.aboutContent}>
                    <Flex className={classes.personalInfo}>
                        <Flex className={classes.info}>
                            <Flex>
                                <Flex className={classes.name}>
                                    <Text className={classes.aboutText1}>Full Name:</Text>
                                    <Text className={classes.aboutText2}>Darsana P.G</Text>
                                </Flex>
                                <Flex className={classes.name}>
                                    <Text className={classes.aboutText1}>Email:</Text>
                                    <a href="mailto:darsanapg95@gmail.com" target="_blank" rel="noopener noreferrer" className={classes.aboutText2}>darsanapg95@gmail.com</a>
                                </Flex>
                                <Flex className={classes.name}>
                                    <Text className={classes.aboutText1}>Phone Number:</Text>
                                    <Text className={classes.aboutText2}>9846889579</Text>
                                    <a href="tel:+919846889579" target="_blank" rel="noopener noreferrer" className={classes.aboutText2}>+919846889579</a>
                                </Flex>
                                <Flex className={classes.name}>
                                    <Text className={classes.aboutText1}>Nationality:</Text>
                                    <Text className={classes.aboutText2}>Indian</Text>
                                </Flex>
                            </Flex>
                            <Flex>
                                <Flex className={classes.name}>
                                    <Text className={classes.aboutText1}>Linkedin:</Text>
                                    <a href="https://www.linkedin.com/in/darsanapg95/" target="_blank" rel="noopener noreferrer" className={classes.aboutText2}>https://www.linkedin.com/in/darsanapg95/</a>
                                </Flex>
                                <Flex className={classes.name}>
                                    <Text className={classes.aboutText1}>GitHub:</Text>
                                    <a href="https://github.com/darsanapg95" target="_blank" rel="noopener noreferrer" className={classes.aboutText2}>github.com/darsanapg95</a>
                                </Flex>
                                <Flex className={classes.name}>
                                    <Text className={classes.aboutText1}>Freelance:</Text>
                                    <Text className={classes.aboutText2}>Available</Text>
                                </Flex>
                                <Flex className={classes.name}>
                                    <Text className={classes.aboutText1}>Language Known:</Text>
                                    <Text className={classes.aboutText2}>English and Malayalam</Text>
                                </Flex>
                            </Flex>
                        </Flex>
                    </Flex>
                    <Flex>
                        <a
                            href={cv}
                            download
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ textDecoration: "none" }}
                        >
                            <Button
                                className={classes.button}
                                rightSection={<Download size={20} style={{ marginLeft: "30px" }} />}
                            >
                                Download CV
                            </Button>
                        </a>
                    </Flex>

                </Flex>
                <Flex className={classes.img}>
                    <Image src={logo} className={classes.image}>
                    </Image>
                </Flex>
            </Flex>
            <Flex className={classes.skills}>
                <Text className={classes.skillname}>SKILLS</Text>
                <SkillsList />
            </Flex>
        </Flex>
    );
};

export default About;
