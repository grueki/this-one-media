import './App.css';
import '@mantine/core/styles.css';
import { AppShell, Stack } from '@mantine/core';
import React from "react"
import { Jumbotron } from './components/Jumbotron/Jumbotron'
import { Navbar } from './components/Navbar/Navbar'
import { ServicesBlock } from './components/Services/ServicesBlock'
import { ContactForm } from './components/ContactForm/ContactForm'
import { AboutUs } from './components/AboutUs/AboutUs'
import { TheTeam } from './components/TheTeam/TheTeam'

function App() {
  return (
    <AppShell header={{ height: 60 }}>
      <AppShell.Header>
        <Navbar/>
      </AppShell.Header>
      <AppShell.Main>
        <Stack>
          <Jumbotron/>
          <AboutUs/>
          <TheTeam/>
          <ServicesBlock/>
          <ContactForm/>
        </Stack>
      </AppShell.Main>
    </AppShell>
  );
}

export default App;
