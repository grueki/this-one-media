import './App.css';
import '@mantine/core/styles.css';
import { AppShell } from '@mantine/core';
import React from "react"
import { TestComponent } from './components/TestComponent'

function App() {
  return (
    <AppShell header={{ height: 60 }}>
      <AppShell.Header/>
      <AppShell.Main>
        <TestComponent/>
      </AppShell.Main>
    </AppShell>
  );
}

export default App;
