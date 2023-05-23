
const { chatSchema } = require("../schemas/chat.schema");
const ChatService = require("../services/chat.service");


// Obtener lista de mensajes de un usuario
async function getUserMessages(req, res) {
    try {
    const userId = req.user.id;
    const messages = await ChatService.getUserMessages(userId);
    res.json(messages);
    } catch (error) {
    res.status(500).json({ error: "Error al obtener la lista de mensajes." });
    }
}

// Enviar un mensaje de un usuario a otro usuario
async function sendMessage(req, res) {
    try {
    const senderId = req.user.id;
    const { recipientId, message } = req.body;
    await chatSchema.validateAsync({ sender: senderId, recipient: recipientId, message });

    if (senderId === recipientId) {
        return res.status(400).json({ error: "No puedes enviarte un mensaje a ti mismo." });
    }

    await ChatService.sendMessage(senderId, recipientId, message);
    res.json({ message: "Mensaje enviado correctamente." });
    } catch (error) {
    if (error.isJoi) {
        res.status(400).json({ error: "Datos de entrada inválidos." });
    } else {
        res.status(500).json({ error: "Error al enviar el mensaje." });
    }
    }
}

// Marcar un mensaje como leído
async function markMessageAsRead(req, res) {
    try {
    const messageId = req.params.id;
    const userId = req.user.id;
    await chatSchema.validateAsync({ id: messageId });

    const success = await ChatService.markMessageAsRead(messageId, userId);
    if (!success) {
        return res.status(400).json({ error: "El mensaje no existe o ya ha sido leído." });
    }

    res.json({ message: "Mensaje marcado como leído." });
    } catch (error) {
    if (error.isJoi) {
        res.status(400).json({ error: "Datos de entrada inválidos." });
    } else {
        res.status(500).json({ error: "Error al marcar el mensaje como leído." });
    }
    }
}

module.exports = {
    getUserMessages,
    sendMessage,
    markMessageAsRead,
};
