import { useEffect, useState } from "react";
import { Box, Text, VStack, Button } from "@chakra-ui/react";
import { getCitas, deleteCita } from "@/data/agendarData";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { getUsuarios } from "../../data/agendarData";
import { getUserByIdCSV } from "@/data/agendarData";

/* */ ///
const EditButton = ({ id }) => {
  const { push } = useRouter();
  return (
    <button
      onClick={() => push(`/Agendar/new/${id}`)}
      className="m-1 inline-block hover:bg-green-500 bg-green-700 text-white font-bold py-2 px-4 rounded"
    >
      Editar
    </button>
  );
};

const DeleteButton = ({ id, onCitaDeleted }) => {
  const handleDelete = async () => {
    try {
      await deleteCita(id);
      onCitaDeleted(id);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <button
        onClick={handleDelete}
        className="m-1 inline-block hover:bg-red-500 bg-red-700 text-white font-bold py-2 px-4 rounded"
      >
        Eliminar
      </button>
      <Link href="/Agendar/new"></Link>
    </div>
  );
};

export const AgendarList = () => {
  const [citas, setCitas] = useState([]);
  const [usuarios, setUsuarios] = useState([]);

  const handleDownloadCSV = async (userId) => {
    try {
      const csvData = await getUserByIdCSV(userId);
      if (csvData) {
        const blob = new Blob([csvData], { type: "text/csv" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "user_data.csv";
        a.click();
        URL.revokeObjectURL(url);
      } else {
        console.log("No se encontraron datos para el usuario");
      }
    } catch (error) {
      console.log("Error al obtener los datos del usuario: ", error);
    }
  };

  const router = useRouter();
  useEffect(() => {
    getCitas()
      .then((res) => {
        //console.log(res);
        if (res.state === "Success") {
          setCitas(res.data);
        }
      })
      .catch((error) => {
        console.log("Error fetching citas: ", error);
      });
  }, []);

  /*useEffect(() => {
    getUsuarios()
      .then((res) => {
        if (res.state === "Success") {
          setUsuarios(res.data);
        }
      })
      .catch((error) => {
        console.log("Error fetching usuarios: ", error);
      });
  }, []); */

  const handleDelete = async (citaId) => {
    setCitas(citas.filter((cita) => cita._id !== citaId));
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
            <Text>
              Nutricionista:{" "}
              {usuarios.find((u) => u._id === cita.nutricionista)?.name}
            </Text>
            <Text>
              Brigadista:{" "}
              {usuarios.find((u) => u._id === cita.brigadista)?.name}
            </Text>
            <Text>fecha: {cita.fecha}</Text>
            <Text>Observaciones: {cita.observaciones}</Text>
            <Text>Plan Alimenticio: {cita.planAlimenticio}</Text>
            <Box display="flex" alignItems="center" justifyContent="center">
              <EditButton
                id={cita._id}
                brigadista={cita._brigadista}
                fecha={cita.fecha}
                observaciones={cita.observaciones}
                planAlimenticio={cita.planAlimenticio}
              />
              <DeleteButton id={cita._id} onCitaDeleted={handleDelete} />
              <Button
                onClick={() => handleDownloadCSV(cita.nutricionista)}
                className="m-1 inline-block hover:bg-blue-500 bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Descargar Registros de Cita
              </Button>
            </Box>
          </Box>
        ))
      ) : (
        <Text>No hay citas disponibles.</Text>
      )}
    </VStack>
  );
};

export default AgendarList;
