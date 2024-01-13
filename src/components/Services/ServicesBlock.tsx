import { Divider, Group, Stack, Title } from "@mantine/core"
import { ServiceInfo } from "./ServiceInfo"
import { IconCamera, IconGift, IconVideo } from "@tabler/icons-react"
import classes from './Services.module.css'
import common from '../Common.module.css'

export const ServicesBlock = ({ ref }) => {
    return(
        <Stack align={"center"} py={100}>
            <Stack>
                <Title c="white" ta="center" ref={ref} ff={"'Josefin Sans', serif"} fz="3rem" >SERVICES</Title>
                <Divider className={common.div} color="white"/>
            </Stack>
            <Group c="white" m={50} justify={"space-between"} className={classes.servicesBlock}>
                <ServiceInfo icon={<IconVideo style={{ width: "6rem", height: "6rem" }} />} title={"Photography"} desc={"From top of the line headshots to product-shots to event photography, David Fu is here to capture every moment in extraordinary detail."}/>
                <ServiceInfo icon={<IconCamera style={{ width: "6rem", height: "6rem" }} />} title={"Videography"} desc={"At the core of every video is a compelling story. Ari Boughen specialises in bringing your narratives to life for any platform."}/>
                <ServiceInfo icon={<IconGift style={{ width: "6rem", height: "6rem" }} />} title={"The Total Package"} desc={"Revitalise your brand’s entire image with the full strength of our combined photo & video powers. "}/>
            </Group>
        </Stack>
    )
}