import { Container, Group } from "@mantine/core"
import { ServiceInfo } from "./ServiceInfo"

export const ServicesBlock = () => {
    return(
        <Container>
            <Group>
                <ServiceInfo/>
                <ServiceInfo/>
                <ServiceInfo/>
            </Group>
        </Container>
    )
}