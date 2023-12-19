import { Stack, Text, Title } from "@mantine/core"

export const ServiceInfo = (props) => {
    return(
        <Stack ta={"center"} align={"center"} w={300}>
            {props.icon}
            <Title ff={"'Josefin Sans', serif"}>{props.title}</Title>
            <Text>{props.desc}</Text>
        </Stack>
    )
}