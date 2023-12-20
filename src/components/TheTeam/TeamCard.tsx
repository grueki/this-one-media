import { Card, Divider, Group, Image, Stack, Text } from "@mantine/core"
import classes from "./TheTeam.module.css"

interface TeamCardProps {
    src: string,
    name: string,
    jobTitle: string,
    description: string[],
    alt?: string
}

export const TeamCard = ({ src, name, jobTitle, description, alt } : TeamCardProps) => {
    return (
        <Card className={classes.card} mt={50} shadow="sm" padding="lg" radius="md" withBorder>
            <Group>
                <Card.Section>
                    <Image
                        src={src}
                        h={300}
                        w={300}
                        alt={alt}
                    />
                </Card.Section>
                <Stack p={50} w={500}>
                    <Group justify="space-between" mt="md" mb="xs">
                        <Text>{name}</Text>
                        <Text>{jobTitle}</Text>
                    </Group>
                    <Divider/>

                    {description.map((descLine) => 
                        <Text size="sm">
                            {descLine}
                        </Text>
                    )}
                </Stack>
            </Group>
        </Card>
    )
}