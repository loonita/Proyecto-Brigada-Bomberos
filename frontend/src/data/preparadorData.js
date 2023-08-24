import axios from "@/api/rootAPI";

/* */
export const getPreparadores = async () => {
  try {
    const res = await axios.get("/citaPreparador");
    return res.status === 200 ? res.data : { success: false, data: [] };
  } catch (err) {
    console.log(err);
  }
};

export const getPreparador = async (id) => {
  try {
    const res = await axios.get(`/citaPreparador/${id}`);
    return res.status === 200 ? res.data : { success: false, data: [] };
  } catch (err) {
    console.log(err);
  }
};

export const getBrigadistas = async () => {
  try {
    const res = await axios.get("/users/brigadistas", {});
    return res.status === 200 ? res.data : { success: false, data: [] };
  } catch (err) {
    console.log(err);
  }
};

export const getPreparadorU = async () => {
  try {
    const res = await axios.get("/users/preparador", {});
    return res.status === 200 ? res.data : { success: false, data: [] };
  } catch (err) {
    console.log(err);
  }
};

export const createCita = async (crear) => {
  try {
    const res = await axios.post("/citaPreparador", crear);
    return res.status === 200 ? res.data : { success: false, data: [] };
  } catch (err) {
    console.log(err);
  }
};

export const updateCita = async (id, crear) => {
  try {
    const res = await axios.put(`/citaPreparador/${id}`, crear);
    return res.status === 200 ? res.data : { success: false, data: [] };
  } catch (err) {
    console.log(err);
  }
};

export const deleteCita = async (id) => {
  try {
    const res = await axios.delete(`/citaPreparador/${id}`);
    return res.status === 200 ? res.data : { success: false, data: [] };
  } catch (err) {
    console.log(err);
  }
}
