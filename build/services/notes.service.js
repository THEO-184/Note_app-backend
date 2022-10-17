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
exports.deleteNoteService = exports.updateNoteService = exports.getNotesService = exports.createNoteService = void 0;
const errors_1 = __importDefault(require("../errors"));
const notes_model_1 = __importDefault(require("../model/notes.model"));
const createNoteService = (input) => __awaiter(void 0, void 0, void 0, function* () {
    const note = yield notes_model_1.default.create(input);
    return note;
});
exports.createNoteService = createNoteService;
const getNotesService = () => __awaiter(void 0, void 0, void 0, function* () {
    const notes = yield notes_model_1.default.find({}).sort("-updatedAt -createdAt");
    return notes;
});
exports.getNotesService = getNotesService;
const updateNoteService = (filter, update) => __awaiter(void 0, void 0, void 0, function* () {
    const note = yield notes_model_1.default.findOneAndUpdate(filter, update, {
        new: true,
        runValidators: true,
    });
    if (!note) {
        throw new errors_1.default.NotFound("no note found with the given id");
    }
    return note;
});
exports.updateNoteService = updateNoteService;
const deleteNoteService = (filter) => __awaiter(void 0, void 0, void 0, function* () {
    const note = yield notes_model_1.default.findOneAndDelete(filter, {
        new: true,
        runValidators: true,
    });
    if (!note) {
        throw new errors_1.default.NotFound("no note found with the given id");
    }
});
exports.deleteNoteService = deleteNoteService;
