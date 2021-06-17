// Import de la librairie Express pour le web
import Express, { Request, Response } from "express";
import morgan from 'morgan'; // logger morgan
import { dbConnect } from "./config/mongo.config";

// import du handler depuis le dossier controllers
import { volcanosHandler } from "./controllers/volcanos.controller";

// port sur lequel nous lançons l'appli Expres
const PORT = 3000;

// construction de l'objet Express (serveur web)
const app = Express();

// dis à express d'utiliser Morgan (Middleware)
app.use(morgan("dev"));
// attache une route à l'application en fonction du verbe HTTP utilisé
// écoute de requête sur la route /accueil avec la methode GET
app.get("/accueil", (req: Request, res: Response)=>{
    res.send("Vous avez demandé l'accueil en méthode GET");
});

// config de la route /volcanos en GET
app.get("/volcanos", volcanosHandler);

// lancement de l'écoute de l'appli
app.listen(PORT, ()=>{
    dbConnect();
    console.log(`Le serveur écoute sur le port ${PORT}`);
});