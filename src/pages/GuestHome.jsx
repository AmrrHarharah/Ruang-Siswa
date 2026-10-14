import { useState } from "react";
import { Link } from "react-router";
import {
  ArrowRight,
  BookOpen,
  ChevronDown,
  GraduationCap,
  Menu,
  Quote,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonial = {
  quote:
    "Belajar jadi lebih teratur karena semua jadwal dan absensi ada di satu tempat.",
  name: "Aisyah Rahma",
  role: "Santri kelas XI",
};

const questions = [
  {
    question: "Apa yang bisa dilakukan di Ruang Siswa?",
    answer:
      "Kamu dapat melihat jadwal, data santri, absensi, kelas, dan informasi pembelajaran dari satu dashboard.",
  },
  {
    question: "Apakah saya perlu membuat akun?",
    answer:
      "Buat akun melalui Sign Up agar bisa masuk ke dashboard pembelajaran.",
  },
  {
    question: "Apakah data saya tersimpan?",
    answer:
      "Untuk versi belajar ini, data akun disimpan di browser menggunakan localStorage.",
  },
];

function GuestHome() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openQuestion, setOpenQuestion] = useState(0);

  return (
    <div className="min-h-screen overflow-hidden bg-background text-foreground">
      <header className="sticky top-0 z-20 border-b bg-background/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 lg:px-8">
          <Link
            to="/"
            className="flex items-center gap-2 font-semibold tracking-tight"
          >
            <span className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <BookOpen className="size-5" />
            </span>
            Ruang Siswa
          </Link>
          <button
            type="button"
            className="rounded-md border p-2 md:hidden"
            onClick={() => setMenuOpen((current) => !current)}
            aria-label="Buka menu"
          >
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
          <nav
            className={`${menuOpen ? "flex" : "hidden"} absolute top-full left-0 w-full flex-col gap-1 border-b bg-background p-4 md:static md:flex md:w-auto md:flex-row md:items-center md:border-0 md:bg-transparent md:p-0`}
          >
            <a
              className="rounded px-3 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              href="#home"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </a>
            <a
              className="rounded px-3 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              href="#about"
              onClick={() => setMenuOpen(false)}
            >
              About
            </a>
            <a
              className="rounded px-3 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              href="#testimony"
              onClick={() => setMenuOpen(false)}
            >
              Testimony
            </a>
            <a
              className="rounded px-3 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              href="#faq"
              onClick={() => setMenuOpen(false)}
            >
              FAQ
            </a>
            <Button asChild size="sm" className="mt-2 md:mt-0 md:ml-2">
              <Link to="/sign-in">Sign In</Link>
            </Button>
          </nav>
        </div>
      </header>

      <main>
        <section
          id="home"
          className="relative mx-auto grid max-w-6xl gap-10 px-5 py-20 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:px-8 lg:py-28"
        >
          <div className="relative z-10">
            <p className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              <GraduationCap className="size-5" /> Ruang belajar bersama
            </p>
            <h1 className="max-w-2xl text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
              Belajar lebih terarah, tumbuh bersama.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
              Ruang Siswa membantu siswa dan pengajar mengelola kegiatan
              belajar dengan jadwal, kelas, dan absensi yang mudah dipahami.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild className="">
                <Link to="/sign-up">
                  Mulai belajar <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="">
                <a href="#about">Kenali platform</a>
              </Button>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-5 rounded-[2rem] border border-primary/20" />
            <div className="relative aspect-[4/3] rounded-2xl border bg-card p-5 shadow-sm">
              <div className="flex items-center justify-between border-b pb-4">
                <span className="flex items-center gap-2 text-sm font-medium">
                  <BookOpen className="size-4 text-primary" /> Dashboard belajar
                </span>
                <span className="size-2 rounded-full bg-primary" />
              </div>
              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-muted p-4">
                  <p className="text-xs text-muted-foreground">Kehadiran</p>
                  <p className="mt-2 text-2xl font-semibold">93%</p>
                </div>
                <div className="rounded-xl bg-muted p-4">
                  <p className="text-xs text-muted-foreground">Kelas aktif</p>
                  <p className="mt-2 text-2xl font-semibold">06</p>
                </div>
              </div>
              <div className="mt-3 rounded-xl bg-muted/60 p-4">
                <p className="text-xs text-muted-foreground">
                  Agenda berikutnya
                </p>
                <p className="mt-2 font-medium">Kajian dan diskusi kelas</p>
                <div className="mt-4 h-2 rounded-full bg-border">
                  <div className="h-2 w-2/3 rounded-full bg-primary" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="border-y bg-muted/30 px-5 py-20 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                About
              </p>
              <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
                Satu tempat untuk rutinitas belajar yang lebih rapi.
              </h2>
              <p className="mt-4 leading-7 text-muted-foreground">
                Dibuat untuk mempraktikkan React melalui pengalaman yang nyata:
                komponen, state, form, navigasi, dan data lokal yang saling
                terhubung.
              </p>
            </div>
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {[
                [
                  "01",
                  "Jadwal jelas",
                  "Atur agenda kelas agar tidak ada kegiatan yang terlewat.",
                ],
                [
                  "02",
                  "Data terarah",
                  "Kelola santri dan kelas dengan tampilan yang mudah dipindai.",
                ],
                [
                  "03",
                  "Progres terlihat",
                  "Gunakan absensi dan catatan belajar untuk melihat perkembangan.",
                ],
              ].map(([number, title, text]) => (
                <article
                  key={number}
                  className="rounded-xl border bg-card p-6 shadow-sm"
                >
                  <p className="text-sm text-primary">{number}</p>
                  <h3 className="mt-8 text-xl font-semibold">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="testimony"
          className="mx-auto max-w-6xl px-5 py-20 lg:px-8"
        >
          <div className="grid gap-8 lg:grid-cols-[.7fr_1.3fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Testimony
              </p>
              <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
                Cerita dari ruang belajar.
              </h2>
            </div>
            <div className="rounded-xl border bg-card p-7 shadow-sm sm:p-10">
              <Quote className="size-8 text-primary" />
              <p className="mt-5 text-xl leading-8">“{testimonial.quote}”</p>
              <div className="mt-7">
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="border-y bg-muted/30 px-5 py-20 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              FAQ
            </p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
              Pertanyaan yang sering muncul.
            </h2>
            <div className="mt-8 divide-y rounded-xl border bg-card px-5 shadow-sm">
              {questions.map((item, index) => (
                <div key={item.question}>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 py-5 text-left font-medium"
                    onClick={() =>
                      setOpenQuestion(openQuestion === index ? -1 : index)
                    }
                  >
                    {item.question}
                    <ChevronDown
                      className={`size-5 shrink-0 text-primary transition-transform ${openQuestion === index ? "rotate-180" : ""}`}
                    />
                  </button>
                  {openQuestion === index && (
                    <p className="-mt-2 pb-5 pr-8 text-sm leading-6 text-muted-foreground">
                      {item.answer}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 text-sm text-[#aebfbd] sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <Link to="/" className="font-semibold">
          Ruang Siswa
        </Link>
        <p className="text-muted-foreground">
          Belajar sedikit demi sedikit, konsisten setiap hari.
        </p>
        <Link className="text-primary hover:underline" to="/sign-in">
          Masuk ke dashboard
        </Link>
      </footer>
    </div>
  );
}

export default GuestHome;
