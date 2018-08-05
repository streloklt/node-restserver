//Puerto
process.env.PORT = process.env.PORT || 3000;

//Entorno
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//Vencimiento Token
process.env.CADUCIDAD_TOKEN = '48h';

//Semilla (Seed)
process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';

//Base de Datos
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = process.env.MONGO_URI;
}
process.env.URLDB = urlDB;

//Google Client ID
process.env.CLIENT_ID = process.env.CLIENT_ID || '444636465998-e3agj0a1ciukvpspm7jf9ed95pssap26.apps.googleusercontent.com';