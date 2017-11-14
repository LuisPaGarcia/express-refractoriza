const PORT        = process.env.PORT || 3000
const MONGODB     = process.env.MONGODB
const dotenv      = require('dotenv').config()
const express     = require('express')
const app         = express()
const bodyParser  = require('body-parser');
const api         = require('./rutas');


app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use('/api', api)

app.listen(PORT,()=>{
  console.log(`Escuchando en el puerto ${PORT}`);

})
