import { Flex } from "@mantine/core";
import Header from "../header";
import Intro from "../intro";
import About from "../about";
import Portfolio from "../portfolio";
import Contact from "../contact";
import classes from "./home.module.css";
const Home: React.FC = () => {
    return (
        <Flex direction="column" className={classes.main}>
            <Header/>
            <Intro/>
            <About/>
            <Portfolio/>
            <Contact/>
        </Flex>
    )
}
export default Home;