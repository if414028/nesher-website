export const whatsappUrl = "https://wa.me/6285121069310";

export const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "Services", href: "/#services" },
  { label: "Portfolio", href: "/#portfolio" },
  { label: "Process", href: "/#process" },
  { label: "Contact", href: whatsappUrl },
];

export const highlightServices = [
  "Company Profile",
  "Web Application",
  "Dashboard System",
  "Mobile App",
  "UI/UX Design",
  "Maintenance",
];

export const problems = [
  "Website terlihat kurang profesional",
  "Tampilan belum mobile-friendly",
  "Proses operasional masih manual",
  "Data bisnis sulit dipantau",
  "Customer sulit menemukan informasi",
  "Sistem belum sesuai workflow bisnis",
];

export const services = [
  {
    title: "Company Profile Website",
    description:
      "Website profesional untuk meningkatkan kredibilitas brand dan membantu calon pelanggan mengenal bisnis Anda dengan lebih mudah.",
  },
  {
    title: "Web Application",
    description:
      "Sistem berbasis web untuk operasional, portal client, CRM, LMS, internal tools, dan kebutuhan custom lainnya.",
  },
  {
    title: "Dashboard & Reporting System",
    description:
      "Visualisasi data bisnis dalam bentuk dashboard yang mudah dipahami oleh owner, admin, dan management.",
  },
  {
    title: "Mobile Application",
    description:
      "Aplikasi Android dan iOS untuk customer, komunitas, organisasi, atau kebutuhan internal perusahaan.",
  },
  {
    title: "UI/UX Design",
    description:
      "Desain interface yang modern, rapi, mudah digunakan, dan sesuai dengan karakter brand Anda.",
  },
  {
    title: "Maintenance & Optimization",
    description:
      "Support lanjutan untuk update, bug fixing, improvement, optimasi performa, dan pengembangan fitur.",
  },
];

export const showcaseFeatures = [
  {
    eyebrow: "Website Profesional",
    title: "Website yang Membuat Brand Terlihat Lebih Meyakinkan",
    text: "Bangun website yang cepat, responsive, SEO-friendly, dan memiliki tampilan modern sesuai karakter bisnis Anda.",
    type: "website",
  },
  {
    eyebrow: "Dashboard untuk Keputusan Bisnis",
    title: "Pantau Data Bisnis dengan Dashboard yang Jelas",
    text: "Ubah data menjadi insight yang mudah dibaca melalui chart, metric card, table, dan report yang rapi.",
    type: "dashboard",
  },
  {
    eyebrow: "Sistem Custom untuk Workflow Anda",
    title: "Sistem yang Mengikuti Alur Kerja Bisnis Anda",
    text: "Kami membangun web app custom yang menyesuaikan proses bisnis, bukan memaksa bisnis mengikuti template.",
    type: "workflow",
  },
];

export const portfolioItems = [
  {
    title: "MyHananeelCinta",
    category: "Mobile Application",
    description:
      "Aplikasi official Gereja JKI Hananeel Cinta untuk Android dan iOS, berisi management jemaat, informasi ibadah, informasi gereja, dan permintaan doa.",
    href: "/portfolio/myhananeelcinta",
    image: "/portfolio/myhananeelcinta/home.webp",
    previewType: "mobile",
  },
  {
    title: "LetsGrowAcademy",
    category: "Dashboard System",
    description:
      "Dashboard sales Coway untuk memantau network sales, performance, report, sales order, dan kontes penunjang kinerja tim.",
    href: "/portfolio/letsgrowacademy",
    image: "/portfolio/letsgrowacademy/overview-dashboard.png",
  },
  {
    title: "AdaInventory",
    category: "Android RFID Application",
    description:
      "Aplikasi Android untuk PT Adamata yang terintegrasi dengan handheld RFID UHF-RH03 dan thermal Bluetooth printer untuk tagging klasifikasi sampah.",
    href: "/portfolio/adainventory",
    image: "/portfolio/adainventory/home.png",
    previewType: "mobile",
  },
  {
    title: "Panti Sosial Mutiara Karawang",
    category: "Company Profile Website",
    description:
      "Website publikasi untuk Panti Sosial Mutiara Karawang agar profil, layanan, galeri kegiatan, dan informasi kontak mudah diakses publik.",
    href: "/portfolio/panti-sosial-mutiara-karawang",
    image: "/portfolio/panti-sosial-mutiara-karawang/home.png",
  },
  {
    title: "Dashboard Profesional",
    category: "Dashboard System",
    description:
      "Sistem reporting untuk membantu management memantau performa bisnis dan mengambil keputusan berbasis data.",
    href: whatsappUrl,
  },
  {
    title: "Custom Web Application",
    category: "Web Application",
    description:
      "Sistem berbasis web yang dibuat sesuai workflow bisnis dan kebutuhan operasional.",
    href: whatsappUrl,
  },
];

export const letsGrowAcademyDetail = {
  title: "LetsGrowAcademy",
  category: "Dashboard System",
  subtitle:
    "Dashboard untuk memantau kinerja sales produk Coway, mulai dari network sales, performance, report, sales order, sampai kontes yang membantu mendorong produktivitas tim.",
  overview:
    "LetsGrowAcademy dirancang sebagai pusat monitoring untuk sales dan management. Sistem ini membantu tim melihat performa penjualan, struktur partner, status order, laporan periode tertentu, serta progress kontes sales secara lebih rapi dan mudah ditindaklanjuti.",
  client: "Coway sales enablement",
  year: "2026",
  role: "Dashboard development",
  stack: ["Laravel", "Tailwind CSS", "Blade", "MariaDB"],
  highlights: [
    "Network sales tree untuk melihat struktur direct report dan partner aktif.",
    "Performance dashboard dengan metric key-in, recurring, pending, scheduled, dan total net sales.",
    "Report leaderboard untuk membaca performa Health Planner pada periode tertentu.",
    "Sales order table dengan filter status dan pagination untuk operasional harian.",
    "Contest module untuk membuat challenge, rules qualifier, tracking pemenang, dan evaluasi peserta.",
  ],
  gallery: [
    {
      title: "Overview Dashboard",
      description:
        "Ringkasan sales performance, kontes aktif, dan sales trend dalam satu tampilan.",
      src: "/portfolio/letsgrowacademy/overview-dashboard.png",
    },
    {
      title: "Partner Tree",
      description:
        "Visualisasi network sales dan direct report untuk memantau struktur tim.",
      src: "/portfolio/letsgrowacademy/partner-tree-screen.png",
    },
    {
      title: "Performance",
      description:
        "Monitoring kinerja tim sales dengan data key-in, recurring, pending, dan total NS.",
      src: "/portfolio/letsgrowacademy/performance-screen.png",
    },
    {
      title: "Reports",
      description:
        "Laporan leaderboard berbasis range tanggal untuk evaluasi performa berkala.",
      src: "/portfolio/letsgrowacademy/reports-screen.png",
    },
    {
      title: "Sales Orders",
      description:
        "Daftar sales order dengan status verifikasi, CCP, recurring, dan action detail.",
      src: "/portfolio/letsgrowacademy/sales-orders-screen.png",
    },
    {
      title: "Contest Detail",
      description:
        "Detail kontes, rules qualifier, reward, banner, dan evaluasi peserta.",
      src: "/portfolio/letsgrowacademy/contest-detail-screen.png",
    },
  ],
};

export const myHananeelCintaDetail = {
  title: "MyHananeelCinta",
  category: "Mobile Application",
  subtitle:
    "Aplikasi official Gereja JKI Hananeel Cinta untuk Android dan iOS, dibuat agar jemaat dapat mengakses informasi ibadah, informasi gereja, renungan, dan permintaan doa dalam satu aplikasi.",
  overview:
    "MyHananeelCinta membantu gereja menghadirkan kanal digital yang rapi untuk jemaat. Aplikasi ini menyatukan kebutuhan informasi, data jemaat, jadwal ibadah, renungan, persembahan, dan permintaan doa sehingga jemaat dapat tetap terhubung dengan aktivitas gereja melalui perangkat mobile.",
  client: "Gereja JKI Hananeel Cinta",
  platform: "Android & iOS",
  role: "Mobile app development",
  toneColor: "#990026",
  stack: ["Mobile Application", "Android", "iOS", "API Integration", "Member Management"],
  highlights: [
    "Authentication flow untuk akses aplikasi jemaat.",
    "Homepage berisi sapaan personal, renungan, pengumuman, dan menu utama.",
    "Informasi ibadah dan informasi gereja yang mudah diakses jemaat.",
    "Renungan harian dengan daftar konten dan halaman detail bacaan.",
    "Form permintaan doa untuk kunjungan, bantuan doa, dan konseling.",
    "Fitur pendukung gereja seperti persembahan dan informasi rekening.",
  ],
  gallery: [
    {
      title: "Login",
      description:
        "Halaman masuk dengan identitas JKI Hananeel Cinta dan akses akun jemaat.",
      src: "/portfolio/myhananeelcinta/login.webp",
    },
    {
      title: "Home",
      description:
        "Dashboard jemaat berisi renungan, pengumuman, dan menu utama seperti Ibadah, Permintaan Doa, dan Renungan.",
      src: "/portfolio/myhananeelcinta/home.webp",
    },
    {
      title: "Detail Renungan",
      description:
        "Halaman bacaan renungan dengan layout teks yang nyaman untuk dibaca di mobile.",
      src: "/portfolio/myhananeelcinta/renungan-detail.webp",
    },
    {
      title: "Persembahan",
      description:
        "Informasi persembahan dan rekening gereja dengan tampilan yang jelas.",
      src: "/portfolio/myhananeelcinta/persembahan.webp",
    },
    {
      title: "Informasi Ibadah",
      description:
        "Jadwal dan informasi ibadah gereja dalam kartu yang mudah dipindai.",
      src: "/portfolio/myhananeelcinta/ibadah.webp",
    },
    {
      title: "Daftar Renungan",
      description:
        "Daftar renungan berdasarkan tanggal dengan preview isi renungan.",
      src: "/portfolio/myhananeelcinta/daftar-renungan.webp",
    },
    {
      title: "Permintaan Doa",
      description:
        "Form permintaan doa untuk kunjungan, bantuan doa, atau konseling.",
      src: "/portfolio/myhananeelcinta/permintaan-doa.webp",
    },
  ],
};

export const adaInventoryDetail = {
  title: "AdaInventory",
  category: "Android RFID Application",
  subtitle:
    "Aplikasi Android untuk PT Adamata yang dibuat khusus terintegrasi dengan perangkat handheld RFID UHF-RH03, thermal Bluetooth printer, dan backend Flask untuk proses tagging klasifikasi sampah menggunakan RFID Tag.",
  overview:
    "AdaInventory membantu proses klasifikasi dan pelacakan sampah menjadi lebih cepat dan terstruktur. Operator dapat membuat label sampah, menulis RFID Tag melalui handheld UHF-RH03, mencetak label dengan thermal Bluetooth printer, serta melakukan stock opname yang terhubung ke backend Flask dan database PostgreSQL.",
  client: "PT Adamata",
  platform: "Android",
  role: "Android app & backend integration",
  toneColor: "#5EC9CF",
  stack: [
    "Android",
    "RFID UHF-RH03",
    "Thermal Bluetooth Printer",
    "Flask",
    "PostgreSQL",
    "REST API",
  ],
  highlights: [
    "Integrasi khusus dengan perangkat handheld RFID UHF-RH03 untuk membaca dan menulis RFID Tag.",
    "Pembuatan label sampah berdasarkan tipe, vertikal, sumber, lokasi warehouse, station, shift, tanggal, dan berat.",
    "Print label sampah melalui thermal Bluetooth printer langsung dari aplikasi Android.",
    "Stock opname untuk memantau pekerjaan klasifikasi dan status penyelesaian.",
    "RFID settings untuk konfigurasi power, band, session, frequency point, dan RFLink.",
    "Backend Flask dengan PostgreSQL untuk penyimpanan data label, klasifikasi, dan sinkronisasi aplikasi.",
  ],
  gallery: [
    {
      title: "Home",
      description:
        "Halaman utama untuk menghubungkan Bluetooth printer, RFID handheld, dan akses cepat ke modul labelling, setting, putaway, dan digital storage.",
      src: "/portfolio/adainventory/home.png",
    },
    {
      title: "Buat Label Baru",
      description:
        "Form pembuatan label sampah dengan nomor otomatis dan data klasifikasi seperti tipe, vertikal, sumber, lokasi, station, tanggal, shift, dan berat.",
      src: "/portfolio/adainventory/labelling-create.png",
    },
    {
      title: "Rincian Label",
      description:
        "Detail label RFID berisi data klasifikasi sampah, nomor label, lokasi, berat, serta action untuk print dan write RFID Tag.",
      src: "/portfolio/adainventory/labelling-detail.png",
    },
    {
      title: "RFID Setting",
      description:
        "Pengaturan teknis RFID handheld untuk power, band, session, frequency point, RFLink, EPC, dan TID.",
      src: "/portfolio/adainventory/settings.png",
    },
    {
      title: "Write RFID Tag",
      description:
        "Flow penulisan data ke RFID Tag melalui tuas perangkat handheld RFID.",
      src: "/portfolio/adainventory/labelling-write-tag.png",
    },
    {
      title: "Stock Opname",
      description:
        "Daftar pekerjaan stock opname dengan status selesai atau kerjakan untuk setiap kategori sampah dan lokasi.",
      src: "/portfolio/adainventory/stockopname.png",
    },
    {
      title: "Print Label",
      description:
        "Konfirmasi print label untuk memastikan thermal Bluetooth printer sudah terhubung sebelum mencetak.",
      src: "/portfolio/adainventory/labelling-print.png",
    },
    {
      title: "Labelling",
      description:
        "Daftar label RFID dengan tombol rincian dan akses untuk membuat label baru.",
      src: "/portfolio/adainventory/labelling.png",
    },
  ],
};

export const pantiSosialMutiaraKarawangDetail = {
  title: "Panti Sosial Mutiara Karawang",
  category: "Company Profile Website",
  subtitle:
    "Website company profile untuk Panti Sosial Mutiara Karawang yang dibuat sebagai sarana publikasi profil panti sosial, layanan, galeri kegiatan, dan informasi kontak kepada publik.",
  overview:
    "Website ini membantu Panti Sosial Mutiara Karawang memperkenalkan pelayanan mereka secara lebih rapi dan mudah diakses. Pengunjung dapat melihat profil panti, memahami layanan yang diberikan, menelusuri galeri kegiatan, serta menemukan informasi kontak dan lokasi panti secara jelas.",
  client: "Panti Sosial Mutiara Karawang",
  platform: "Website",
  role: "Company profile website development",
  stack: ["Next.js", "Responsive Website", "Company Profile", "Gallery", "Contact Section"],
  highlights: [
    "Hero section dengan visual kegiatan panti dan headline yang langsung menjelaskan identitas lembaga.",
    "Halaman tentang kami untuk menjelaskan sejarah, profil, dan tujuan pelayanan panti sosial.",
    "Section layanan untuk menampilkan pelayanan seperti doa, konseling, dan pengobatan medis.",
    "Galeri kegiatan untuk memperlihatkan aktivitas pelayanan dan kehidupan sehari-hari di panti.",
    "Halaman kontak dengan email, nomor telepon, alamat, dan peta lokasi.",
    "Dibangun dengan Next.js agar struktur website siap dikembangkan dan mudah dikelola.",
  ],
  gallery: [
    {
      title: "Beranda",
      description:
        "Landing page utama dengan hero image, headline, dan pengantar singkat tentang Panti Sosial Mutiara Karawang.",
      src: "/portfolio/panti-sosial-mutiara-karawang/home.png",
    },
    {
      title: "Tentang Kami",
      description:
        "Halaman profil yang menjelaskan sejarah panti sosial dan pelayanan kepada penyandang disabilitas mental.",
      src: "/portfolio/panti-sosial-mutiara-karawang/about.png",
    },
    {
      title: "Pelayanan",
      description:
        "Section layanan dengan kartu informasi untuk doa, konseling, dan pengobatan medis.",
      src: "/portfolio/panti-sosial-mutiara-karawang/services.png",
    },
    {
      title: "Galeri Kegiatan",
      description:
        "Galeri foto kegiatan panti sebagai media publikasi dan dokumentasi aktivitas pelayanan.",
      src: "/portfolio/panti-sosial-mutiara-karawang/gallery.png",
    },
    {
      title: "Kontak",
      description:
        "Halaman kontak berisi email, nomor telepon, alamat, gambar kegiatan, dan peta lokasi.",
      src: "/portfolio/panti-sosial-mutiara-karawang/contact.png",
    },
  ],
};

export const processSteps = [
  {
    title: "Discovery",
    description:
      "Kami memahami kebutuhan, target user, tujuan bisnis, dan scope awal project.",
  },
  {
    title: "Planning",
    description:
      "Kami menyusun struktur fitur, timeline, estimasi biaya, dan prioritas pengerjaan.",
  },
  {
    title: "UI/UX Design",
    description:
      "Kami membuat desain yang modern, rapi, dan mudah digunakan sebelum development dimulai.",
  },
  {
    title: "Development",
    description:
      "Website atau sistem dibangun dengan teknologi modern dan struktur code yang scalable.",
  },
  {
    title: "Testing & Revision",
    description:
      "Kami melakukan pengujian, perbaikan, dan penyesuaian agar hasil sesuai kebutuhan.",
  },
  {
    title: "Launch & Maintenance",
    description:
      "Project dipublish dan bisa dilanjutkan dengan support, update, serta improvement.",
  },
];

export const whyNesher = [
  "Desain modern dan profesional",
  "Sistem dibuat sesuai kebutuhan bisnis",
  "Komunikasi jelas selama pengerjaan",
  "Teknologi modern dan scalable",
  "Bisa lanjut maintenance setelah launching",
  "Fokus pada hasil bisnis, bukan sekadar tampilan",
];

export const techStack = [
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "shadcn/ui",
  "Framer Motion",
  "Laravel",
  "REST API",
  "MySQL / PostgreSQL",
  "Firebase",
  "Android / iOS",
  "Cloud Hosting",
];

export const faqItems = [
  {
    question: "Berapa lama pembuatan website company profile?",
    answer:
      "Tergantung kompleksitas, jumlah halaman, dan kebutuhan fitur. Setelah discovery, kami akan memberikan estimasi timeline yang jelas.",
  },
  {
    question: "Apakah desain bisa custom sesuai brand?",
    answer:
      "Bisa. Desain akan disesuaikan dengan karakter brand, target user, dan tujuan bisnis Anda.",
  },
  {
    question: "Apakah Nesher bisa membuat sistem selain website?",
    answer:
      "Bisa. Kami juga mengembangkan web application, dashboard, mobile app, dan sistem custom sesuai kebutuhan bisnis.",
  },
  {
    question: "Apakah bisa dibantu hosting dan domain?",
    answer:
      "Bisa. Kami dapat membantu proses setup hosting, domain, deployment, dan konfigurasi teknis lainnya.",
  },
  {
    question: "Apakah tersedia maintenance setelah website live?",
    answer:
      "Bisa. Kami menyediakan support lanjutan untuk update, bug fixing, optimasi, dan pengembangan fitur.",
  },
];
