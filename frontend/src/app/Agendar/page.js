import React from "react";
import { AgendarList } from "./agendarList";
import Link from "next/link";

const Button = () => {
  return (
    <Link href="/Agendar/new">
      <p className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
        Crear cita
      </p>
    </Link>
  );
};

const Agendar = () => {
  return (
    <section>
      <Button />
      <AgendarList />
    </section>
  );
};
export default Agendar;
