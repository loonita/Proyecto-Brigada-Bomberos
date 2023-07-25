import axios from "@/api/rootAPI";

export const getCitas = async () => {
  try {
    const res = await axios.get("/citaNutricionista");
    return res.status === 200 ? res.data : { success: false, data: [] };
  } catch (err) {
    console.log(err);
  }
};

export const getAgendarc = async (id) => {
  try {
    const res = await axios.get(`/Agendar/${id}`);
    return res.status === 200 ? res.data : { success: false, data: [] };
  } catch (err) {
    console.log(err);
  }
};

export const createAgendar = async (agendar) => {
  try {
    const res = await axios.post("/Agendar", agendar);
    return res.status === 200 ? res.data : { success: false, data: [] };
  } catch (err) {
    console.log(err);
  }
};

export const updateAgendar = async (id, agendar) => {
  try {
    const res = await axios.put(`/Agendar/${id}`, agendar);
    return res.status === 200 ? res.data : { success: false, data: [] };
  } catch (err) {
    console.log(err);
  }
};

export const deleteAgendar = async (id) => {
  try {
    const res = await axios.delete(`/Agendar/${id}`);
    return res.status === 200 ? res.data : { success: false, data: [] };
  } catch (err) {
    console.log(err);
  }
};
