const mongoose = require("mongoose");

const linkSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: String,
    url: { type: String, required: true },
    click: { type: Number, default: 0 }
})

//Link com 'L' maiúsculo para saber que é um modelo, e não um documento.
module.exports = mongoose.model('Link', linkSchema);