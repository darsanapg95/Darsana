import { Button, Flex, Text} from "@mantine/core";
import classes from "./intro.module.css";
import bgVideo from '../../assets/5240956-uhd_3840_2160_30fps.mp4'
const Intro: React.FC = () => {
    return (
        <Flex className={classes.introContainer}>
                <video autoPlay loop muted className={classes.background_video}>
                    <source src={bgVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            <Flex className={classes.introTextContainer}>
                    <Text className={classes.name}>- I'M DARSANA P.G</Text>
                    <Text className={classes.job}>Software Developer</Text>
                    <Text className={classes.intro}>I'm a Web Developer with 3 years of experience building responsive, high-performance web applications.My expertise includes React, JavaScript, TypeScript, Redux, HTML5, CSS3, and modern front-end best practices.I am also familiar with RESTful APIs. I enjoy solving complex UI challenges and enhancing user experiences through intuitive design and optimized code.</Text>
                <Flex>
                    <Button className={classes.button}>HIRE ME</Button>
                </Flex>
            </Flex>
        </Flex>
    )
};
export default Intro;