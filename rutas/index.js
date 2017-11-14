"use strict"

const express = require('express');
const ctrl = require('../controladores/index')

const api = express.Router()


api.get   ('/products',     ctrl.verProductos)
api.get   ('/product/:id',  ctrl.verUnProducto)
api.post  ('/product/:id',  ctrl.agregarProducto)
api.put   ('/product/:id',  ctrl.actualizarUnProducto)
api.delete('/product/:id',  ctrl.eliminarProducto)
api.get   ('*',             ctrl.defaultPath)


module.exports = api
