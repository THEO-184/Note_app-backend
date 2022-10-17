"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteNotes = exports.updateNotes = exports.getNotes = exports.createNote = void 0;
const http_status_codes_1 = require("http-status-codes");
const errors_1 = __importDefault(require("../errors"));
const notes_service_1 = require("../services/notes.service");
const createNote = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body, title } = req.body;
    if (!body || !title) {
        throw new errors_1.default.BadRequest("provide all fields");
    }
    const note = yield (0, notes_service_1.createNoteService)(req.body);
    res.status(http_status_codes_1.StatusCodes.CREATED).json({ note });
});
exports.createNote = createNote;
const getNotes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const notes = yield (0, notes_service_1.getNotesService)();
    res.status(http_status_codes_1.StatusCodes.OK).json({ count: notes.length, notes });
});
exports.getNotes = getNotes;
const updateNotes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body, title } = req.body;
    if (!body || !title) {
        throw new errors_1.default.BadRequest("provide all fields");
    }
    const note = yield (0, notes_service_1.updateNoteService)({ _id: req.params.id }, req.body);
    res.status(http_status_codes_1.StatusCodes.OK).json({ note });
});
exports.updateNotes = updateNotes;
const deleteNotes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, notes_service_1.deleteNoteService)({ _id: req.params.id });
    res.status(http_status_codes_1.StatusCodes.OK).json({ msg: "deleted successfully" });
});
exports.deleteNotes = deleteNotes;
