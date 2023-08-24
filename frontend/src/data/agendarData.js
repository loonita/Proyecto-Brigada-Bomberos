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

export const getBrigadistas = async () => {
  try {
    const res = await axios.get("/users/brigadistas", {});
    return res.status === 200 ? res.data : { success: false, data: [] };
  } catch (err) {
    console.log(err);
  }
};

export const getNutricionistas = async () => {
  try {
    const res = await axios.get("/users/nutricionistas", {});
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
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const getUserByIdCSV = async (id) => {
  try {
    const res = await axios.get(`/users/${id}`);
    const user = res.data.data;

    const csvData =
      "Nombre,RUT,Email,Domicilio,Telefono,Fecha Nacimiento,Genero,Peso,Altura,IMC\n" +
      `${user.name || ""},${user.rut || ""},${user.email || ""},${
        user.domicilio || ""
      },${user.telefono || ""},${user.fechaNacimiento || ""},${
        user.genero || ""
      },${user.peso || ""},${user.altura || ""},${user.imc || ""}\n`;
    return csvData;
  } catch (err) {
    console.log(err);
    return "";
  }
};

export const getUsuarios = async () => {
  try {
    const res = await axios.get("/users", {});
    return res.status === 200 ? res.data : { success: false, data: [] };
  } catch (err) {
    console.log(err);
  }
};

/*
/*
 */
