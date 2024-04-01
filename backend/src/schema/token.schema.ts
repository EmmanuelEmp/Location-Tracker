import { object, string } from "zod";
// validate token and id 
export const createTokenSchema = object({
        userId: string({
            required_error: "User ID is required"
        }),
        token: string({
            required_error: "Token is required"
        }),
        createdAt: string({
            required_error: "Creation date is required"
        })
});
