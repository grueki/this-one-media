import { Group } from "@mantine/core"
import { ServiceInfo } from "./ServiceInfo"

export const ServicesBlock = () => {
    return(
        <Group justify="space-between" px={300} py={100}>
            <ServiceInfo/>
            <ServiceInfo/>
            <ServiceInfo/>
        </Group>
    )
}