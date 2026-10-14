import {
  BookOpenCheck,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router";

const features = [
  {
    title: "Data terorganisir",
    description:
      "Kelola daftar santri, nilai, dan absensi dalam satu dashboard.",
    icon: BookOpenCheck,
  },
  {
    title: "Pendampingan lebih dekat",
    description:
      "Pantau perkembangan belajar dengan ringkasan yang mudah dibaca.",
    icon: HeartHandshake,
  },
  {
    title: "Akses terkontrol",
    description: "Halaman pengaturan Admin dilindungi dengan akses khusus.",
    icon: ShieldCheck,
  },
];

function About() {
  return (
    <section className="mx-auto w-full max-w-5xl space-y-8">
      <div className="relative overflow-hidden rounded-xl border bg-card p-6 shadow-sm sm:p-10">
        <div className="relative z-10 max-w-2xl space-y-4">
          <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
            <Sparkles className="size-4 text-amber-500" />
            Tentang platform
          </div>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Belajar lebih terarah, tumbuh bersama.
          </h2>
          <p className="text-base leading-7 text-muted-foreground">
            Ruang Siswa membantu pengelola pendidikan memantau aktivitas
            pembelajaran dan mendukung perkembangan setiap santri.
          </p>
          <Button asChild>
            <NavLink to="/admin/santri">Jelajahi data santri</NavLink>
          </Button>
        </div>
        <BookOpenCheck className="absolute -right-6 -bottom-8 size-48 text-muted/60 sm:right-8 sm:size-64" />
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <div
              key={feature.title}
              className="rounded-xl border bg-card p-5 shadow-sm"
            >
              <div className="mb-5 flex size-10 items-center justify-center rounded-lg bg-muted">
                <Icon className="size-5" />
              </div>
              <h3 className="font-semibold">{feature.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
      <div className="rounded-xl border bg-muted/40 p-5 text-sm text-muted-foreground sm:p-6">
        <p className="font-medium text-foreground">Versi aplikasi</p>
        <p className="mt-1">Ruang Siswa · Dashboard Pembelajaran v1.0</p>
      </div>
    </section>
  );
}

export default About;
