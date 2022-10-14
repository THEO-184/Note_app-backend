import { Router } from "express";
import {
	createNote,
	deleteNotes,
	getNotes,
	updateNotes,
} from "../controllers/notes.controller";

const router = Router();

router.route("/").post(createNote).get(getNotes);
router.route("/:id").put(updateNotes).delete(deleteNotes);

export default router;
