import { Button, ButtonGroup } from '@chakra-ui/react';
import { updateCita } from '@/data/preparadorData';

const handleUpdate = async (id) => {
  await editarCita(id);
};

const BotonPreMod = ({id}) => {
  return (
    <Button colorScheme="blue" onClick={() => handleUpdate(id)}>
      Editar
    </Button>
  );
};

export default BotonPreMod;