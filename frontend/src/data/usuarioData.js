import axios from "axios";

export const getUsuario = async (id) => {
    try {
        const res = await axios.get(`/users/${id}`, {});
        return res.status === 200 ? res.data : { success: false, data: [] };
    } catch (err) {
        console.log(err);
    }
}

export const getUsuarios = async () => {
    try {
        const res = await axios.get("/users", {});
        return res.status === 200 ? res.data : { success: false, data: [] };
    } catch (err) {
        console.log(err);
    }
}

export const updateUsuario = async (id, usuario) => {
    try {
        const res = await axios.put(`/users/${id}`, usuario);
        return res.status === 200 ? res.data : { success: false, data: [] };
    } catch (err) {
        console.log(err);
    }
}

export const deleteUsuario = async (id) => {
    try {
        const res = await axios.delete(`/users/${id}`);
        return res.status === 200 ? res.data : { success: false, data: [] };
    } catch (err) {
        console.log(err);
    }
}

export const getBrigadistas = async () => {
    try {
        const res = await axios.get("/users/brigadistas", {});
        return res.status === 200 ? res.data : { success: false, data: [] };
    } catch (err) {
        console.log(err);
    }
}

