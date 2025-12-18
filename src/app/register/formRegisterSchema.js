import { z } from 'zod'

export const FormSchemaRegister = z
    .object({
        first_name : z.string()
            .min(1, {message : "Nama depan harus diisi"})
            .max(150, { message : "Nama depan maksimal 150 karakter"}),
        last_name : z.string()
            .min(1, {message : "Nama belakang harus diisi"})
            .max(150, { message : "Nama belakang maksimal 150 karakter"}),
        username : z.string()
            .min(1, {message : "Username harus diisi"})
            .max(150, { message : "Username maksimal 150 karakter"}),
        email : z.email({message : "Format email tidak valid"}),
        password : z.string()
            .min(1, {message : "Password harus diisi"}),
        password2 : z.string()
            .min(1, {message : "Konfirmasi password harus diisi"})
    })