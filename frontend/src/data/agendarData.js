import axios from "@/api/rootAPI";

export const getCitas = async () => {
  try {
    const res = await axios.get("/citaNutricionista", {});
    return res.status === 200 ? res.data : { success: false, data: [] };
  } catch (err) {
    console.log(err);
  }
};

export const getCita = async (id) => {
  try {
    const res = await axios.get(`/citaNutricionista/${id}`);
    return res.status === 200 ? res.data : { success: false, data: [] };
  } catch (err) {
    console.log(err);
  }
};

export const createCita = async (agendar) => {
  try {
    const res = await axios.post("/citaNutricionista", agendar);
    return res.status === 200 ? res.data : { success: false, data: [] };
  } catch (err) {
    console.log(err);
  }
};

export const updateCita = async (id, agendar) => {
  try {
    const res = await axios.put(`/citaNutricionista/${id}`, agendar);
    return res.status === 200 ? res.data : { success: false, data: [] };
  } catch (err) {
    console.log(err);
  }
};

export const deleteCita = async (id) => {
  try {
    const res = await axios.delete(`/citaNutricionista/${id}`);
    return res.status === 200 ? res.data : { success: false, data: [] };
  } catch (err) {
    console.log(err);
  }
};
