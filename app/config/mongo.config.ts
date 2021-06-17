/*
    Fichier de configuration pour la communication avec MongoDB
*/

import { CallbackError, connect } from "mongoose";

// MongoDB connection string
const MONGO_URL = "mongodb://127.0.0.1:27017/app";

/**
 * Initialise la connection à la bdd
 */
export const dbConnect = () => {
    connect(MONGO_URL,
        {
            useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true
        },
        (err: CallbackError) => {
            // si j'ai une erreur je laisse Node gérer l'erreur
            if (err) throw err;
        })
}