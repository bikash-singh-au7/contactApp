const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contactSchema = Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    mobile: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        trim: true,
    },
    salary: {
        type: String,
        trim: true
    },
    designation: {
        type: String,
        trim: true
    },
    img: {
        type: String,
        default: "",
        trim: true
    }
})

module.exports = mongoose.model("contact", contactSchema);