import { TextInput, Textarea, Checkbox, Button } from '@mantine/core';
import { DateInput } from '@mantine/dates';
import { useForm, yupResolver } from '@mantine/form';
import { TbPencil, TbCheck } from 'react-icons/tb';
import { notifications } from '@mantine/notifications';
import * as Yup from 'yup';
import { todoStore } from '../../store';

interface Props {
  close: () => void;
}

const schema = Yup.object().shape({
  title: Yup.string().required(),
  description: Yup.string().required(),
  owner: Yup.string().required(),
  isCompleted: Yup.bool().required(),
  date: Yup.date().required(),
});

export const ModalForm = ({ close }: Props) => {
  const { todos, addTodo } = todoStore((state) => state);
  const form = useForm({
    initialValues: {
      id: 0,
      title: '',
      description: '',
      owner: '',
      isCompleted: false,
      date: new Date(),
    },
    validate: yupResolver(schema),
    validateInputOnBlur: true,
    validateInputOnChange: true,
  });
  return (
    <form
      onSubmit={form.onSubmit((values) => {
        values.id = todos.length + 1;
        addTodo(values);
        close();
        notifications.show({
          autoClose: 5000,
          title: 'Your task has been added',
          message: `Checkout The ${
            values.isCompleted ? 'Completed Tasks Tab' : 'Pending Tasks Tab'
          }`,
          color: 'green',
          icon: <TbCheck />,
          loading: false,
        });
      })}
    >
      <TextInput
        label='Title'
        placeholder='Add a Title'
        data-autofocus
        withAsterisk
        {...form.getInputProps('title')}
      />
      <Textarea
        label='Description'
        placeholder='Description Goes Here...'
        mt={10}
        withAsterisk
        {...form.getInputProps('description')}
      />
      <TextInput
        label='Owner'
        placeholder='Example: Kevin Torres'
        mt={10}
        withAsterisk
        {...form.getInputProps('owner')}
      />
      <Checkbox
        label='Is This Task Completed?'
        mt={20}
        {...form.getInputProps('isCompleted')}
      />
      <DateInput
        valueFormat='YYYY MMM DD'
        label='Date'
        mt={10}
        {...form.getInputProps('date')}
      />
      <Button mt={10} type='submit' rightIcon={<TbPencil />} color='violet'>
        Save
      </Button>
    </form>
  );
};
