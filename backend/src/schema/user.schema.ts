 import { TypeOf, object, string, z } from "zod";

export const createUserSchema = object({
    
        firstName: string({
            required_error: 'First Name is required'
        }),
        lastName: string({
            required_error: 'Last Name is required'
        }), 
        password: string({
            required_error: 'Password is required'
        }).min(6, "Minimum of 6 character is required"),
        passwordConfirmation: string({
            required_error: 'Password confirm is required'
        }),
        email: string({
            required_error: "Email is required"
        }).email('Not a valid email')
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