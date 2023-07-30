import axios from "@/api/rootAPI";

export const getStats = async () => {
    try {
        const res = await axios.get("/stats", {});
        return res.status === 200 ? res.data : { success: false, data: [] };
    } catch (err) {
        console.log(err);
    }
}

export const getRegistro = async (id) => { 
    try {
        const res = await axios.get(`/stats/registro/${id}`, {});
        return res.status === 200 ? res.data : { success: false, data: [] };
    } catch (err) {
        console.log(err);
    }
}

export const getOnlyUser = async (id) => {
    try {
        const res = await axios.get(`/stats/${id}`, {});
        return res.status === 200 ? res.data : { success: false, data: [] };
    } catch (err) {
        console.log(err);
    }
}