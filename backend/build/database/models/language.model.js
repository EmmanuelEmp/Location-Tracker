"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Language = void 0;
const mongoose_1 = require("mongoose");
const languageSchema = new mongoose_1.Schema({
    _id: {
        type: String,
        required: true,
        unique: true,
        uppercase: true,
        trim: true,
        minLength: 2,
        maxLength: 3
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
}, { timestamps: false });
exports.Language = (0, mongoose_1.model)('Languages', languageSchema);
