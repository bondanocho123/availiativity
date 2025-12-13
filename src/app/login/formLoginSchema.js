import { z } from 'zod'

export const FormSchemaLogin = z
    .object({
        email : z.string().email({message : "Format email tidak valid"}),
        password : z.string()
            .min(1, {message : "Password dibutuhkan"})
            .max(50, { message : "Password maksimal 50 karakter"})
    })