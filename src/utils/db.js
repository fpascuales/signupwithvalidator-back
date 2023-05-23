const mongoose = require("mongoose");
const LINK_DB = process.env.DB_URL;

const connectDB = async () => {
    try {
        mongoose.set("strictQuery", true);
        const db = await mongoose.connect(LINK_DB);
        const { host } = db.connection;
        console.log(`Conectado con éxito en : ${host}`);
    } catch (error) {
        console.log(`Imposible conectar a la BBDD, comprueba el error: ${error}`);
    }
}
module.exports = { connectDB };