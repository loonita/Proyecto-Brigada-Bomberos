import { useEffect, useState } from "react";
import { Box, Text, VStack, Button } from "@chakra-ui/react";
import { getCitas, deleteCita } from "@/data/agendarData";

export const AgendarList = () => {
  const [citas, setCitas] = useState([]);
  useEffect(() => {
    getCitas()
      .then((res) => {
        console.log(res);
        if (res.state === "Success") {
          setCitas(res.data);
        }
      })
      .catch((error) => {
        console.log("Error fetching citas: ", error);
      });
  }, []);

  const handleDelete = async (citaId) => {
    try {
      await deleteCita(citaId);
      setCitas((prevCita) => prevCita.filter((cita) => cita._id !== citaId));
    } catch (error) {
      console.log("Error deleting cita: ", error);
    }
  };

  return (
    <VStack spacing={4} align="stretch">
      {citas.length > 0 ? (
        citas.map((cita) => (
          <Box
            key={cita._id}
            p={4}
            borderWidth="1px"
            borderRadius="md"
            boxShadow="md"
          >
            <Text fontSize="lg" fontWeight="bold">
              {cita.title}
            </Text>
            <Text>Description: {cita.description}</Text>
            <Text>Date: {cita.date}</Text>
            <Text>Brigadista: {cita.brigadista}</Text>
            <Text>Observaciones: {cita.observaciones}</Text>
            <Text>Plan Alimenticio: {cita.planAlimenticio}</Text>
            <Button colorScheme="blue" size="sm" mt={2} mr={2}>
              Editar
            </Button>
            <Button
              colorScheme="red"
              size="sm"
              mt={2}
              onClick={() => handleDelete(cita._id)}
            >
              Eliminar
            </Button>
          </Box>
        ))
      ) : (
        <Text>No hay citas disponibles.</Text>
      )}
    </VStack>
  );
};

export default AgendarList;
