let mongoose = require('mongoose');
const aggregatePaginate = require('mongoose-aggregate-paginate-v2');

let Schema = mongoose.Schema;
let AssignmentSchema = Schema({
    id: Number,
    dateDeRendu: Date,
    nom: String,
    rendu: Boolean,
    auteur: String,
    matiere: String,
    imgMatiere: String,
    imgProf: String,
    note: Number,
    remarques: String
});

AssignmentSchema.plugin(aggregatePaginate);

// C'est à travers ce modèle Mongoose qu'on pourra faire le CRUD
module.exports = mongoose.model('Assignment', AssignmentSchema);
