import {
  BookOpen,
  CalendarDays,
  Clock3,
  MapPin,
  UserRound,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const schedule = [
  {
    time: "07:30 - 08:15",
    subject: "Kumpul Kelas",
    className: "VII - XII",
    teacher: "Wali kelas",
    room: "Ruang kelas",
  },
  {
    time: "08:15 - 09:00",
    subject: "Jam Pelajaran Pertama",
    className: "VII - XII",
    teacher: "Belum Di isi ",
    room: "Ruang kelas",
  },
  {
    time: "09:00 - 09:30",
    subject: "Istirahat",
    className: "VII - XII",
    teacher: "-",
    room: "Area istirahat",
  },
  {
    time: "09:30 - 10:15",
    subject: "Jam Pelajaran Kedua",
    className: "VII - XII",
    teacher: "Belum Di isi",
    room: "Ruang Kelas",
  },
  {
    time: "10:15 - 12:00",
    subject: "IT",
    className: "VII - XII",
    teacher: "Belum Di isi ",
    room: "Ruang Kelas",
  },
];

function Schedule() {
  return (
    <section className="mx-auto w-full max-w-4xl space-y-6">
      <div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <CalendarDays className="size-4" />
          Agenda pembelajaran
        </div>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight">
          Jadwal Kelas
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Jadwal kegiatan belajar santri hari ini.
        </p>
      </div>

      <div className="rounded-xl border bg-card p-5 shadow-sm">
        <div className="flex items-center justify-between gap-3 border-b pb-4">
          <div>
            <p className="text-sm text-muted-foreground">Hari ini</p>
            <h3 className="mt-1 text-xl font-semibold">Jadwal Senin</h3>
          </div>
          <Badge variant="success">5 sesi</Badge>
        </div>

        <div className="mt-5 space-y-4">
          {schedule.map((item) => (
            <div key={item.subject} className="rounded-lg border p-4">
              <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
                <div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock3 className="size-4" />
                    {item.time}
                  </div>
                  <h3 className="mt-2 text-lg font-semibold">{item.subject}</h3>
                </div>
                <span className="rounded-md bg-muted px-2.5 py-1 text-xs font-medium">
                  Kelas {item.className}
                </span>
              </div>
              <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <UserRound className="size-4" />
                  {item.teacher}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="size-4" />
                  {item.room}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-3 rounded-xl border bg-card p-4 text-sm text-muted-foreground">
        <BookOpen className="size-5 text-primary" />
        <span>Jadwal belajar santri untuk satu hari.</span>
      </div>
    </section>
  );
}

export default Schedule;
