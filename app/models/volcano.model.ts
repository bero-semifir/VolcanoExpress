
import { Schema, model } from "mongoose";

const GeoJSONSchema: Schema = new Schema(
    {
        "type": String,
        "coordinates": [Number]
    }
)

// création d'un "Schema" pour s'assurer que les champs soient bien présents
const volcanoSchema: Schema = new Schema(
    {
        "Volcano Name": {
            "type": String,
            "required": true
        },
        Country: String,
        Region: String,
        Location: GeoJSONSchema,
        Elevation: Number,
        type: String,
        Status: String,
        "Last Known Eruption": String,
        id: String
    }
);

// création d'un model pour effectuer nos requettes sur la collection Volcano
export const volcanoModel = model('volcanos',volcanoSchema);