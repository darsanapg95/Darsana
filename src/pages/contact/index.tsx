import { Button, Flex, Image, Text, Textarea, TextInput } from "@mantine/core";
import classes from './contact.module.css';
import mail from '../../assets/mail.svg';
import phone from '../../assets/phone.svg';

const Contact: React.FC = () => {
    return (
        <Flex className={classes.contactContainer}>
            <Flex className={classes.heading}>
                <Text className={classes.text}>GET IN TOUCH</Text>
            </Flex>
            <Flex className={classes.contactCard}>
                <Flex className={classes.contactInfo}>
                    <Text className={classes.talk}>LET'S TALK ABOUT YOUR PROJECT</Text>
                    <Text className={classes.desc}>Feel free to get in touch with me.I am always open to discussing new projects,creative ideas or oportunities to be part of your vision.</Text>
                    <Flex className={classes.mail_phone}>
                        <Image src={mail} className={classes.image} />
                        <a href="mailto:darsanapg95@gmail.com" className={classes.mail_phone_text}>darsanapg95@gmail.com</a>
                    </Flex>
                    <Flex className={classes.mail_phone}>
                        <Image src={phone} className={classes.image} />
                        <a href="tel:+919846889579" className={classes.mail_phone_text}>
                            +91 98468 89579
                        </a>
                    </Flex>
                </Flex>
                <Flex className={classes.input}>
                    <TextInput placeholder="Name" classNames={{ input: classes.inner_input }} />
                    <TextInput placeholder="Email" classNames={{ input: classes.inner_input }} />
                    <TextInput placeholder="Phone Number" classNames={{ input: classes.inner_input }} />
                    <TextInput placeholder="Subject" classNames={{ input: classes.inner_input }} />
                    <Textarea placeholder="Message" classNames={{ input: classes.textArea }} />
                    <Button className={classes.button}>
                    </Button>
                </Flex>
            </Flex>
        </Flex>
    )
}
export default Contact;