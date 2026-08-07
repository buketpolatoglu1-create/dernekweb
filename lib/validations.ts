import { z } from "zod";

export const contactFormSchema = z.object({
  fullName: z
    .string()
    .min(2, { message: "Ad Soyad en az 2 karakter olmalıdır." })
    .max(50, { message: "Ad Soyad en fazla 50 karakter olmalıdır." }),
  email: z
    .string()
    .email({ message: "Geçerli bir e-posta adresi giriniz." }),
  subject: z
    .string()
    .min(3, { message: "Konu en az 3 karakter olmalıdır." })
    .max(100, { message: "Konu en fazla 100 karakter olmalıdır." }),
  message: z
    .string()
    .min(10, { message: "Mesaj en az 10 karakter olmalıdır." })
    .max(1000, { message: "Mesaj en fazla 1000 karakter olmalıdır." }),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
