'use client';

import {z} from "zod";

export const formSchema = z.object({
    name: z.string().min(3,"Votre nom doit contenir au moins trois caracters"),
    email: z.string().email("Saissisez une addresse email valide"),
    contact: z.string().min(6,"Le numero doit comporter au moins 6 chiffres").regex(/^\d+$/),
    project: z.string().min(20,"Decrivez un peu plus votre projet"),
});