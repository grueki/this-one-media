import './App.css';
import '@mantine/core/styles.css';
import { AppShell, Stack, Text } from '@mantine/core';
import React from "react"
import { Jumbotron } from './components/Jumbotron/Jumbotron'
import { Navbar } from './components/Navbar/Navbar'
import { ServicesBlock } from './components/Services/ServicesBlock'
import { ContactForm } from './components/ContactForm/ContactForm'
import { AboutUs } from './components/AboutUs/AboutUs'
import { TheTeam } from './components/TheTeam/TheTeam'
import { useScrollIntoView } from '@mantine/hooks';

function App() {
  const { scrollIntoView, targetRef } = useScrollIntoView<HTMLDivElement>({
    offset: 60,
  });

  const scrollHome = () => {
    // scrollHomeIntoView({ alignment: "start" })
    console.log("fkdsfkdfdhsfkjdhfk")
  }

  return (
    <AppShell header={{ height: 60 }}>
      <AppShell.Header>
        <Navbar  
          scrollHome={() =>
            scrollIntoView({
              alignment: 'center',
            })} 
        />
      </AppShell.Header>
      <AppShell.Main>
        <Stack>
          <Jumbotron/>
          <AboutUs/>
          <TheTeam/>
          <Text ref={targetRef}>Hello there</Text>
          <ServicesBlock/>
          <ContactForm />
        </Stack>
      </AppShell.Main>
    </AppShell>
  );
}

export default App;
