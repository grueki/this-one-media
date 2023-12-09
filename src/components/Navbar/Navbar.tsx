import { Button, Group } from "@mantine/core"
import classes from './Navbar.module.css'

export const Navbar = () => {
    return(
        <Group py={10} justify="space-between" className={classes.group}>
            <Button color="rgba(255, 255, 255, 1)" variant="subtle">HOME</Button>
            <Button color="rgba(255, 255, 255, 1)" variant="subtle">SERVICES</Button>
            <Button color="rgba(255, 255, 255, 1)" variant="subtle">CONTACT</Button>
        </Group>
    )
}