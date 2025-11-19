const { MongoClient } = require("mongodb");

const url = "mongodb://admin:GhzPb7JhufSUYJTgv2b4D77u9madDcMMnCdlUNv5stdeQB6o@60046814-acab-4a72-a389-1e324fa0e44e.nam5.firestore.goog:443/sosi?loadBalanced=true&tls=true&authMechanism=SCRAM-SHA-256&retryWrites=false";

const cliente = new MongoClient(url);

async function connectDB() {
    try {
        await cliente.connect();
        console.log("Mongo DB connected!");
        return cliente.db("sosi");
    } catch (err) {
        console.log(err);
    }
}

module.exports = connectDB;