const axios = require("axios");
const { BASE_URL } = require("../config/.env");

// Obtener lista de usuarios con roles de brigadista, preparador físico o nutricionista
async function getUsersWithRoles() {
    try {
    const response = await axios.get(`${BASE_URL}/users`);
    return response.data;
    } catch (error) {
    throw new Error("Error al obtener la lista de usuarios.");
    }
}

// Obtener lista de mensajes de un usuario
async function getUserMessages() {
    try {
    const response = await axios.get(`${BASE_URL}/messages`);
    return response.data;
    } catch (error) {
    throw new Error("Error al obtener la lista de mensajes.");
    }
}

// Enviar un mensaje a otro usuario
async function sendMessage(recipientId, message) {
    try {
    const response = await axios.post(`${BASE_URL}/messages`, {
        recipientId,
        message,
    });
    return response.data;
    } catch (error) {
    throw new Error("Error al enviar el mensaje.");
    }
}

// Marcar un mensaje como leído
async function markMessageAsRead(messageId) {
    try {
    const response = await axios.put(`${BASE_URL}/messages/${messageId}/read`);
    return response.data;
    } catch (error) {
    throw new Error("Error al marcar el mensaje como leído.");
    }
}

module.exports = {
    getUsersWithRoles,
    getUserMessages,
    sendMessage,
    markMessageAsRead,
};
