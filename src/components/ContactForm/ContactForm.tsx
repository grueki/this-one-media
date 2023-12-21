import { Button, Divider, Group, Stack, Text, Textarea, TextInput, Title } from "@mantine/core"
import { SubmitHandler, useForm } from "react-hook-form";
import emailjs from '@emailjs/browser'
import { useRef } from "react";

interface IFormInput {
    name: string;
    email: string;
    mobileNumber: string;
    message: string;
}

export const ContactForm = () => {
    let form = useRef();

    const { register, handleSubmit } = useForm<IFormInput>()
    const onSubmit : SubmitHandler<IFormInput> = () => {
        emailjs.sendForm("service_xaf7d4h", "template_dxo0jrw", form.current, "K7nK_5cfMAgsFoWFu");
    } 
    
    return(
        <Stack align={"center"} py={50}>
            <Stack>
                <Title c="white" ta="center" ff={"'Josefin Sans', serif"} fz="3rem" >CONTACT US</Title>
                <Divider color="white" w={800}/>
            </Stack>
            <form ref={form} onSubmit={handleSubmit(onSubmit)}>
                
                <Stack my={50} align="center" bg={"#120e0b"}>
                    <Group my={50} justify="center">
                        <Stack ta={"right"} w={400}>
                            <Title c={"#ffffff"}>
                                LIKE WHAT YOU SEE?
                            </Title>
                            <Text c={"#ffffff"}>
                                Get in touch with us using the form opposite. We’ll get back to you as soon as we can. <br/>
                                We look forward to working with you!
                            </Text>
                        </Stack>
                        <Stack mx={50} w={400}>
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
        </Stack>
    )
}