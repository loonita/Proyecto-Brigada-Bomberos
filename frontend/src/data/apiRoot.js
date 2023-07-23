import axios from "axios";

const URL = "http://localhost:3010/api";
const URL2 = "http://localhost:3010/api/Agendar";
const URL3 = "http://localhost:3010/api/Agendar/1";

export const getAgendar = async () => {
  try {
    const res = await axios.get(URL2);
    return res.status === 200 ? res.data : { success: false, data: [] };
  } catch (err) {
    console.log(err);
  }
};

export default axios.create({
  baseURL: URL,
});
