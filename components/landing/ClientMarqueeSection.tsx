import Image from "next/image";

const clientLogos = [
  {
    name: "JuangGroup",
    logo: "/images/juang-group-logo.svg",
  },
  {
    name: "Zoe Everblossom",
    logo: "/images/zoe-everblossom-logo.webp",
  },
  {
    name: "Lets Grow Academy",
    logo: "/images/letsgrowacademy-logo.webp",
  },
  {
    name: "PT. Ada Mata Indonesia",
    logo: "/images/ada-mata-indonesia-logo.png",
  },
  {
    name: "JKI Hananeel Cinta",
    logo: "/images/jki-hananeel-cinta-logo.webp",
  },
  {
    name: "Yayasan Mutiara Hotgabe",
    logo: "/images/yayasan-mutiara-hotgabe-logo.webp",
  },
  {
    name: "PT Indigital Semua Bisa",
    logo: "/images/indigital-semua-bisa-logo.webp",
  },
  {
    name: "Institut Teknologi Del",
    logo: "/images/institut-teknologi-del-logo.webp",
  },
  {
    name: "Relawan Ayo Jo",
    logo: "/images/relawan-ayojo-logo.webp",
  },
];

type ClientLogo = (typeof clientLogos)[number];

function LogoItem({ logo, name }: ClientLogo) {
  const initials = name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2);

  return (
    <div className="min-h-20 rounded-2xl px-4 py-4 text-[var(--nesher-purple-900)] transition duration-300 hover:-translate-y-1">
      {logo ? (
        <div className="flex h-full min-w-0 flex-col items-center justify-center gap-2 text-center">
          <span className="flex h-10 w-full items-center justify-center overflow-hidden">
            <Image
              src={logo}
              alt={`${name} logo`}
              width={180}
              height={120}
              className="h-10 w-auto max-w-full object-contain"
            />
          </span>
          <span className="block max-w-full break-words text-xs font-bold leading-tight tracking-wide text-[var(--nesher-carbon)]">
            {name}
          </span>
        </div>
      ) : (
        <div className="grid h-full min-w-0 grid-cols-[40px_1fr] items-center gap-3 text-left">
          <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-[var(--nesher-purple-75)] text-sm font-bold">
            {initials}
          </span>
          <span className="min-w-0 text-sm font-bold leading-tight tracking-wide text-[var(--nesher-carbon)]">
            {name}
          </span>
        </div>
      )}
    </div>
  );
}

export function ClientMarqueeSection() {
  return (
    <section className="bg-white px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-sm font-semibold text-primary">
          Dipercaya untuk membangun produk digital
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] text-[var(--nesher-ink)] sm:text-4xl">
          Beragam bisnis. Satu standar kualitas.
        </h2>

        <div className="mt-12 grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-x-4 gap-y-6">
          {clientLogos.map((logo) => (
            <LogoItem key={logo.name} {...logo} />
          ))}
        </div>
      </div>
    </section>
  );
}
