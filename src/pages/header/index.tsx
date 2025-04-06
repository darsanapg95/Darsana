import { Flex, Text } from "@mantine/core";
import classes from './header.module.css';
const Header: React.FC = () => {
    return (
        <Flex className={classes.headerContainer}>
            <Flex className={classes.headerLeft}>
                <Text className={classes.name}>DARSANA P.G | WEB DEVELOPER</Text>
            </Flex>
            <Flex className={classes.headerRight}>
                <Text className={classes.text}>Home</Text>
                <Text className={classes.text}>About</Text>
                <Text className={classes.text}>Portfolio</Text>
                <Text className={classes.text}>Contact</Text>
            </Flex>
        </Flex>
    );
};

export default Header;
