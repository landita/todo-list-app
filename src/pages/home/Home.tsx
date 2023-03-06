import { useState } from 'react';
import { Container, Tabs, Title, Group } from '@mantine/core';
import { Todos, TodosForm } from '../../components/pages/home';

const Home = () => {
  const [activeTab, setActiveTab] = useState<string | null>('pending');

  return (
    <Container
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Group mb={20}>
        <Title order={2} fw={700}>
          Todo list App
        </Title>
        <TodosForm />
      </Group>
      <Tabs
        value={activeTab}
        onTabChange={setActiveTab}
        w='100%'
        color='violet'
      >
        <Tabs.List>
          <Tabs.Tab value='pending'>Pending Tasks</Tabs.Tab>
          <Tabs.Tab value='completed' color='violet'>
            Completed Tasks
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value='pending' pt='xs'>
          <Todos showCompletedTask={false} />
        </Tabs.Panel>

        <Tabs.Panel value='completed' pt='xs'>
          <Todos showCompletedTask={true} />
        </Tabs.Panel>
      </Tabs>
    </Container>
  );
};
export default Home;
