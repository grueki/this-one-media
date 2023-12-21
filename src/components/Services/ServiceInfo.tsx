import { Stack, Text, Title } from "@mantine/core"
import classes from './Services.module.css'

export const ServiceInfo = (props) => {
    return(
        <Stack className={classes.serviceInfo} ta={"center"} align={"center"}>
            {props.icon}
            <Title ff={"'Josefin Sans', serif"} fz={"1.5rem"}>{props.title.toUpperCase()}</Title>
            <Text fz={"0.9rem"}>{props.desc}</Text>
        </Stack>
    )
}