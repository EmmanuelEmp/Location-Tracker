import { env } from "process";

export const PORT: number = Number(env.PORT || "3000");

