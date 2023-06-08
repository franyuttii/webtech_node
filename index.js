import express from 'express';
import router from './routes/index.js';
import db from './config/db.js';

console.log(process.env.BB_HOST)

const app = express();

//Conectar la base de datos 
db.authenticate()
  .then( () => console.log('Base de datos conectada'))
  .catch(error => console.log(error))

const port = process.env.PORT || 3000;

app.set('view engine', 'pug');

//Obtener el año actual 
app.use( (req, res, next) => {
  const year = new Date().getFullYear();
  res.locals.actualYear = year;
  res.locals.nombreSitio = 'WebTech'
  next();
});   

//Agregar body parser para leer los datos del formulario
app.use(express.urlencoded({extended: true}));

//Definir la carpeta publica
app.use(express.static('public'));

//Agregar Router 
app.use('/', router); 


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})