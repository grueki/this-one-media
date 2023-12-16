import { Button, Group } from "@mantine/core"
import classes from './Navbar.module.css'

export const Navbar = ({ scrollHome, scrollAboutUs, scrollServices, scrollContact }) => {
    return(
        <Group py={10} justify="space-between" className={classes.group}>
            <Button color="rgba(255, 255, 255, 1)" variant="subtle" onClick={scrollHome}>HOME</Button>
            <Button color="rgba(255, 255, 255, 1)" variant="subtle" onClick={scrollAboutUs}>ABOUT US</Button>
            <Button color="rgba(255, 255, 255, 1)" variant="subtle" onClick={scrollServices}>SERVICES</Button>
            <Button color="rgba(255, 255, 255, 1)" variant="subtle" onClick={scrollContact}>CONTACT</Button>
        </Group>
    )
}