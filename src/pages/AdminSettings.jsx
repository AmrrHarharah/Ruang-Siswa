import { Settings } from "lucide-react";

function AdminSettings() {
  return (
    <section className="mx-auto w-full max-w-3xl space-y-6">
      <div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Settings className="size-4" />
          Admin
        </div>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight">
          Pengaturan
        </h2>
        <p className="mt-1 text-muted-foreground">
          Pengaturan dasar dashboard pembelajaran.
        </p>
      </div>
      <div className="rounded-xl border bg-card p-6 shadow-sm">
        <h3 className="font-semibold">Dashboard Pembelajaran</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Sistem pembelajaran santri untuk mengelola jadwal, kelas, nilai, dan
          absensi.
        </p>
      </div>
    </section>
  );
}

export default AdminSettings;
