"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Country = void 0;
const mongoose_1 = require("mongoose");
const countrySchema = new mongoose_1.Schema({
    _id: {
        type: String,
        required: true,
        unique: true,
        uppercase: true,
        trim: true,
        minLength: 2,
        maxLength: 2
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    capital: {
        type: String,
        required: true,
        trim: true
    },
    region: {
        type: String,
        required: true,
        trim: true
    },
    currencyCode: {
        type: String,
        required: true,
        uppercase: true,
        trim: true,
        minLength: 2,
        maxLength: 3
    },
    languageCode: {
        type: String,
        required: true,
        uppercase: true,
        trim: true,
        minLength: 2,
        maxLength: 3
    },
    flag: {
        type: String,
        required: true,
        trim: true
    },
    diallingCode: {
        type: String,
        required: false,
        trim: true
    },
    isoCode: {
        type: String,
        required: false,
        uppercase: true,
        trim: true,
        minLength: 2,
        maxLength: 3
    },
}, { timestamps: false });
exports.Country = (0, mongoose_1.model)('Countries', countrySchema);
