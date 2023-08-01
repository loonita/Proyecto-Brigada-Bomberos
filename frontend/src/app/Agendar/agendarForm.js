import Link from "next/link";
import { Select } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { getBrigadistas, getNutricionistas } from "../../data/agendarData";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";

const AgendarForm = ({ agendar, setAgendar, handleSubmit }) => {
  const { nutricionista, brigadista, fecha, observaciones, planAlimenticio } =
    agendar;

  const [brigadistas, setBrigadistas] = useState([]);
  const [nutricionistas, setNutricionistas] = useState([]);

  const optionsBrigadistas = () => {
    return brigadistas.map((brigadista) => (
      <option key={brigadista._id} value={brigadista._id}>
        {brigadista.name}
      </option>
    ));
  };

  const optionsNutricionistas = () => {
    return nutricionistas.map((nutricionista) => (
      <option key={nutricionista._id} value={nutricionista._id}>
        {nutricionista.name}
      </option>
    ));
  };

  useEffect(() => {
    getBrigadistas().then((res) => {
      setBrigadistas(res.data);
    });
    getNutricionistas().then((res) => {
      setNutricionistas(res.data);
    });
  }, []);

  return (
    <Box p={8} borderRadius="md" bg="#313236" color="#F3F3FB">
      <form onSubmit={handleSubmit}>
        <FormControl mb={4}>
          <FormLabel htmlFor="nutricionista" fontWeight="bold">
            Nutricionista
          </FormLabel>
          <Select
            id="nutricionista"
            value={nutricionista}
            onChange={(e) =>
              setAgendar({ ...agendar, nutricionista: e.target.value })
            }
            bg="#F3F3FB"
            color="#313236"
          >
            <option value="">Seleccionar nutricionista</option>
            {optionsNutricionistas()}
          </Select>
        </FormControl>
        <FormControl mb={4}>
          <FormLabel htmlFor="brigadista" fontWeight="bold">
            Brigadista
          </FormLabel>
          <Select
            id="brigadista"
            value={brigadista}
            onChange={(e) =>
              setAgendar({ ...agendar, brigadista: e.target.value })
            }
            bg="#F3F3FB"
            color="#313236"
          >
            <option value="">Seleccionar brigadista</option>
            {optionsBrigadistas()}
          </Select>
        </FormControl>
        <FormControl mb={4}>
          <FormLabel htmlFor="fecha" fontWeight="bold">
            Fecha
          </FormLabel>
          <Input
            type="date"
            id="fecha"
            value={fecha}
            onChange={(e) => setAgendar({ ...agendar, fecha: e.target.value })}
            bg="#F3F3FB"
            color="#313236"
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel htmlFor="observaciones" fontWeight="bold">
            Observaciones
          </FormLabel>
          <Textarea
            id="observaciones"
            value={observaciones}
            onChange={(e) =>
              setAgendar({ ...agendar, observaciones: e.target.value })
            }
            bg="#F3F3FB"
            color="#313236"
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel htmlFor="planAlimenticio" fontWeight="bold">
            Plan alimenticio
          </FormLabel>
          <Textarea
            id="planAlimenticio"
            value={planAlimenticio}
            onChange={(e) =>
              setAgendar({ ...agendar, planAlimenticio: e.target.value })
            }
            bg="#F3F3FB"
            color="#313236"
          />
        </FormControl>

        <Box display="flex" justifyContent="center" mt={6}>
          <Button
            type="submit"
            colorScheme="yellow"
            fontWeight="bold"
            px={6}
            _hover={{ bg: "#FFA570" }}
          >
            Guardar
          </Button>
          <Link href="/Agendar">
            <Button
              colorScheme="red"
              fontWeight="bold"
              ml={4}
              px={6}
              _hover={{ bg: "#FFA570" }}
            >
              Atras
            </Button>
          </Link>
        </Box>
      </form>
    </Box>
  );
};

export default AgendarForm;
