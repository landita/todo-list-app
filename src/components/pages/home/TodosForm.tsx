import { Button, Modal, Box } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { TbPlus } from 'react-icons/tb';
import { ModalForm } from '../../ui';

export const TodosForm = () => {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <Box>
      <Modal
        opened={opened}
        onClose={close}
        title='Add New Task'
        centered
        overlayProps={{
          blur: 3,
        }}
      >
        <ModalForm close={close} />
      </Modal>
      <Button onClick={open} color='violet' rightIcon={<TbPlus size={20} />}>
        Add New Task
      </Button>
    </Box>
  );
};
