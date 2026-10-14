import { z } from "zod";

export const registerSchema = z.object({
  nama: z.string(),
  email: z.string().email("Masukkan email yang valid."),
  umur: z.string().regex(/^\d+$/, "Umur harus berupa angka."),
  jenisKelamin: z.string(),
  ekstrakurikuler: z.array(z.string()),
});

export const signInSchema = z.object({
  email: z.string().email("Masukkan alamat email yang valid."),
  password: z
    .string()
    .min(6, "Password harus terdiri dari minimal 6 karakter."),
});

export const signUpSchema = z
  .object({
    name: z.string().min(2, "Nama harus terdiri dari minimal 2 karakter."),
    email: z.string().email("Masukkan alamat email yang valid."),
    password: z
      .string()
      .min(6, "Password harus terdiri dari minimal 6 karakter."),
    confirmPassword: z.string(),
  })
  .refine((values) => values.password === values.confirmPassword, {
    message: "Konfirmasi password tidak cocok.",
    path: ["confirmPassword"],
  });

export const profileSchema = z.object({
  name: z.string().min(2, "Nama harus terdiri dari minimal 2 karakter."),
  email: z.string().email("Masukkan alamat email yang valid."),
  phone: z
    .string()
    .regex(/^\+?[0-9\s()-]{10,18}$/, "Masukkan nomor telepon yang valid."),
});

export const adminLoginSchema = z.object({
  username: z.string().min(1, "Username wajib diisi."),
  password: z.string().min(1, "Password wajib diisi."),
});
