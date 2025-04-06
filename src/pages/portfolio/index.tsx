import { useState } from "react";
import { Box, Button, CloseIcon, Flex, Image, Text } from "@mantine/core";
import classes from "./portfolio.module.css";
import testloom from "../../assets/Testloom.png";
import yoolt from "../../assets/yoolt.png";
import talking from "../../assets/Talkingchalks.png";
import botswork from "../../assets/botswork.png";

const projects = [
    {
        id: 1,
        title: "Testing Management Application",
        role: " Front-End Developer",
        tech: "React JS (Front-end), Nest JS (Back-end)",
        image: testloom,
        details: "This application is designed to streamline software testing processes and generate comprehensive reports for customers.It automates test execution, identifies potential issues, and provides detailed insights to ensure software quality.Businesses can use this tool to detect bugs, optimize performance,and enhance product reliability before release."
    },
    {
        id: 2,
        title: "Task Management & Meeting Platform",
        image: yoolt,
        role: " Front-End Developer",
        tech: "React JS (Front-end), Nest JS (Back-end)",
        details: "This platform is designed to help businesses and teams efficiently manage tasks and meetings enables employers to assign, track, and prioritize tasks while providing a structured space for collaboration. The app streamlines team workflows, ensuring that tasks are completed on time and meetings remain productive."
    },
    {
        id: 3,
        title: "E-Learning Platform",
        role: " Front-End Developer",
        tech: "React JS (Front-end), Nest JS (Back-end)",
        image: talking,
        details: "This application is designed to streamline software testing processes and generate comprehensive reports for customers. It automates test execution, identifies potential issues, and provides detailed insights to ensure software quality. Businesses can use this tool to detect bugs, optimize performance, and enhance product reliability before release."
    },
    {
        id: 4,
        title: "Real-Estate Application",
        image: botswork,
        role: " Front-End Developer",
        tech: "React JS (Front-end), Nest JS (Back-end)",
        details: "This application serves as an autonomous business assistant designed to streamline real estate operations. It leverages AI-powered bots to handle repetitive tasks such as customer calls, soc media research, and email management. Users can book a demo to experience the automation firsthand, ensuring an efficient and hassle-free workflow."
    },
];

const Portfolio: React.FC = () => {
    const [selectedProject, setSelectedProject] = useState<{ title: string; details: string, image: string, role: string, tech: string } | null>(null);

    return (
        <Flex className={classes.projectContainer} direction="column">
            <Text className={classes.projectHeading}>MY PORTFOLIO</Text>
            <Flex className={classes.projectList}>
                {projects.map((project) => (
                    <Box key={project.id} className={classes.card1} onClick={() => setSelectedProject(project)}>
                        <Image src={project.image} className={classes.image} />
                        <Button className={classes.button}>View Project</Button>
                    </Box>
                ))}
            </Flex>
            {selectedProject && (
                <Box className={classes.overlay} onClick={() => setSelectedProject(null)}>
                    <Box className={classes.overlayContent} onClick={(e) => e.stopPropagation()}>
                        <CloseIcon size="20px" onClick={() => setSelectedProject(null)} style={{ display: 'flex', alignContent: 'flex-end', alignItems: 'flex-end' }} />
                        <Text className={classes.projectTitle}>{selectedProject.title}</Text>
                        <Flex className={classes.mainDetails}>
                            <Text className={classes.role}>Role:</Text>
                            <Text className={classes.role1}>{selectedProject.role}</Text>
                        </Flex>
                        <Flex className={classes.mainDetails}>
                            <Text className={classes.role}>Tech-Stack:</Text>
                            <Text className={classes.role1}>{selectedProject.tech}</Text>
                        </Flex>
                        <Flex className={classes.mainDetails}>
                            <Text className={classes.role}>Overview:</Text>
                            <Text className={classes.role1}>{selectedProject.details}</Text>
                        </Flex>
                        <Image src={selectedProject.image} className={classes.overlayImage} />
                    </Box>
                </Box>
            )}
        </Flex>
    );
};

export default Portfolio;
