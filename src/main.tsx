import { MantineProvider } from '@mantine/core';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ParticlesLayout } from './components/ui';
import Home from './pages/home/Home';
import { Notifications } from '@mantine/notifications';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      withCSSVariables
      theme={{
        colorScheme: 'dark',
        fontFamily: "'Nunito', sans-serif;",
      }}
    >
      <Notifications />
      <ParticlesLayout />
      <Home />
    </MantineProvider>
  </React.StrictMode>,
);
