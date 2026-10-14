import {
  BarChart3,
  BookOpen,
  CalendarCheck,
  GraduationCap,
  School,
  Star,
  UsersRound,
} from "lucide-react";
import { NavLink } from "react-router";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const metrics = [
  {
    label: "Santri aktif",
    value: "108",
    note: "108 santri aktif belajar",
    icon: UsersRound,
    color: "text-blue-600",
    bg: "bg-blue-50 dark:bg-blue-950/40",
  },
  {
    label: "Persentase kehadiran",
    value: "93%",
    note: "2.948 dari 3.160 absensi",
    icon: CalendarCheck,
    color: "text-emerald-600",
    bg: "bg-emerald-50 dark:bg-emerald-950/40",
  },
  {
    label: "Guru / karyawan",
    value: "44",
    note: "16 pengajar aktif",
    icon: GraduationCap,
    color: "text-violet-600",
    bg: "bg-violet-50 dark:bg-violet-950/40",
  },
  {
    label: "Total kelas",
    value: "11",
    note: "semua tingkat",
    icon: School,
    color: "text-amber-600",
    bg: "bg-amber-50 dark:bg-amber-950/40",
  },
  {
    label: "Total ekskul",
    value: "2",
    note: "kegiatan ekstrakurikuler",
    icon: Star,
    color: "text-orange-600",
    bg: "bg-orange-50 dark:bg-orange-950/40",
  },
  {
    label: "Total mata pelajaran",
    value: "23",
    note: "semua mapel",
    icon: BookOpen,
    color: "text-cyan-600",
    bg: "bg-cyan-50 dark:bg-cyan-950/40",
  },
];

function Home() {
  return (
    <section className="mx-auto w-full max-w-7xl space-y-6">
      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
        <div>
          <p className="text-sm text-muted-foreground">Ringkasan sekolah</p>
          <h2 className="text-3xl font-semibold tracking-tight">Dashboard</h2>
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {metrics.map((metric) => {
          const Icon = metric.icon;
          return (
            <div
              key={metric.label}
              className="rounded-xl border bg-card p-5 shadow-sm"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">
                    {metric.label}
                  </p>
                  <p className="mt-2 text-3xl font-semibold tracking-tight">
                    {metric.value}
                  </p>
                </div>
                <div
                  className={`rounded-lg p-2.5 ${metric.bg} ${metric.color}`}
                >
                  <Icon className="size-5" />
                </div>
              </div>
              <p className={`mt-4 text-xs ${metric.color}`}>{metric.note}</p>
            </div>
          );
        })}
      </div>
      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-xl border bg-card p-5 shadow-sm sm:p-6">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-semibold">Kehadiran Santri</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Ringkasan kehadiran saat ini
              </p>
            </div>
            <Badge variant="success">Stabil</Badge>
          </div>
          <div className="mt-5 rounded-lg bg-muted/50 p-5">
            <p className="text-sm text-muted-foreground">
              Persentase kehadiran
            </p>
            <p className="mt-2 text-4xl font-semibold">93%</p>
            <div className="mt-4 h-2 rounded-full bg-border">
              <div className="h-2 w-[93%] rounded-full bg-emerald-500" />
            </div>
          </div>
        </div>
        <div className="rounded-xl border bg-card p-5 shadow-sm sm:p-6">
          <div>
            <h3 className="font-semibold">Jumlah Santri per Kelas</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Distribusi santri tahun ajaran ini
            </p>
          </div>
          <div className="mt-5 grid grid-cols-3 gap-3 sm:grid-cols-6">
            <div className="rounded-lg bg-muted/50 p-3 text-center">
              <p className="text-sm font-semibold">VII</p>
              <p className="mt-1 text-xs text-muted-foreground">18 santri</p>
            </div>
            <div className="rounded-lg bg-muted/50 p-3 text-center">
              <p className="text-sm font-semibold">VIII</p>
              <p className="mt-1 text-xs text-muted-foreground">18 santri</p>
            </div>
            <div className="rounded-lg bg-muted/50 p-3 text-center">
              <p className="text-sm font-semibold">IX</p>
              <p className="mt-1 text-xs text-muted-foreground">18 santri</p>
            </div>
            <div className="rounded-lg bg-muted/50 p-3 text-center">
              <p className="text-sm font-semibold">X</p>
              <p className="mt-1 text-xs text-muted-foreground">18 santri</p>
            </div>
            <div className="rounded-lg bg-muted/50 p-3 text-center">
              <p className="text-sm font-semibold">XI</p>
              <p className="mt-1 text-xs text-muted-foreground">18 santri</p>
            </div>
            <div className="rounded-lg bg-muted/50 p-3 text-center">
              <p className="text-sm font-semibold">XII</p>
              <p className="mt-1 text-xs text-muted-foreground">18 santri</p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border bg-card p-5 shadow-sm">
          <h3 className="font-semibold">Ringkasan kehadiran</h3>
          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              ["Hadir", "2.948", "text-emerald-600"],
              ["Sakit", "86", "text-amber-600"],
              ["Izin", "74", "text-blue-600"],
              ["Alpa", "52", "text-red-600"],
            ].map(([label, value, color]) => (
              <div key={label} className="rounded-lg bg-muted/50 p-3">
                <p className="text-xs text-muted-foreground">{label}</p>
                <p className={`mt-1 text-xl font-semibold ${color}`}>{value}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-xl border bg-card p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold">Aksi cepat</h3>
            <BarChart3 className="size-5 text-muted-foreground" />
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <Button asChild variant="secondary">
              <NavLink to="/admin/santri/absensi">Catat absensi</NavLink>
            </Button>
            <Button asChild variant="outline">
              <NavLink to="/admin/jadwal">Buka jadwal</NavLink>
            </Button>
            <Button asChild variant="outline">
              <NavLink to="/admin/santri/nilai">Lihat nilai</NavLink>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
