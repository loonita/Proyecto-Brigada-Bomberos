import Link from "next/link";
import { Select } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { getBrigadistas } from "../../data/agendarData";

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
        <label htmlFor="brigadista" className="block text-sm font-bold mb-2">
          Brigadista
        </label>
        <select
          id="brigadista"
          className="shadow appearance-none border rounded w-full py-2 px-3 font-bold text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={brigadista}
          onChange={(e) =>
            setAgendar({ ...agendar, brigadista: e.target.value })
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
        <input
          type="date"
          id="fecha"
          className="shadow appearance-none border rounded w-full py-2 font-bold px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={fecha}
          onChange={(e) => setAgendar({ ...agendar, fecha: e.target.value })}
        ></input>
      </div>
      <div className="mb-6">
        <label htmlFor="observaciones" className="block text-sm font-bold mb-2">
          Observaciones
        </label>
        <textarea
          id="observaciones"
          className="shadow appearance-none border rounded w-full py-2 font-bold px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={observaciones}
          onChange={(e) =>
            setAgendar({ ...agendar, observaciones: e.target.value })
          }
        ></textarea>
      </div>

      <div className="mb-6">
        <label
          htmlFor="planAlimenticio"
          className="block  text-sm font-bold mb-2"
        >
          Plan alimenticio
        </label>
        <textarea
          id="planAlimenticio"
          className="shadow appearance-none border rounded w-full py-2 font-bold px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={planAlimenticio}
          onChange={(e) => {
            console.log(planAlimenticio);
            setAgendar({ ...agendar, planAlimenticio: e.target.value });
          }}
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
