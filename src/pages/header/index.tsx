import { Flex, Text } from "@mantine/core";
import classes from './header.module.css';

const Header: React.FC = () => {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <Flex className={classes.headerContainer}>
            <Flex className={classes.headerLeft}>
                <Text className={classes.name}>DARSANA P.G | WEB DEVELOPER</Text>
            </Flex>
            <Flex className={classes.headerRight}>
                <Text className={classes.text} onClick={() => scrollToSection('home')} style={{ cursor: 'pointer' }}>
                    Home
                </Text>
                <Text className={classes.text} onClick={() => scrollToSection('about')} style={{ cursor: 'pointer' }}>
                    About
                </Text>
                <Text className={classes.text} onClick={() => scrollToSection('portfolio')} style={{ cursor: 'pointer' }}>
                    Portfolio
                </Text>
                <Text className={classes.text} onClick={() => scrollToSection('contact')} style={{ cursor: 'pointer' }}>
                    Contact
                </Text>
            </Flex>
        </Flex>
    );
};

export default Header;
