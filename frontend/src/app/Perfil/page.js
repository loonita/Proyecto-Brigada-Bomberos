import React from "react";
import Link from "next/link";
import Image from "next/image";

const Perfil = () => {
  return (
    <div>
      {" "}
      <h1 className="text-2xl font-bold mb-4">Perfil</h1>
      <div className="flex items-center justify-center">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Guardar
        </button>
        <Link href="/Perfil/">
          <button className="inline-block hover:bg-red-500 bg-red-700 text-white font-bold py-2 px-4 rounded">
            Atras
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Perfil;
