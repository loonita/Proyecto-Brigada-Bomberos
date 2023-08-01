import { Button, ButtonGroup } from '@chakra-ui/react';
import { deleteCita } from '@/data/preparadorData';

const handleDelete = async (id) => {
  await deleteCita(id);
};

const BotonPreElim = ({id}) => {
  return (
    <Button colorScheme="red" onClick={() => handleDelete(id)}>
      Eliminar
    </Button>
  );
};

export default BotonPreElim;