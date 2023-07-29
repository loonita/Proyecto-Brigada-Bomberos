import React from "react";
import Link from "next/link";

const Preparador = () => (
  <div>
    <Link href="/Preparador/PrincipalPreparador">
        <span>
          Crear Acondicionamiento de Brigadista
        </span>
        </Link>
        <p>/</p>
        <Link href="/Preparador/VerAcond">
        <span>
          Ver Acondicionamiento de Brigadista
        </span>
        </Link>
  </div>
        
);

export default Preparador;
