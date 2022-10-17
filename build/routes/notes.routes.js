"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const notes_controller_1 = require("../controllers/notes.controller");
const router = (0, express_1.Router)();
router.route("/").post(notes_controller_1.createNote).get(notes_controller_1.getNotes);
router.route("/:id").put(notes_controller_1.updateNotes).delete(notes_controller_1.deleteNotes);
exports.default = router;
