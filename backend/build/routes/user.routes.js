"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_controller_1 = require("../controller/user.controller");
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.post('/signup', user_controller_1.registerUser);
router.post('/login', user_controller_1.loginUser);
router.post('/logout', user_controller_1.logoutUser);
router.post('/users/me', user_controller_1.getProfile);
exports.default = router;
