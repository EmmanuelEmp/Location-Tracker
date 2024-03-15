"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Currency = void 0;
const mongoose_1 = require("mongoose");
const currencySchema = new mongoose_1.Schema({
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
    symbol: {
        type: String,
        required: true,
        trim: true,
        minLength: 1,
        maxLength: 3
    }
}, { timestamps: false });
exports.Currency = (0, mongoose_1.model)('Currencies', currencySchema);
