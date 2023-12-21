import { Card, Divider, Group, Image, Paper, Stack, Text } from "@mantine/core"
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
        <Card className={classes.card} mt={25} shadow="sm" radius="md" withBorder>
            <Group>
                <Paper className={classes.cardImage}>
                    <Image
                        src={src}
                        alt={alt}
                    />
                </Paper>
                
                <Stack m={0} className={classes.cardText}>
                    <Group justify="space-between">
                        <Text>{name}</Text>
                        <Text fs={"italic"}>{jobTitle}</Text>
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