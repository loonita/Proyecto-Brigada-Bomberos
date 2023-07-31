import axios from "@/api/rootAPI";

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