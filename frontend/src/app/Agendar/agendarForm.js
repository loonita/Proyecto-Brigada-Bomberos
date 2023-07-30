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

  const [brigadistas, setBrigadistas] = useState([
    {
      id: "",
      nombre: "",
      email: "",
      roles: [],
      peso: 0.0,
      altura: 0.0,
      fechaNacimiento: null,
      genero: "",
      telefono: "",
      rut: "",
      domicilio: "",
      imc: 0.0,
    },
  ]);

  const [nutricionistas, setNutricionistas] = useState([
    {
      id: "",
      nombre: "",
      email: "",
      roles: [],
      peso: 0.0,
      altura: 0.0,
      fechaNacimiento: null,
      genero: "",
      telefono: "",
      rut: "",
      domicilio: "",
      imc: 0.0,
    },
  ]);

  const optionsBrigadistas = () => {
    return brigadistas.map((company) => {
      return (
        <option key={company._id} value={company._id}>
          {company.name}
        </option>
      );
    });
  };

  const optionsNutricionistas = () => {
    return nutricionistas.map((company) => {
      return (
        <option key={company._id} value={company._id}>
          {company.name}
        </option>
      );
    });
  };

  useEffect(() => {
    getBrigadistas().then((res) => {
      setBrigadistas(res.data);
    });
  }, []);

  useEffect(() => {
    getNutricionistas().then((res) => {
      setNutricionistas(res.data);
    });
  }, []);

  return (
    <Box p={4}>
      <form onSubmit={handleSubmit}>
        <FormControl mb={4}>
          <FormLabel htmlFor="nutricionista" fontSize="sm" fontWeight="bold">
            Nutricionista
          </FormLabel>
          <Select
            id="nutricionista"
            value={nutricionista}
            onChange={(e) =>
              setAgendar({ ...agendar, nutricionista: e.target.value })
            }
          >
            <option value="">Seleccionar nombre de nutricionista</option>
            {optionsNutricionistas()}
          </Select>
        </FormControl>
        <FormControl mb={4}>
          <FormLabel htmlFor="brigadista" fontSize="sm" fontWeight="bold">
            Brigadista
          </FormLabel>
          <Select
            id="brigadista"
            value={brigadista}
            onChange={(e) =>
              setAgendar({ ...agendar, brigadista: e.target.value })
            }
          >
            <option value="">Seleccionar nombre de brigadista</option>
            {optionsBrigadistas()}
          </Select>
        </FormControl>
        <FormControl mb={6}>
          <FormLabel htmlFor="fecha" fontSize="sm" fontWeight="bold">
            Fecha
          </FormLabel>
          <Input
            type="date"
            id="fecha"
            value={fecha}
            onChange={(e) => setAgendar({ ...agendar, fecha: e.target.value })}
          />
        </FormControl>
        <FormControl mb={6}>
          <FormLabel htmlFor="observaciones" fontSize="sm" fontWeight="bold">
            Observaciones
          </FormLabel>
          <Textarea
            id="observaciones"
            value={observaciones}
            onChange={(e) =>
              setAgendar({ ...agendar, observaciones: e.target.value })
            }
          />
        </FormControl>
        <FormControl mb={6}>
          <FormLabel htmlFor="planAlimenticio" fontSize="sm" fontWeight="bold">
            Plan alimenticio
          </FormLabel>
          <Textarea
            id="planAlimenticio"
            value={planAlimenticio}
            onChange={(e) =>
              setAgendar({ ...agendar, planAlimenticio: e.target.value })
            }
          />
        </FormControl>

        <Box display="flex" alignItems="center" justifyContent="center">
          <Button
            type="submit"
            bg="blue.500"
            _hover={{ bg: "blue.700" }}
            color="white"
            fontWeight="bold"
            py={2}
            px={4}
            rounded="md"
            outline="none"
            boxShadow="outline"
            mr={4}
          >
            Guardar
          </Button>
          <Link href="/Agendar">
            <Button
              bg="red.700"
              _hover={{ bg: "red.500" }}
              color="white"
              fontWeight="bold"
              py={2}
              px={4}
              rounded="md"
              outline="none"
              boxShadow="outline"
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
