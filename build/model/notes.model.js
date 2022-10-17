"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const NotesSchema = new mongoose_1.Schema({
    title: {
        type: String,
        unique: true,
        required: [true, "provide note title"],
        minlength: [3, "title must be atleast 4 chracters"],
        maxlength: [35, "title must be atmost 35 chracters"],
    },
    body: {
        type: String,
        required: [true, "provide note body"],
        minlength: [3, "title must be atleast 4 chracters"],
    },
}, { timestamps: true });
const Notes = (0, mongoose_1.model)("Note", NotesSchema);
exports.default = Notes;
