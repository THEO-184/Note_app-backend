"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const default_error_1 = __importDefault(require("./default-error"));
const unAuthenticated_1 = __importDefault(require("./unAuthenticated"));
const unAuthorized_1 = __importDefault(require("./unAuthorized"));
const badRequest_1 = __importDefault(require("./badRequest"));
const notFound_1 = __importDefault(require("./notFound"));
const error = {
    CustomError: default_error_1.default,
    UnAuthenticated: unAuthenticated_1.default,
    UnAuthorized: unAuthorized_1.default,
    BadRequest: badRequest_1.default,
    NotFound: notFound_1.default,
};
exports.default = error;
