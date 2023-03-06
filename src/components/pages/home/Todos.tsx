import { Table, Group, ActionIcon, Checkbox } from '@mantine/core';
import { TbTrash } from 'react-icons/tb';
import { format } from 'date-fns';
import { todoStore } from '../../../store';

interface Props {
  showCompletedTask: boolean;
}

export const Todos = ({ showCompletedTask }: Props) => {
  const { todos, setIsComplete, deleteTodo } = todoStore((state) => state);

  return (
    <Table
      striped
      highlightOnHover
      withColumnBorders
      withBorder
      sx={{
        textAlign: 'center',
      }}
    >
      <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Description</th>
          <th>Owner</th>
          <th>Date Release</th>
          <th>Is Completed</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {todos.filter((curr) => curr.isCompleted === showCompletedTask).length <
          1 && (
          <tr>
            <td colSpan={7}>No data available yet</td>
          </tr>
        )}
        {todos
          .filter((curr) => curr.isCompleted === showCompletedTask)
          .map((curr) => (
            <tr key={curr.id}>
              <td>{curr.id}</td>
              <td>{curr.title}</td>
              <td>{curr.description}</td>
              <td>{curr.owner}</td>
              <td>{format(new Date(curr.date), 'dd/MM/yyyy')}</td>
              <td>
                {
                  <Checkbox
                    defaultChecked={curr.isCompleted}
                    onClick={() => setIsComplete(curr.id!)}
                  />
                }
              </td>
              <td>
                <Group onClick={() => deleteTodo(curr.id!)}>
                  <ActionIcon>
                    <TbTrash size={20} color='red' />
                  </ActionIcon>
                </Group>
              </td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
};
