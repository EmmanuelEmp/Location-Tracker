 import { TypeOf, object, string, z } from "zod";

 // Validate users input
export const createUserSchema = object({
    
        firstName: z.string({
            required_error: 'First Name is required'
        }),
        lastName: z.string({
            required_error: 'Last Name is required'
        }), 
        password: z.string({
            required_error: 'Password is required'
        }).min(6, "Minimum of 6 character is required"),
        passwordConfirmation: string({
            required_error: 'Password confirm is required'
        }),
        email: z.string({
            required_error: "Email is required"
        }).email('Not a valid email'),
        mobileNumber: z.string({
            required_error: "Mobile number is required",
        }).default("+123"),
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
        photo: z.string({
            required_error: "Photo is required"
        }).default("https://i.ibb.co/4pDNDk1/avatar.png"), // Default photo URL,
    }).refine((data) => data.password === data.passwordConfirmation, {
        message: "Passwords do not match",
        path: ["PasswordConfirmation"],
    })



export const loginSchema = object({
        email: string({
           required_error: "Email is required" 
        }),
        password: string({
            required_error: "Password is required"
        })
    })

    


export  type CreateUserInput = Omit<TypeOf<typeof createUserSchema>, 
"body.passwordConfirmation">

export type LoginInput = z.infer<typeof loginSchema>