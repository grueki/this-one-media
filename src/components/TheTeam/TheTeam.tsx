import { Divider, Stack, Title } from "@mantine/core"
import { TeamCard } from "./TeamCard"

export const TheTeam = () => {
    return(
        <Stack bg="#120e0b"  align="center" py={100}>
            <Stack w={800}>
                <Title ta={"center"} c="white" fz="3rem" ff={"'Josefin Sans', serif"}>THE TEAM</Title>
                <Divider color="white"/>
            </Stack>
            
            <TeamCard src={"https://raw.githubusercontent.com/grueki/this-one-media-images/main/img/david2.jpg"}
                name={"David Fu"}
                jobTitle={"Co-director & Photographer"}
                description={["I work to create the magic of your brand that captures the audience's attention through still imagery.", "I also drive everyone from A to B."]}
                alt={"Photographer David Fu holding a camera up to his face."}
            />
            <TeamCard src={"https://raw.githubusercontent.com/grueki/this-one-media-images/main/img/ari2.jpg"}
                name={"Ari Boughen"}
                jobTitle={"Co-director & Videographer"}
                description={["I create stunning visuals through the lens of my camera and bring those stories to life in the editing suite.", "Occasionally nocturnal."]}
                alt={"Videographer Ari Boughen with a camera in hand."}
            /> 
        </Stack>
    )
}