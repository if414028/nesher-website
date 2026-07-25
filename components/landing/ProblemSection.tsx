import {
  Database,
  LockKeyhole,
  Puzzle,
  Workflow,
} from "lucide-react";

const businessProblems = [
  {
    title: "Proses bisnis masih dipaksa masuk template",
    description:
      "Workflow tim harus menyesuaikan fitur bawaan. Akhirnya pekerjaan tetap dicatat ulang di spreadsheet dan proses menjadi dua kali lebih panjang.",
    icon: Puzzle,
  },
  {
    title: "Data tersebar di banyak tools berbeda",
    description:
      "Operasional, penjualan, inventori, dan laporan berjalan sendiri-sendiri. Tidak ada satu dashboard yang bisa dipercaya oleh management.",
    icon: Database,
  },
  {
    title: "Sulit mengembangkan sistem yang sudah ada",
    description:
      "Perubahan kecil membutuhkan workaround baru. Fitur bertambah, tetapi fondasi sistem tidak cukup fleksibel untuk mengikuti pertumbuhan bisnis.",
    icon: LockKeyhole,
  },
  {
    title: "Integrasi antar sistem rumit dan rapuh",
    description:
      "API, pembayaran, logistik, dan tools internal dihubungkan tanpa alur yang jelas. Satu perubahan dapat mengganggu seluruh operasional.",
    icon: Workflow,
  },
] as const;

export function ProblemSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[var(--nesher-purple-50)] py-24 text-[var(--nesher-ink)] sm:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-60 [background-image:linear-gradient(rgba(109,40,217,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(109,40,217,0.07)_1px,transparent_1px)] [background-size:64px_64px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_40%,rgba(196,181,253,0.24),transparent_56%)]"
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-end gap-8 lg:grid-cols-[1.45fr_0.7fr] lg:gap-20">
          <h2 className="max-w-3xl text-balance text-4xl font-semibold leading-[1.04] tracking-[-0.045em] sm:text-5xl lg:text-[3.65rem]">
            Bisnis berkembang, tapi sistem{" "}
            <span className="font-normal italic text-primary">
              tidak lagi pas
            </span>{" "}
            dengan cara kerja tim.
          </h2>

          <p className="max-w-md text-pretty text-sm leading-7 text-[var(--nesher-body)] sm:text-base">
            Empat tanda yang sering muncul sebelum bisnis memutuskan membangun
            sistem sendiri. Kalau terasa familiar, fondasi digital Anda mungkin
            sudah waktunya dirancang ulang.
          </p>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-2">
          {businessProblems.map((problem, index) => {
            const Icon = problem.icon;
            const number = String(index + 1).padStart(2, "0");

            return (
              <article
                key={problem.title}
                className="nesher-liquid nesher-hover-lift group relative min-h-60 rounded-[1.75rem] p-7 sm:p-8"
              >
                <div className="flex items-start justify-end border-b border-primary/10 pb-5">
                  <div className="flex items-center gap-3">
                    <Icon className="size-4 text-primary" strokeWidth={1.8} />
                    <span className="text-2xl font-semibold tracking-[-0.04em] text-primary/12">
                      {number}
                    </span>
                  </div>
                </div>

                <h3 className="mt-6 max-w-md text-xl font-semibold leading-snug tracking-[-0.025em] text-[var(--nesher-ink)]">
                  {problem.title}
                </h3>
                <p className="mt-3 max-w-xl text-sm leading-6 text-[var(--nesher-body)]">
                  {problem.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
