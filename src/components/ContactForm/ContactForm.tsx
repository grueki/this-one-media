import { Button, Divider, Group, Stack, Text, Textarea, TextInput, Title } from "@mantine/core"

export const ContactForm = () => {
    return(
        <Stack align="center" bg={"#120e0b"} p={100}>
            <Group justify="center">
                <Stack mx={50} ta={"right"}>
                    <Title c={"#ffffff"}>
                        LIKE WHAT YOU SEE?
                    </Title>
                    <Text c={"#ffffff"}>
                        Get in touch with us using the form opposite. We’ll get back to you as soon as we can. <br/>
                        We look forward to working with you!
                    </Text>
                </Stack>
                <Divider size="sm" orientation="vertical" />
                <Stack mx={50}>
                    <TextInput placeholder="Name" />
                    <Group justify="space-between" grow>
                        <TextInput placeholder="Email" />
                        <TextInput placeholder="Mobile" />
                    </Group>
                    <Textarea placeholder="Message"/>
                </Stack>
            </Group>
            <Button>Submit</Button>
        </Stack>
        
        
    )
}