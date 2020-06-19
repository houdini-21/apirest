const express = require("express");
const api = express.Router();

// llamar a middlewares
const auth = require("../middlewares/auth");

//controladores
//aqui llevara todos los controladores ejemplo login,crear usuario,inventario, etc
//todo lo relacionado a escribir en base de datos
const login = require("../controllers/login");
const dashboard = require("../controllers/dashboard");

api.post('/login', login)
api.get('/dashboard', auth, dashboard)
module.exports = api;
