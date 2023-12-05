import { Blockquote, Button, Container, Text, TextInput } from "@mantine/core"

export const TestComponent = () => {
    return (
        <Container>
            <Text>Hello!!</Text>
            <Blockquote>"BROCKHAMPTON limited edition Gummy Happy Meal by McDonalds (tm)"</Blockquote>
            <TextInput/>
            <Button variant="filled">Button</Button>
        </Container>
    )
}