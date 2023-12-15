import { Button, Divider, Group, Stack, Text, Textarea, TextInput, Title } from "@mantine/core"
import { SubmitHandler, useForm } from "react-hook-form";

interface IFormInput {
    name: string;
    email: string;
    mobileNumber: string;
    message: string;
}

export const ContactForm = () => {
    const { register, handleSubmit } = useForm<IFormInput>()
    const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data)
    
    return(
        <form onSubmit={handleSubmit(onSubmit)}>
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
                        <TextInput placeholder="Email" {...register("email")}/>
                        <Group justify="space-between" grow>
                            <TextInput placeholder="Name" {...register("name")} />
                            <TextInput placeholder="Mobile" {...register("mobileNumber")} />
                        </Group>
                        <Textarea placeholder="Message" {...register("message")}/>
                    </Stack>
                </Group>
                <Button type="submit">Submit</Button>
            </Stack>
        </form>
        
        
    )
}