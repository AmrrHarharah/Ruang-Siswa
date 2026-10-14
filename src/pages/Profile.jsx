import { useEffect, useState } from "react";
import { Mail, Phone, ShieldCheck, UserRound } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { profileSchema } from "@/registerSchema";

function Profile() {
  const defaultValues = {
    name: "Admin",
    email: "admin@pembelajaran.id",
    phone: "0812-0000-0000",
  };
  const [profile, setProfile] = useState(defaultValues);
  const [saved, setSaved] = useState(false);
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors, isValid, isSubmitting },
  } = useForm({
    mode: "onChange",
    resolver: zodResolver(profileSchema),
    defaultValues,
  });

  useEffect(() => {
    trigger();
  }, [trigger]);

  function onSubmit(values) {
    setProfile(values);
    setSaved(true);
  }

  return (
    <section className="mx-auto w-full max-w-4xl space-y-6">
      <div>
        <p className="text-sm text-muted-foreground">Akun pengguna</p>
        <h2 className="text-2xl font-semibold tracking-tight">Profil Saya</h2>
        <p className="text-muted-foreground">
          Kelola informasi kontak dan identitas akun Admin.
        </p>
      </div>
      <div className="grid gap-6 lg:grid-cols-[260px_1fr]">
        <div className="rounded-xl border bg-card p-6 text-center shadow-sm">
          <div className="mx-auto flex size-24 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <UserRound className="size-10" />
          </div>
          <h3 className="mt-4 text-lg font-semibold">{profile.name}</h3>
          <Badge className="mt-2">Administrator</Badge>
          <div className="mt-5 space-y-2 text-left text-sm text-muted-foreground">
            <p className="flex items-center gap-2">
              <ShieldCheck className="size-4 text-emerald-600" />
              Akses Admin aktif
            </p>
            <p className="flex items-center gap-2">
              <Mail className="size-4" />
              {profile.email}
            </p>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-5 rounded-xl border bg-card p-6 shadow-sm"
          noValidate
        >
          <div>
            <h3 className="font-semibold">Bio / Detail User</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Perbarui informasi identitas dan kontak akun Anda.
            </p>
          </div>
          <div className="grid gap-2 text-sm font-medium">
            <label htmlFor="profile-name">Nama lengkap</label>
            <Input
              id="profile-name"
              autoComplete="name"
              aria-invalid={Boolean(errors.name)}
              {...register("name")}
            />
            {errors.name && (
              <p className="text-sm text-destructive" role="alert">
                {errors.name.message}
              </p>
            )}
          </div>
          <div className="grid gap-2 text-sm font-medium">
            <label htmlFor="profile-email">Email</label>
            <Input
              id="profile-email"
              type="email"
              autoComplete="email"
              aria-invalid={Boolean(errors.email)}
              {...register("email")}
            />
            {errors.email && (
              <p className="text-sm text-destructive" role="alert">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="grid gap-2 text-sm font-medium">
            <label htmlFor="profile-phone">Nomor telepon</label>
            <Input
              id="profile-phone"
              type="tel"
              autoComplete="tel"
              aria-invalid={Boolean(errors.phone)}
              {...register("phone")}
            />
            {errors.phone && (
              <p className="text-sm text-destructive" role="alert">
                {errors.phone.message}
              </p>
            )}
          </div>
          <div className="flex items-center gap-3">
            <Button type="submit" disabled={!isValid || isSubmitting}>
              Simpan perubahan
            </Button>
            {saved && (
              <p className="text-sm text-emerald-700" role="status">
                Profil berhasil disimpan.
              </p>
            )}
          </div>
        </form>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border bg-muted/40 p-5">
          <Phone className="size-5 text-primary" />
          <p className="mt-3 font-medium">Kontak bantuan</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Hubungi pengelola sistem jika ada masalah akses.
          </p>
        </div>
        <div className="rounded-xl border bg-muted/40 p-5">
          <ShieldCheck className="size-5 text-emerald-600" />
          <p className="mt-3 font-medium">Keamanan akun</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Jangan bagikan kredensial Admin kepada orang lain.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Profile;
