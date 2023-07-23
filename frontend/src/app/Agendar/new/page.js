"use client";
import { useState } from "react";
import AgendarForm from "../agendarForm";
import { useParams, useRouter } from "next/navigation";
import { createAgendar } from "@/data/agendarData";

const NewAgendar = () => {
  const [agendar, setAgendar] = useState({
    title: "",
    description: "",
  });

  const params = useParams();
  const { push } = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(params);
    try {
      await createAgendar(agendar);
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

export default NewAgendar;
