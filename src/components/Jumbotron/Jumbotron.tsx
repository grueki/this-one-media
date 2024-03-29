import { BackgroundImage, Center, Group, Stack, Text, Title } from "@mantine/core"
import classes from "./Jumbotron.module.css"

export const Jumbotron = ({ ref }) => {
    return(
        <Group ref={ref} className={classes.main}>
            <BackgroundImage className={classes.jumboBG} src='https://raw.githubusercontent.com/grueki/this-one-media-images/main/img/jumbotron-crop-sm.jpg'>
                <Center style={{width: "100%"}}>
                    <Stack align={"center"} >
                        <Title className={classes.jumboTitle}> This One Media </Title>
                        <Text align="center" className={classes.jumboText} size="lg">
                        ELEVATING YOUR BRAND IMAGE WITH STYLE
                        </Text>
                    </Stack>
                </Center>
            </BackgroundImage>
        </Group>
    )
}