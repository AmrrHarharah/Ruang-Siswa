import { useState } from "react";
import { NavLink, Outlet } from "react-router";
import { Check, ClipboardCheck, Search, UsersRound } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const santriList = [
  { name: "Abdul hafidz", className: "XI A", status: "Aktif" },
  { name: "Imam bonjol", className: "XI A", status: "Aktif" },
  { name: "Abdur", className: "XI B", status: "Aktif" },
  { name: "Raky", className: "XI B", status: "Aktif" },
];

const grades = [
  { name: "Abdul hafidz", matematika: 88, islamicStudies: 92, average: 90 },
  { name: "Imam bonjol", matematika: 94, islamicStudies: 96, average: 95 },
  { name: "Abdur", matematika: 82, islamicStudies: 86, average: 84 },
  { name: "Raky", matematika: 90, islamicStudies: 89, average: 89.5 },
];

function SantriLayout() {
  const navLinkClass = ({ isActive }) =>
    `inline-flex items-center justify-center whitespace-nowrap rounded-md px-2.5 py-0.5 text-xs font-medium transition-all ${
      isActive
        ? "bg-background text-foreground shadow-sm"
        : "hover:text-foreground"
    }`;

  return (
    <section className="flex flex-col">
      <header className="flex flex-col gap-1">
        <h1 className="text-2xl font-semibold">Santri</h1>
        <p className="text-xs text-muted-foreground">
          Kelola data santri, nilai, dan absensi.
        </p>
      </header>

      <nav className="inline-flex h-8 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground mt-4 w-fit">
        <NavLink to="/admin/santri" className={navLinkClass}>
          Daftar
        </NavLink>

        <NavLink to="/admin/santri/nilai" className={navLinkClass}>
          Nilai
        </NavLink>

        <NavLink to="/admin/santri/absensi" className={navLinkClass}>
          Absensi
        </NavLink>
      </nav>

      <main className="border p-4 rounded-lg mt-5">
        <Outlet />
      </main>
    </section>
  );
}

export default SantriLayout;

export function SantriList() {
  const [search, setSearch] = useState("");
  const filteredSantri = santriList.filter((santri) =>
    santri.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <section>
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
        <div>
          <h2 className="text-lg font-semibold">Daftar Santri</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Daftar santri yang terdaftar dalam sistem.
          </p>
        </div>
        <div className="flex items-center gap-2 rounded-md bg-muted px-3 py-2 text-sm">
          <UsersRound className="size-4 text-muted-foreground" />
          <span className="font-medium">{santriList.length} santri aktif</span>
        </div>
      </div>
      <div className="relative mt-4 max-w-sm">
        <Search className="absolute top-2.5 left-2.5 size-4 text-muted-foreground" />
        <Input
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Cari nama santri..."
          className="pl-8"
        />
      </div>
      <div className="mt-4 overflow-x-auto rounded-md border">
        <table className="w-full text-sm">
          <thead className="bg-muted/50 text-left">
            <tr>
              <th className="px-4 py-3 font-medium">No</th>
              <th className="px-4 py-3 font-medium">Nama</th>
              <th className="px-4 py-3 font-medium">Kelas</th>
              <th className="px-4 py-3 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredSantri.map((santri, index) => (
              <tr key={santri.name} className="border-t">
                <td className="px-4 py-3">{index + 1}</td>
                <td className="px-4 py-3 font-medium">{santri.name}</td>
                <td className="px-4 py-3">{santri.className}</td>
                <td className="px-4 py-3 text-emerald-600">{santri.status}</td>
              </tr>
            ))}
            {filteredSantri.length === 0 && (
              <tr>
                <td
                  colSpan="4"
                  className="px-4 py-8 text-center text-sm text-muted-foreground"
                >
                  Santri tidak ditemukan.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export function Nilai() {
  return (
    <section>
      <h2 className="text-lg font-semibold">Nilai Santri</h2>
      <p className="mt-1 text-sm text-muted-foreground">
        Rekap nilai mata pelajaran santri.
      </p>
      <div className="mt-4 overflow-x-auto rounded-md border">
        <table className="w-full text-sm">
          <thead className="bg-muted/50 text-left">
            <tr>
              <th className="px-4 py-3 font-medium">Nama</th>
              <th className="px-4 py-3 font-medium">Matematika</th>
              <th className="px-4 py-3 font-medium">PAI</th>
              <th className="px-4 py-3 font-medium">Rata-rata</th>
            </tr>
          </thead>
          <tbody>
            {grades.map((grade) => (
              <tr key={grade.name} className="border-t">
                <td className="px-4 py-3 font-medium">{grade.name}</td>
                <td className="px-4 py-3">{grade.matematika}</td>
                <td className="px-4 py-3">{grade.islamicStudies}</td>
                <td className="px-4 py-3 font-semibold">{grade.average}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export function Absensi() {
  const [statuses, setStatuses] = useState(
    Object.fromEntries(santriList.map((santri) => [santri.name, "Hadir"])),
  );
  const [saved, setSaved] = useState(false);
  const statusOptions = ["Hadir", "Izin", "Sakit", "Alpa"];
  const totalStatuses = statusOptions.reduce(
    (summary, status) => ({
      ...summary,
      [status]: Object.values(statuses).filter((value) => value === status)
        .length,
    }),
    {},
  );

  function updateStatus(name, status) {
    setStatuses((current) => ({ ...current, [name]: status }));
    setSaved(false);
  }

  function saveAttendance() {
    setSaved(true);
  }

  return (
    <section className="space-y-5">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
        <div>
          <h2 className="text-lg font-semibold">Absensi Hari Ini</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Tandai kehadiran setiap santri untuk kegiatan belajar hari ini.
          </p>
        </div>
        <Button onClick={saveAttendance}>
          <ClipboardCheck className="size-4" />
          Simpan absensi
        </Button>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {statusOptions.map((status) => (
          <div key={status} className="rounded-lg border bg-card p-3">
            <p className="text-xs text-muted-foreground">{status}</p>
            <p className="mt-1 text-2xl font-semibold">
              {totalStatuses[status]}
            </p>
          </div>
        ))}
      </div>

      {saved && (
        <div className="flex items-center gap-2 rounded-lg bg-emerald-50 px-4 py-3 text-sm text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300">
          <Check className="size-4" /> Absensi berhasil disimpan.
        </div>
      )}

      <div className="overflow-x-auto rounded-lg border">
        <table className="w-full min-w-[680px] text-sm">
          <thead className="bg-muted/50 text-left">
            <tr>
              <th className="px-4 py-3 font-medium">No</th>
              <th className="px-4 py-3 font-medium">Nama santri</th>
              <th className="px-4 py-3 font-medium">Kelas</th>
              <th className="px-4 py-3 font-medium">Status kehadiran</th>
            </tr>
          </thead>
          <tbody>
            {santriList.map((santri, index) => (
              <tr key={santri.name} className="border-t">
                <td className="px-4 py-3 text-muted-foreground">{index + 1}</td>
                <td className="px-4 py-3 font-medium">{santri.name}</td>
                <td className="px-4 py-3">{santri.className}</td>
                <td className="px-4 py-3">
                  <div className="flex flex-wrap items-center gap-1.5">
                    {statusOptions.map((status) => (
                      <button
                        key={status}
                        type="button"
                        onClick={() => updateStatus(santri.name, status)}
                        className={`rounded-md border px-2.5 py-1 text-xs font-medium transition-colors ${statuses[santri.name] === status ? "border-primary bg-primary text-primary-foreground" : "border-border hover:bg-muted"}`}
                      >
                        {status}
                      </button>
                    ))}
                    <Badge
                      variant={
                        statuses[santri.name] === "Hadir"
                          ? "success"
                          : "secondary"
                      }
                    >
                      {statuses[santri.name]}
                    </Badge>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
