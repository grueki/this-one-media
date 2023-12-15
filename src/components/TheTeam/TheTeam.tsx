import { BackgroundImage, Group, Stack, Text, Title } from "@mantine/core"
import classes from "./AboutUs.module.css"

export const TheTeam = () => {
    return(
        <Stack bg="#120e0b"  align="center" p={100}>
            <Title c="white" fz="3rem" ff={"'Josefin Sans', serif"}>THE TEAM</Title>
            <Group w="50%" justify="space-between" py={50}>
                <Stack w="400" p={50} align={"center"} bg={"white"}>
                    <BackgroundImage className={classes.aboutUsImage} src={"https://raw.githubusercontent.com/grueki/this-one-media-images/main/img/david2.jpg"}/>
                    <Title>David Fu</Title>
                    <Text fs="italic">Co-director & Photographer </Text>
                    <Text ta={"center"}>I work to create the magic of your brand that captures the audience's attention through still imagery.<br/><br/>I also drive everyone from A to B.</Text>
                </Stack>
                <Stack w="400" p={50} align={"center"} bg={"white"}>
                    <BackgroundImage className={classes.aboutUsImage} src={"https://raw.githubusercontent.com/grueki/this-one-media-images/main/img/ari2.jpg"}/>
                    <Title>Ari Boughen</Title>
                    <Text fs="italic">Co-director & Videographer</Text>
                    <Text ta={"center"}>I create stunning visuals through the lens of my camera and bring those stories to life in the editing suite.<br/><br/>Occasionally nocturnal.</Text>
                </Stack>            
            </Group>
        </Stack>
    )
}