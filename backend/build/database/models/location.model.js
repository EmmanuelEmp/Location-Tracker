"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Location = void 0;
const crypto_1 = require("crypto");
const mongoose_1 = require("mongoose");
const locationSchema = new mongoose_1.Schema({
    _id: {
        type: mongoose_1.Schema.Types.UUID,
        required: true,
        unique: true,
        default: crypto_1.randomUUID
    },
    altitude: {
        type: String,
        required: false
    },
    latitude: {
        type: String,
        required: true
    },
    longitude: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    countryCode: {
        type: String,
        required: true,
        uppercase: true,
        trim: true,
        minLength: 2,
        maxLength: 3
    },
    city: {
        type: String,
        required: true
    },
    zipCode: {
        type: String,
        required: false
    },
    street: {
        type: String,
        required: false
    },
}, { timestamps: true });
locationSchema.index({ latitude: 1, longitude: 1 }, { unique: false });
exports.Location = (0, mongoose_1.model)('Locations', locationSchema);
