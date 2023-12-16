import './App.css';
import '@mantine/core/styles.css';
import { AppShell, Stack, Text } from '@mantine/core';
import React from "react"
import { useRef } from "react"
import { Jumbotron } from './components/Jumbotron/Jumbotron'
import { Navbar } from './components/Navbar/Navbar'
import { ServicesBlock } from './components/Services/ServicesBlock'
import { ContactForm } from './components/ContactForm/ContactForm'
import { AboutUs } from './components/AboutUs/AboutUs'
import { TheTeam } from './components/TheTeam/TheTeam'

function App() {
  let home = useRef();
  let aboutUs = useRef();
  let services = useRef();
  let contact = useRef();

  const scrollHome = () => {
    // scrollHomeIntoView({ alignment: "start" })
    console.log("fkdsfkdfdhsfkjdhfk")
  }

  return (
    <AppShell header={{ height: 60 }}>
      <AppShell.Header>
        <Navbar  
          scrollHome={() =>
            home.current.scrollIntoView({ behavior: "smooth", block: "center" })} 
          scrollAboutUs={() =>
            aboutUs.current.scrollIntoView({ behavior: "smooth", block: "center" })} 
          scrollServices={() =>
            services.current.scrollIntoView({ behavior: "smooth", block: "center" })} 
          scrollContact={() =>
            contact.current.scrollIntoView({ behavior: "smooth", block: "center" })} 
        />
      </AppShell.Header>
      <AppShell.Main>
        <Stack>
          <div ref={home}>
            <Jumbotron/>
          </div>
          <AboutUs/>
          <div ref={aboutUs}>
            <TheTeam/>
          </div>
          <div ref={services}>
            <ServicesBlock />
          </div>
          <div ref={contact}>
            <ContactForm />
          </div>
        </Stack>
      </AppShell.Main>
    </AppShell>
  );
}

export default App;
