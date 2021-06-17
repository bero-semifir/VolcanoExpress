import { Request, Response } from "express";
import { CallbackError, Document } from "mongoose";
import { volcanoModel } from "../models/volcano.model";
/**
 * Fonction qui gére les requêtes reçues sur la route Volcans
 * @param req { Request } Requête Express
 * @param res { Response } Reponse Ecpress
 */
export const volcanosHandler = (req: Request, res: Response) => {
    // appel du modéle et exécution du find sur la collection volcanos
    volcanoModel.find({},(err: CallbackError, volcanos: Document[])=>{
        if (err) throw err;
        // retour coté client du probléme
        if(volcanos.length == 0){
            res.status(404).json(volcanos);
        }
        res.status(200).json(volcanos);
    })
}