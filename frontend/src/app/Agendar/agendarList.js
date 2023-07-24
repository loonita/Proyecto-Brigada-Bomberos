"use client";
import { useEffect, useState } from "react";
import { createAgendar, getCitas, deleteAgendar } from "@/data/agendarData";
import { useRouter } from "next/navigation";

const CreateButton = ({ id }) => {
  const { push } = useRouter();
  return (
    <button
      onClick={() => push(`/Agendar/${id}`)}
      className="m-1 inline-block hover:bg-green-500 bg-green-700 text-white font-bold py-2 px-4 rounded"
    >
      Crear
    </button>
  );
};

const EditButton = ({ id }) => {
  const { push } = useRouter();
  return (
    <button
      onClick={() => push(`/Agendar/${id}`)}
      className="m-1 inline-block hover:bg-green-500 bg-green-700 text-white font-bold py-2 px-4 rounded"
    >
      Editar
    </button>
  );
};

const DeleteButton = ({ id, onAgendarDeleted }) => {
  const { push } = useRouter();
  const handleDelete = async () => {
    try {
      await deleteAgendar(id);
      onAgendarDeleted();
      push("/Agendar/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <button
      onClick={handleDelete}
      className="m-1 inline-block hover:bg-red-500 bg-red-700 text-white font-bold py-2 px-4 rounded"
    >
      Eliminar
    </button>
  );
};

export const AgendarList = () => {
  const [agendar, setAgendar] = useState([]);
  const [agendarDeleted, setAgendarDeleted] = useState(false);

  const handleAgendarDeleted = () => {
    setAgendarDeleted(!agendarDeleted); // Invierte el valor de taskDeleted para desencadenar el efecto
  };

  useEffect(() => {
    getCitas().then((res) => {
      if (res.success) {
        setAgendar(res.data);
        console.log(res.data);
      }
    });
  }, [agendarDeleted]);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Agendar</h1>
      {agendar.length > 0 ? (
        <ul className="space-y-4">
          {agendar?.map((agendar) => (
            <li key={agendar._id}>
              <h2 className="text-lg font-bold">{agendar.title}</h2>
              <p>{agendar.description}</p>
              <p>{agendar.date}</p>
              <CreateButton
                id={agendar._id}
                title={agendar.title}
                description={agendar.description}
              />
              <EditButton
                id={agendar._id}
                title={agendar.title}
                description={agendar.description}
              />
              <DeleteButton
                id={agendar._id}
                onAgendarDeleted={handleAgendarDeleted}
              />
            </li>
          ))}
        </ul>
      ) : (
        <p>No hay citas disponibles.</p>
      )}
    </div>
  );
};
