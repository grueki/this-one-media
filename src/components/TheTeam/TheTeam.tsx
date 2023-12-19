import { BackgroundImage, Center, Group, Stack, Text, Title } from "@mantine/core"
import classes from "./AboutUs.module.css"

export const TheTeam = () => {
    return(
        <Stack bg="#120e0b"  align="center" py={100}>
            <Title c="white" fz="3rem" ff={"'Josefin Sans', serif"}>THE TEAM</Title>
            <Group justify="space-between">
                <Center>
                    <Stack className={classes.infoCard} w="400" p={50} align={"center"} bg={"white"}>
                        <BackgroundImage className={classes.aboutUsImage} src={"https://raw.githubusercontent.com/grueki/this-one-media-images/main/img/david2.jpg"}/>
                        <Title className={classes.infoCardTitle} ta={"center"}>David Fu</Title>
                        <Text className={classes.infoCardText} ta={"center"} fs="italic">Co-director & Photographer </Text>
                        <Text className={classes.infoCardText} ta={"center"}>I work to create the magic of your brand that captures the audience's attention through still imagery.<br/><br/>I also drive everyone from A to B.</Text>
                    </Stack>
                    <Stack className={classes.infoCard} w="400" p={50} align={"center"} bg={"white"}>
                        <BackgroundImage className={classes.aboutUsImage} src={"https://raw.githubusercontent.com/grueki/this-one-media-images/main/img/ari2.jpg"}/>
                        <Title className={classes.infoCardTitle} ta={"center"}>Ari Boughen</Title>
                        <Text className={classes.infoCardText} ta={"center"} fs="italic">Co-director & Videographer</Text>
                        <Text className={classes.infoCardText} ta={"center"}>I create stunning visuals through the lens of my camera and bring those stories to life in the editing suite.<br/><br/>Occasionally nocturnal.</Text>
                    </Stack> 
                </Center>           
            </Group>
        </Stack>
    )
}