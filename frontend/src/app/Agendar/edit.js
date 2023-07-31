import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { getcita, updatecita } from "@/data/agendarData";

const EditAgendar = () => {
  const router = useRouter();
  const { id } = router.query;

  const [observaciones, setObservaciones] = useState("");
  const [planAlimenticio, setPlanAlimenticio] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Fetch the existing details of the specific Agendar based on id
    getcita(id)
      .then((res) => {
        if (res.state === "Success") {
          setObservaciones(res.data.observaciones);
          setPlanAlimenticio(res.data.planAlimenticio);
        }
      })
      .catch((error) => {
        console.log("Error fetching agendar details: ", error);
      });
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      await updatecita(id, {
        observaciones,
        planAlimenticio,
      });
      router.push("/Agendar"); // Redirect back to the list page after successful update
    } catch (error) {
      console.log("Error updating agendar: ", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h1>Editar Cita</h1>
      <form onSubmit={handleSubmit}>
        {/* Input field for "observaciones" */}
        <div>
          <label>Observaciones:</label>
          <input
            type="text"
            value={observaciones}
            onChange={(e) => setObservaciones(e.target.value)}
            required
          />
        </div>

        {/* Input field for "planAlimenticio" */}
        <div>
          <label>Plan Alimenticio:</label>
          <input
            type="text"
            value={planAlimenticio}
            onChange={(e) => setPlanAlimenticio(e.target.value)}
            required
          />
        </div>

        <button type="submit" disabled={isLoading}>
          Guardar Cambios
        </button>
      </form>
    </div>
  );
};

export default EditAgendar;
