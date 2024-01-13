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
                <div className={classes.cardImage}>
                    <Image
                        src={src}
                        alt={alt}
                        fit={"cover"}
                        style={{height: "100%", width: "100%"}}
                        fallbackSrc="https://placehold.co/600x400?text=Placeholder"
                    />
                </div>
                <Stack m={20} mr={50} justify={"center"} className={classes.cardText}>
                    <Text className={classes.textName} fz={"lg"} p={0} fw={700}>{name}</Text>
                    <Text c="gray" m={0} p={0} size="sm" fs={"italic"}>{jobTitle}</Text>
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