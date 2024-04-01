

import { TypeOf, object, string, z } from 'zod';

// Define schema for updating user profile
export const updateUserProfileSchema = object({
    firstName: z.string({
        required_error: 'First Name is required'
    }),
    lastName: z.string({
        required_error: 'Last Name is required'
    }), 
    mobileNumber: z.string({
        required_error: "Mobile number is required",
        invalid_type_error: "Mobile number must be a number",
    }),
    age: z.number({
        required_error: "Age is required",
        invalid_type_error: "Age must be a number",
    }),
    gender: z.string({
        required_error: "Please select your gender"
    }),
    address: z.string({
        required_error: "Address is required"
    }),
    country: z.string({
        required_error: "Country is required"
    }),
});

// Define the type for updating user profile
export type UpdateUserProfileInput = TypeOf<typeof updateUserProfileSchema>;
