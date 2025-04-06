import { Flex, Text } from "@mantine/core";
import {
    SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, SiVite, SiBootstrap,
    SiRedux, SiMongodb, SiGit, SiBitbucket, SiGooglecloud
} from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { BsKanban } from "react-icons/bs";
import classes from './skills.module.css'

export default function SkillsList() {
    return (
        <Flex className={classes.main}>
        <Flex className={classes.skillMain}>
            <Flex className={classes.skillContainer}>
                <Flex direction="row" align="center">
                    <SiHtml5 className={classes.bulgingElement}/>
                    <Text>HTML5</Text>
                </Flex>
                <Flex direction="row" align="center">
                    <SiCss3 className={classes.bulgingElement} />
                    <Text>CSS3</Text>
                </Flex>
                <Flex direction="row" align="center">
                    <SiJavascript className={classes.bulgingElement} />
                    <Text>JAVASCRIPT(ES6+)</Text>
                </Flex>
                <Flex direction="row" align="center">
                    <SiTypescript className={classes.bulgingElement} />
                    <Text>TYPESCTRIPT</Text>
                </Flex>
                <Flex direction="row" align="center">
                    <SiVite className={classes.bulgingElement}/>
                    <Text>VITE</Text>
                </Flex>
                <Flex direction="row" align="center">
                    <SiReact className={classes.bulgingElement} />
                    <Text>REACT</Text>
                </Flex>
                <Flex direction="row" align="center">
                    <SiBootstrap className={classes.bulgingElement} />
                    <Text>BOOTSTRAP</Text>
                </Flex>
                <Flex direction="row" align="center">
                    <SiRedux className={classes.bulgingElement}/>
                    <Text>REDUX</Text>
                </Flex>
            </Flex>
            <Flex className={classes.skillContainer}>
                <Flex direction="row" align="center">
                    <SiMongodb className={classes.bulgingElement}/>
                    <Text>MONGODB</Text>
                </Flex>
                <Flex direction="row" align="center">
                    <FaGitAlt className={classes.bulgingElement}/>
                    <Text>GIT</Text>
                </Flex>
                <Flex direction="row" align="center">
                    <SiBitbucket className={classes.bulgingElement} />
                    <Text>BITBUCKET</Text>
                </Flex>
                <Flex direction="row" align="center">
                    <SiGit className={classes.bulgingElement}/>
                    <Text>GIT WORKFLOWS</Text>
                </Flex>
                <Flex direction="row" align="center">
                    <BsKanban className={classes.bulgingElement} />
                    <Text>CLICK UP</Text>
                </Flex>
                <Flex direction="row" align="center">
                    <SiGooglecloud className={classes.bulgingElement}/>
                    <Text>Knowledge of GCP</Text>
                </Flex>
            </Flex>
        </Flex>
        </Flex>
    );
}
