const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/autho.middleware");
const chatController = require("../controllers/chat.controller");
const usuarioController = require("../controllers/user.controller.js");

// Ruta para obtener la lista de usuarios con roles de brigadista, preparador físico o nutricionista
router.get("/userss", usuarioController.getUsers);

// Ruta para enviar un mensaje
router.post("/messages", authMiddleware.isPoB, chatController.sendMessage);

// Ruta para marcar un mensaje como leído
router.put("/messages/:id/read", authMiddleware.isPoB, chatController.markMessageAsRead);

// Ruta para obtener los mensajes del usuario actual
router.get("/messages", authMiddleware.isPoB, chatController.getUserMessages);

module.exports = router;
