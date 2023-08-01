"use client"
import { useEffect, useState } from "react";
import { Box, Text, VStack, Button } from "@chakra-ui/react";
import { getPreparadores } from "@/data/preparadorData";
import BotonPreElim from "@/components/BotonPreElim";
import BotonPreMod from "@/components/BotonPreMod";

const PreparadorList = () => {
  const [citasPre, setcitasPre] = useState([]);

  useEffect(() => {
    getPreparadores()
      .then((res) => {
        console.log(res);
        if (res.state === "Success") {
          setcitasPre(res.data);
        }
      })
      .catch((error) => {
        console.log("Error fetching citasPre: ", error);
      });
  }, []);

  return (
    <VStack spacing={4} align="stretch" bg="gray.800" color="white" p={4}>
      {citasPre.length > 0 ? (
        citasPre.map((cita) => (
          <Box
            key={cita._id}
            p={4}
            borderWidth="1px"
            borderRadius="md"
            boxShadow="md"
            bg="#778D45" // Color amarillo para cada cuadro
          >
            <Text>fecha: {cita.fecha}</Text>
            <Text>Brigadista: {cita.brigadista.name}</Text>
            <Text>Nombre Ejericio/s: {cita.nombreEjercicio}</Text>
            <Text>categoria de Rutina: {cita.categoriaEjercicio}</Text>
            <Text>Enfoque y comentarios Rutina: {cita.enfoqueEjercicio}</Text>
            <Text>series Ejercicio: {cita.seriesEjercicio}</Text>
            <Text>repeticiones Ejercicio: {cita.repeticionesEjercicio}</Text>
            <Box>
              <BotonPreMod id={cita._id} />
              <BotonPreElim id={cita._id} />
            </Box>
          </Box>
        ))
      ) : (
        <Text>No hay citasPre disponibles.</Text>
      )}
    </VStack>
  );
};

export default PreparadorList;