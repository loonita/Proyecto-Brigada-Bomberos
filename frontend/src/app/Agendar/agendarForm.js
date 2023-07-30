import Link from "next/link";
import { Select } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { getBrigadistas } from "../../data/agendarData";

const AgendarForm = ({ agendar, setAgendar, handleSubmit }) => {
  const { title, description, fecha, selectedOption } = agendar;

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

  const options = () => {
    return brigadistas.map((company) => {
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

  return (
    <form onSubmit={handleSubmit} className="max-w-sm">
      <div className="mb-4">
        <label htmlFor="title" className="block text-sm font-bold mb-2">
          Brigadista
        </label>
        <select
          id="selectedOption"
          className="shadow appearance-none border rounded w-full py-2 px-3 font-bold text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={selectedOption}
          onChange={(e) =>
            setAgendar({ ...agendar, selectedOption: e.target.value })
          }
        >
          <option value="">Seleccionar nombre de brigadista</option>
          {options()}
        </select>
      </div>
      <div className="mb-6">
        <label htmlFor="fecha" className="block  text-sm font-bold mb-2">
          Fecha
        </label>
        <textarea
          id="fecha"
          className="shadow appearance-none border rounded w-full py-2 font-bold px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={fecha}
          onChange={(e) => setAgendar({ ...agendar, fecha: e.target.value })}
        ></textarea>
      </div>
      <div className="mb-6">
        <label htmlFor="description" className="block  text-sm font-bold mb-2">
          Observaciones
        </label>
        <textarea
          id="description"
          className="shadow appearance-none border rounded w-full py-2 font-bold px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={description}
          onChange={(e) =>
            setAgendar({ ...agendar, description: e.target.value })
          }
        ></textarea>
      </div>

      <div className="mb-6">
        <label htmlFor="description" className="block  text-sm font-bold mb-2">
          Plan alimenticio
        </label>
        <textarea
          id="description"
          className="shadow appearance-none border rounded w-full py-2 font-bold px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={description}
          onChange={(e) =>
            setAgendar({ ...agendar, description: e.target.value })
          }
        ></textarea>
      </div>

      <div className="flex items-center justify-center">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Guardar
        </button>
        <Link href="/Agendar">
          <button className="inline-block hover:bg-red-500 bg-red-700 text-white font-bold py-2 px-4 rounded">
            Atras
          </button>
        </Link>
      </div>
    </form>
  );
};

export default AgendarForm;
