"use client";
import { useEffect, useState } from "react";
import AgendarForm from "../../agendarForm";
import { useParams, useRouter } from "next/navigation";
import { getCita, updateCita } from "@/data/agendarData";

const EditAgendar = () => {
  const params = useParams();

  const [agendar, setAgendar] = useState({
    brigadista: "",
    fecha: "",
    observaciones: "",
    planAlimenticio: "",
  });

  useEffect(() => {
    getCita(params.id).then((res) => {
      if (res.success) {
        setAgendar(res.data);
      }
    });
  }, []);

  const { push } = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateCita(params.id, agendar);
      push("/Agendar");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <AgendarForm
      agendar={agendar}
      setAgendar={setAgendar}
      handleSubmit={handleSubmit}
    />
  );
};

export default EditAgendar;
