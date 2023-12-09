import { Center, Container, Divider, Group, Image, Stack, Text, Title } from "@mantine/core"
import classes from "./Jumbotron.module.css"

export const Jumbotron = () => {
    return(
        <Group className={classes.main}>
            <Container className={classes.jumboImage}>
                <Image h={700} src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-1.png"/>
            </Container>
            <Center className={classes.jumboText}>
                <Stack>
                    <Title> Generic header text. </Title>
                    <Text size="lg">
                        Then we can have a little blurb, or body text down here. A one sentence kick that will stick in people's minds.<br/>
                        What does your company do, and what sets you apart from others?
                    </Text>
                </Stack>
            </Center>
        </Group>
    )
}