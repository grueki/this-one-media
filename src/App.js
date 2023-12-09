import './App.css';
import '@mantine/core/styles.css';
import { AppShell, Stack } from '@mantine/core';
import React from "react"
import { Jumbotron } from './components/Jumbotron/Jumbotron'
import { Navbar } from './components/Navbar/Navbar'
import { ServicesBlock } from './components/Services/ServicesBlock'

function App() {
  return (
    <AppShell header={{ height: 60 }}>
      <AppShell.Header>
        <Navbar/>
      </AppShell.Header>
      <AppShell.Main>
        <Stack>
          <Jumbotron/>
          <ServicesBlock/>
        </Stack>
      </AppShell.Main>
    </AppShell>
  );
}

export default App;
