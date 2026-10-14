import { useState } from "react";
import {
  ArrowUpRight,
  BookOpen,
  GraduationCap,
  UsersRound,
} from "lucide-react";
import { NavLink } from "react-router";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const classLevels = [
  {
    level: "VII",
    students: 18,
    homeroom: "Ust. Ahmad",
    color: "border-l-blue-500",
  },
  {
    level: "VIII",
    students: 18,
    homeroom: "Ust. Fauzan",
    color: "border-l-emerald-500",
  },
  {
    level: "IX",
    students: 18,
    homeroom: "Ust. Hasan",
    color: "border-l-violet-500",
  },
  {
    level: "X",
    students: 18,
    homeroom: "Ust. Thohir",
    color: "border-l-amber-500",
  },
  {
    level: "XI",
    students: 18,
    homeroom: "Ust. Ridwan",
    color: "border-l-rose-500",
  },
  {
    level: "XII",
    students: 18,
    homeroom: "Ust. Ibrahim",
    color: "border-l-cyan-500",
  },
];

function Classes() {
  const [selectedLevel, setSelectedLevel] = useState("Semua");
  const visibleClasses =
    selectedLevel === "Semua"
      ? classLevels
      : classLevels.filter((item) => item.level === selectedLevel);
  const totalStudents = classLevels.reduce(
    (total, item) => total + item.students,
    0,
  );

  return (
    <section className="mx-auto w-full max-w-6xl space-y-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <GraduationCap className="size-4" />
            Struktur pendidikan
          </div>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight">
            Daftar Kelas
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Kelola ringkasan kelas dari tingkat VII sampai XII.
          </p>
        </div>
        <Button asChild variant="outline">
          <NavLink to="/admin/santri">
            Lihat data santri <ArrowUpRight className="size-4" />
          </NavLink>
        </Button>
      </div>
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-xl border bg-card p-5 shadow-sm">
          <UsersRound className="size-5 text-blue-600" />
          <p className="mt-3 text-sm text-muted-foreground">Total santri</p>
          <p className="mt-1 text-2xl font-semibold">{totalStudents}</p>
        </div>
        <div className="rounded-xl border bg-card p-5 shadow-sm">
          <BookOpen className="size-5 text-emerald-600" />
          <p className="mt-3 text-sm text-muted-foreground">Jenjang aktif</p>
          <p className="mt-1 text-2xl font-semibold">{classLevels.length}</p>
        </div>
        <div className="rounded-xl border bg-card p-5 shadow-sm">
          <GraduationCap className="size-5 text-violet-600" />
          <p className="mt-3 text-sm text-muted-foreground">
            Rata-rata per kelas
          </p>
          <p className="mt-1 text-2xl font-semibold">
            {Math.round(totalStudents / classLevels.length)} santri
          </p>
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        {["Semua", ...classLevels.map((item) => item.level)].map((level) => (
          <button
            key={level}
            type="button"
            onClick={() => setSelectedLevel(level)}
            className={`rounded-md border px-3 py-1.5 text-sm font-medium transition-colors ${selectedLevel === level ? "border-primary bg-primary text-primary-foreground" : "hover:bg-muted"}`}
          >
            {level === "Semua" ? "Semua jenjang" : `Kelas ${level}`}
          </button>
        ))}
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {visibleClasses.map((item) => (
          <div
            key={item.level}
            className={`rounded-xl border border-l-4 bg-card p-5 shadow-sm ${item.color}`}
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Tingkat</p>
                <h3 className="mt-1 text-3xl font-semibold">{item.level}</h3>
              </div>
              <Badge variant="secondary">Aktif</Badge>
            </div>
            <div className="mt-5 space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Jumlah santri</span>
                <span className="font-medium">{item.students}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Wali kelas</span>
                <span className="font-medium">{item.homeroom}</span>
              </div>
            </div>
            <Button
              asChild
              variant="ghost"
              className="mt-4 w-full justify-between"
            >
              <NavLink to="/admin/santri">
                Buka data kelas <ArrowUpRight className="size-4" />
              </NavLink>
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Classes;
