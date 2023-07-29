import axios from "@/api/rootAPI";

export const getPreparadores = async () => {
  try {
    const res = await axios.get("/citaPreparador");
    return res.status === 200 ? res.data : { success: false, data: [] };
  } catch (err) {
    console.log(err);
  }
};
