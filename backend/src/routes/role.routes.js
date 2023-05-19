"use strict";
const express = require("express");

const rolesController = require("../controllers/role.controller.js");

const authoMiddleware = require("../middlewares/autho.middleware.js");

const router = express.Router();

router.get("/", rolesController.getRoles);

module.exports = router;
