import { Stack, Text, Title } from "@mantine/core"
import classes from './Services.module.css'

export const ServiceInfo = (props) => {
    return(
        <Stack className={classes.serviceInfo} ta={"center"} align={"center"} w={300}>
            {props.icon}
            <Title ff={"'Josefin Sans', serif"}>{props.title}</Title>
            <Text>{props.desc}</Text>
        </Stack>
    )
}