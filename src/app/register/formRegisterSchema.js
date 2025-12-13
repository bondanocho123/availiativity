import { z } from 'zod'

export const FormSchemaRegister = z
    .object({
        first_name : z.string()
            .min(2, {message : "Nama depan minimal 2 karakter"})
            .max(30, { message : "Nama depan maksimal 30 karakter"}),
        last_name : z.string()
            .min(2, {message : "Nama belakang minimal 2 karakter"})
            .max(30, { message : "Nama belakang maksimal 30 karakter"}),
        username : z.string()
            .min(3, {message : "Username minimal 3 karakter"})
            .max(20, { message : "Username maksimal 20 karakter"}),
        email : z.email({message : "Format email tidak valid"}),
        password : z.string()
            .min(6, {message : "Password minimal 6 karakter"})
            .max(50, { message : "Password maksimal 50 karakter"}),
        password2 : z.string()
            .min(6, {message : "Password minimal 6 karakter"})
            .max(50, { message : "Password maksimal 50 karakter"})
    })