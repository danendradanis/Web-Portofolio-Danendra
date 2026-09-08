// ==========================================================================
// 1. CERTIFICATION DATABASE (12 OFFICIAL CREDENTIALS, PDFS & SYLLABUS)
// ==========================================================================
const certsData = {
  1: {
    title: "Dasar Perencanaan Sumberdaya Perusahaan (Fundamental ERP)",
    title_en: "Fundamental Enterprise Resource Planning (Fundamental ERP)",
    id: "719923",
    period: "20 Februari 2023",
    period_en: "February 20, 2023",
    cat: "Sistem ERP",
    cat_en: "ERP Systems",
    categoryFilter: "erp",
    issuer: "Universitas Gunadarma",
    issuer_en: "Universitas Gunadarma",
    pdf: "certificates/sertifikat-01-fundamental-erp.pdf",
    img: "assets/certificates/sertifikat-01-fundamental-erp.png",
    desc: "Pelatihan konsep dasar Enterprise Resource Planning (ERP) serta pengenalan proses bisnis dan implementasi sistem ERP terkemuka: ADempiere, Microsoft Dynamics NAV, dan SAP.",
    desc_en: "Core Enterprise Resource Planning (ERP) training covering business processes and leading enterprise ERP implementations: ADempiere, Microsoft Dynamics NAV, and SAP.",
    syllabus: [
      "Konsep Enterprise Resource Planning",
      "Konsep Dasar ADempiere",
      "Purchasing dalam ADempiere",
      "Gambaran Teknologi NAV",
      "Purchasing dalam NAV",
      "Sales Order dalam NAV",
      "Bill of Material (BOM) dalam NAV",
      "Pengenalan SAP (System Application and Product in Data Processing)"
    ],
    syllabus_en: [
      "Enterprise Resource Planning Concepts",
      "Fundamental ADempiere Concepts",
      "Purchasing in ADempiere",
      "NAV Technology Overview",
      "Purchasing in NAV",
      "Sales Order in NAV",
      "Bill of Material (BOM) in NAV",
      "Introduction to SAP Systems"
    ]
  },
  2: {
    title: "Dasar Pemrograman Berbasis Web (Fundamental Web Programming)",
    title_en: "Fundamental Web Programming",
    id: "100618",
    period: "19 Februari 2024",
    period_en: "February 19, 2024",
    cat: "Rekayasa Web",
    cat_en: "Web Engineering",
    categoryFilter: "web",
    issuer: "Universitas Gunadarma",
    issuer_en: "Universitas Gunadarma",
    pdf: "certificates/sertifikat-02-web-programming.pdf",
    img: "assets/certificates/sertifikat-02-web-programming.png",
    desc: "Fundamental rekayasa dan pengembangan aplikasi web: pengantar pemrograman Go, J2EE/Servlet, JSP, arsitektur .NET & C#, Server Control, CSS, dan Application State.",
    desc_en: "Web application engineering fundamentals: introduction to Go programming, J2EE/Servlet, JSP, .NET & C# architecture, Server Control, CSS, and Application State.",
    syllabus: [
      "Pengantar Pemrograman Web",
      "Pengantar Pemrograman Go",
      "Struktur Kontrol di Go (Looping Structure)",
      "Pengenalan J2EE dan Servlet",
      "Java Server Page (JSP) & Aplikasi Web J2EE",
      "Pengenalan .NET Framework & Pemrograman C#",
      "Server Control dan CSS pada ASP.NET",
      "Application State"
    ],
    syllabus_en: [
      "Introduction to Web Programming",
      "Introduction to Go Programming",
      "Control Structures in Go",
      "Introduction to J2EE & Servlets",
      "Java Server Page (JSP) & J2EE Web Apps",
      "Introduction to .NET Framework & C#",
      "Server Control & CSS in ASP.NET",
      "Application State Management"
    ]
  },
  3: {
    title: "Pemrograman Go untuk Tingkat Pemula (Go-Lang for Beginner)",
    title_en: "Go-Lang for Beginners",
    id: "728264",
    period: "19 Februari 2024",
    period_en: "February 19, 2024",
    cat: "Pemrograman Go",
    cat_en: "Go Programming",
    categoryFilter: "web",
    issuer: "Universitas Gunadarma",
    issuer_en: "Universitas Gunadarma",
    pdf: "certificates/sertifikat-03-golang-beginner.pdf",
    img: "assets/certificates/sertifikat-03-golang-beginner.png",
    desc: "Pemrograman Go dari dasar: sintaksis, variabel, tipe data, konversi data, konstanta, defer, operator, perulangan, percabangan, struct, pointer, slice, map, Polymer starterkit, client-side routing, serta web server JSON.",
    desc_en: "Go programming fundamentals: syntax, variables, data types, constants, defer, operators, loops, control flow, structs, pointers, slices, maps, Polymer starterkit, client-side routing, and JSON web servers.",
    syllabus: [
      "Konsep Dasar Bahasa Pemrograman Go",
      "Variabel, Tipe Data, Konversi, Konstanta, Defer & Operator",
      "Perulangan & Percabangan (Seleksi Kondisi)",
      "Struct, Pointer, Slice & Map pada Go",
      "Polymer: Instalasi & Menjalankan Starter Kit",
      "Polymer: Struktur Folder & Tata Letak",
      "Polymer: Client-Side Routing",
      "Go Web Server, JSON & Integrasi Polymer"
    ],
    syllabus_en: [
      "Fundamental Concepts of Go Language",
      "Variables, Data Types, Conversions, Defer & Operators",
      "Looping & Conditional Control Flow",
      "Structs, Pointers, Slices & Maps in Go",
      "Polymer: Installation & Starter Kit",
      "Polymer: Folder Structure & Layout",
      "Polymer: Client-Side Routing",
      "Go Web Server, JSON & Polymer Integration"
    ]
  },
  4: {
    title: "Microsoft Dynamics NAV untuk Tingkat Pemula (Dynamics NAV Beginner)",
    title_en: "Microsoft Dynamics NAV for Beginners",
    id: "772025",
    period: "19 Agustus 2024",
    period_en: "August 19, 2024",
    cat: "Sistem ERP",
    cat_en: "ERP Systems",
    categoryFilter: "erp",
    issuer: "Universitas Gunadarma",
    issuer_en: "Universitas Gunadarma",
    pdf: "certificates/sertifikat-04-dynamics-nav-beginner.pdf",
    img: "assets/certificates/sertifikat-04-dynamics-nav-beginner.png",
    desc: "Pengoperasian sistem ERP enterprise Microsoft Dynamics NAV: arsitektur teknologi, fungsi umum, buku besar umum (General Ledger), pengelolaan dimensi akun, manajemen master barang (Item Master), siklus pengadaan (Purchasing), siklus penjualan (Sales), dan persetujuan dokumen.",
    desc_en: "Operation of Microsoft Dynamics NAV enterprise ERP: technology architecture, General Ledger, account dimension management, Item Master, Purchasing cycle, Sales cycle, and document approvals.",
    syllabus: [
      "Technology Overview",
      "Use General Functions",
      "Working with General Ledger Accounts",
      "Add & View Dimensions",
      "Manage Items (Inventory)",
      "Process Purchases",
      "Process Sales",
      "Approve Documents & Application Areas"
    ],
    syllabus_en: [
      "Technology Overview",
      "Use General Functions",
      "Working with General Ledger Accounts",
      "Add & View Dimensions",
      "Manage Items (Inventory)",
      "Process Purchases",
      "Process Sales",
      "Approve Documents & Application Areas"
    ]
  },
  5: {
    title: "Pemrograman Go untuk Tingkat Menengah (Go-Lang for Intermediate)",
    title_en: "Go-Lang for Intermediate Level",
    id: "082297",
    period: "18 Agustus 2025",
    period_en: "August 18, 2025",
    cat: "Pemrograman Go",
    cat_en: "Go Programming",
    categoryFilter: "web",
    issuer: "Universitas Gunadarma",
    issuer_en: "Universitas Gunadarma",
    pdf: "certificates/sertifikat-05-golang-intermediate.pdf",
    img: "assets/certificates/sertifikat-05-golang-intermediate.png",
    desc: "Pengembangan perangkat lunak backend Go tingkat lanjutan: Test Driven Development (TDD), Unit Testing, fungsi dan metode, kueri SQL relasional pada Go, penanganan HTTP Request, Polymer data binding, observers, compute, layout styling, dan deployment.",
    desc_en: "Advanced Go backend software engineering: Test Driven Development (TDD), Unit Testing, methods, relational SQL queries in Go, HTTP Request handling, Polymer data binding, observers, compute, layout styling, and deployment.",
    syllabus: [
      "Test Driven Development (TDD) & Unit Test",
      "Function & Method",
      "Structured Query Language (SQL) pada Go",
      "HTTP Request pada Bahasa Pemrograman Go",
      "Polymer: Properties, Data Binding, Observer & Compute",
      "Polymer: Layout Styling 1 & 2",
      "Deployment Aplikasi"
    ],
    syllabus_en: [
      "Test Driven Development (TDD) & Unit Testing",
      "Functions & Methods",
      "Structured Query Language (SQL) in Go",
      "HTTP Request Handling in Go",
      "Polymer: Properties, Data Binding, Observers & Compute",
      "Polymer: Layout Styling",
      "Application Deployment"
    ]
  },
  6: {
    title: "Pengenalan Pemrograman C/SIDE pada Microsoft Dynamics NAV",
    title_en: "Introduction to C/SIDE Programming in Microsoft Dynamics NAV",
    id: "457528",
    period: "18 Agustus 2025",
    period_en: "August 18, 2025",
    cat: "Sistem ERP",
    cat_en: "ERP Systems",
    categoryFilter: "erp",
    issuer: "Universitas Gunadarma",
    issuer_en: "Universitas Gunadarma",
    pdf: "certificates/sertifikat-06-dynamics-nav-cside.pdf",
    img: "assets/certificates/sertifikat-06-dynamics-nav-cside.png",
    desc: "Pemrograman lingkungan internal C/SIDE dan bahasa C/AL pada Microsoft Dynamics NAV: arsitektur tabel dasar, perancangan formulir (forms), tipe data intrinsik, identifier, variabel, ekspresi assignment, operator logika & relasional, array, statement With/Case, serta pembuatan fungsi intrinsik C/AL khusus.",
    desc_en: "Internal C/SIDE environment and C/AL programming in Microsoft Dynamics NAV: base table architecture, form design, data types, identifiers, variables, assignment expressions, logical/relational operators, arrays, With/Case statements, and custom C/AL functions.",
    syllabus: [
      "Microsoft Dynamics NAV C/SIDE & Tabel Dasar",
      "Perancangan Basic Forms",
      "Pemrograman C/AL, Tipe Data Intrinsik, Identifier & Variabel",
      "Assignment Statements, Ekspresi Numerik & Operator",
      "Logical & Relational Expressions, If & Exit Statements",
      "Arrays & Repetitive Statements",
      "With & Case Statements (Functions)",
      "Pemanfaatan Fungsi Intrinsik C/AL & Custom Functions"
    ],
    syllabus_en: [
      "Microsoft Dynamics NAV C/SIDE & Base Tables",
      "Basic Forms Design",
      "C/AL Programming, Data Types, Identifiers & Variables",
      "Assignment Statements, Numeric Expressions & Operators",
      "Logical & Relational Expressions, If & Exit Statements",
      "Arrays & Repetitive Statements",
      "With & Case Statements",
      "Intrinsic C/AL & Custom Functions"
    ]
  },
  7: {
    title: "Persiapan Data untuk Proses Bisnis (Data Prep for Business)",
    title_en: "Data Preparation for Business Processes (Data Prep for Business)",
    id: "709030",
    period: "22–27 September 2025",
    period_en: "September 22–27, 2025",
    cat: "Rekayasa Data",
    cat_en: "Data Engineering",
    categoryFilter: "data",
    issuer: "Universitas Gunadarma",
    issuer_en: "Universitas Gunadarma",
    pdf: "certificates/sertifikat-07-data-preparation.pdf",
    img: "assets/certificates/sertifikat-07-data-preparation.png",
    desc: "Rekayasa dan tata kelola persiapan data bisnis terstruktur: identifikasi kebutuhan data proses bisnis operasional, pipeline pengumpulan instrumen data, penelaahan dan pembersihan anomali data, serta validasi integritas data sebelum pemodelan analitik.",
    desc_en: "Structured business data preparation and governance: operational data requirements identification, data collection pipelines, anomaly auditing & cleaning, and data integrity validation prior to analytical modeling.",
    syllabus: [
      "Mengidentifikasi Kebutuhan Data untuk Proses Bisnis",
      "Pengumpulan Data Terstruktur (Collecting Data)",
      "Penelaahan & Pembersihan Data (Analysing Data)",
      "Validasi Integritas Data (Validating Data)"
    ],
    syllabus_en: [
      "Identifying Business Process Data Needs",
      "Structured Data Collection",
      "Data Analysis & Cleaning",
      "Data Integrity Validation"
    ]
  },
  8: {
    title: "Membuat Business Intelligence (Creating Business Intelligence)",
    title_en: "Creating Business Intelligence Solutions",
    id: "909244",
    period: "25 Mei – 06 Juni 2026",
    period_en: "May 25 – June 06, 2026",
    cat: "Business Intelligence",
    cat_en: "Business Intelligence",
    categoryFilter: "data",
    issuer: "Universitas Gunadarma",
    issuer_en: "Universitas Gunadarma",
    pdf: "certificates/sertifikat-08-business-intelligence.pdf",
    img: "assets/certificates/sertifikat-08-business-intelligence.png",
    desc: "Perancangan dan implementasi solusi Business Intelligence: penentuan objek data bisnis, pembuatan model data multidimensi, visualisasi agregasi metrik KPI, serta penyusunan laporan analitis terpadu pendukung pengambilan keputusan strategis.",
    desc_en: "Design and implementation of Business Intelligence solutions: business data object identification, multidimensional data modeling, KPI metric visualization, and compiled analytical reports supporting executive decision-making.",
    syllabus: [
      "Menentukan Objek Data Bisnis (Defining Data Objects)",
      "Membangun Solusi Business Intelligence (Creating BI)",
      "Menyusun Laporan Analisis & Dashboard KPI (Compile Analysis Report)"
    ],
    syllabus_en: [
      "Defining Business Data Objects",
      "Creating Business Intelligence Solutions",
      "Compiling Analysis Reports & KPI Dashboards"
    ]
  },
  9: {
    title: "TechnoFair 11.0 – Data Analyst Seminar",
    title_en: "TechnoFair 11.0 – Data Analyst National Seminar",
    id: "636/PIA/TF110/BEM-FIKTI/D.04",
    period: "06 Juli 2024",
    period_en: "July 06, 2024",
    cat: "Analisis Data",
    cat_en: "Data Analytics",
    categoryFilter: "data",
    issuer: "BEM FIKTI Universitas Gunadarma",
    issuer_en: "BEM FIKTI Universitas Gunadarma",
    pdf: "certificates/sertifikat-09-technofair-data-analyst.pdf",
    img: "assets/certificates/sertifikat-09-technofair-data-analyst.png",
    desc: "Seminar nasional Data Analyst dengan tema 'Visualizing Insights: A Beginner\\'s Guide to Data Presentation'. Mempelajari metodologi pengolahan data mentah, teknik visualisasi wawasan statistik, penyajikan grafik data yang komunikatif, serta interpretasi tren metrik bisnis praktis.",
    desc_en: "National Data Analyst seminar themed 'Visualizing Insights: A Beginner\\'s Guide to Data Presentation'. Raw data processing methodologies, statistical insight visualization, communicative graphics design, and business trend interpretations.",
    syllabus: [
      "Pengantar Analisis Data Industri",
      "Eksplorasi & Pembersihan Data Mentah",
      "Visualisasi Wawasan & Desain Informasi",
      "Studi Kasus Implementasi Presentasi Data"
    ],
    syllabus_en: [
      "Introduction to Industrial Data Analytics",
      "Raw Data Exploration & Cleaning",
      "Insight Visualization & Information Design",
      "Data Presentation Case Studies"
    ]
  },
  10: {
    title: "Diseminasi Hasil Penelitian Mahasiswa Sistem Informasi",
    title_en: "Dissemination of Information Systems Student Research",
    id: "Diseminasi FIKTI UG 2026",
    period: "13 Maret 2026",
    period_en: "March 13, 2026",
    cat: "Riset Akademik SI",
    cat_en: "Academic Research",
    categoryFilter: "web",
    issuer: "Program Studi Sistem Informasi FIKTI Universitas Gunadarma",
    issuer_en: "Information Systems Department, FIKTI Universitas Gunadarma",
    cat_en: "Academic IS Research",
    categoryFilter: "web",
    issuer: "Program Studi Sistem Informasi Fakultas Ilmu Komputer dan Teknologi Informasi Universitas Gunadarma",
    issuer_en: "Information Systems Department, Faculty of Computer Science and Information Technology, Universitas Gunadarma",
    pdf: "certificates/sertifikat-10-diseminasi-penelitian-si.pdf",
    img: "assets/certificates/sertifikat-10-diseminasi-penelitian-si.png",
    desc: "Keikutsertaan aktif sebagai peserta dalam forum ilmiah Diseminasi Hasil Penelitian Mahasiswa Program Studi Sistem Informasi Fakultas Ilmu Komputer dan Teknologi Informasi Universitas Gunadarma. Membahas perkembangan riset terkini dalam arsitektur sistem informasi, evaluasi tata kelola teknologi, serta publikasi hasil penelitian komputasi.",
    desc_en: "Active participation in the scientific dissemination forum for Information Systems research at the Faculty of Computer Science and Information Technology, Universitas Gunadarma. Covering recent research advances in information systems architecture, IT governance evaluation, and computing publications.",
    syllabus: [
      "Arsitektur Sistem Informasi Terapan",
      "Metodologi Penelitian Komputasi",
      "Evaluasi & Governance Teknologi Informasi",
      "Diseminasi & Publikasi Ilmiah Sistem Informasi"
    ],
    syllabus_en: [
      "Applied Information Systems Architecture",
      "Computing Research Methodology",
      "IT Governance & Evaluation",
      "IS Research Dissemination & Scientific Publication"
    ]
  },
  11: {
    title: "Seminar Nasional TechnoFair 11.0 – Artificial Intelligence",
    title_en: "TechnoFair 11.0 National Seminar – Artificial Intelligence",
    id: "807/PIA/TF110/BEM-FIKTI/D.04",
    period: "27 Juli 2024",
    period_en: "27 Juli 2024",
    cat: "Kecerdasan Buatan",
    cat_en: "Artificial Intelligence",
    categoryFilter: "data",
    issuer: "BEM Fakultas Ilmu Komputer dan Teknologi Informasi Universitas Gunadarma",
    issuer_en: "BEM Faculty of Computer Science and Information Technology, Universitas Gunadarma",
    pdf: "certificates/sertifikat-11-technofair-ai.pdf",
    img: "assets/certificates/sertifikat-11-technofair-ai.png",
    desc: "Seminar nasional Artificial Intelligence dengan tema 'Exploring Innovations and Applications of Artificial Intelligence (AI)'. Membahas perkembangan fondasi kecerdasan buatan, arsitektur algoritma Machine Learning terapan, otomatisasi proses cerdas, serta peluang inovasi AI industri.",
    desc_en: "National AI seminar themed 'Exploring Innovations and Applications of Artificial Intelligence (AI)'. AI foundations, applied machine learning algorithm architectures, intelligent process automation, and industrial AI innovations.",
    syllabus: [
      "Prinsip Fundamental Kecerdasan Buatan (AI)",
      "Arsitektur Algoritma Machine Learning Terapan",
      "Otomasi Proses Komputasi Cerdas",
      "Studi Kasus Implementasi Solusi AI di Industri"
    ],
    syllabus_en: [
      "Fundamental Principles of Artificial Intelligence (AI)",
      "Applied Machine Learning Algorithm Architectures",
      "Intelligent Computing Process Automation",
      "Industrial AI Solution Implementation Case Studies"
    ]
  },
  12: {
    title: "Sukarelawan Taman Baca Masyarakat PoliMedia Jakarta",
    title_en: "Community Reading Room Volunteer – PoliMedia Jakarta",
    id: "HIMA Penerbitan PoliMedia 2023",
    period: "18 November 2023",
    period_en: "November 18, 2023",
    cat: "Pengabdian Sosial",
    cat_en: "Volunteer & Community",
    categoryFilter: "volunteer",
    issuer: "HIMA Penerbitan PoliMedia Jakarta",
    issuer_en: "HIMA Publishing PoliMedia Jakarta",
    pdf: "certificates/sertifikat-12-volunteer-tbm-polimedia.pdf",
    img: "assets/certificates/sertifikat-12-volunteer-tbm-polimedia.png",
    desc: "Kontribusi kepedulian sosial sebagai sukarelawan (volunteer) dalam inisiatif pengabdian Taman Baca Masyarakat yang diinisiasi HIMA Penerbitan PoliMedia Jakarta di RW.05 Srengseng Sawah, Jakarta Selatan. Berperan aktif dalam pendampingan literasi anak, manajemen perpustakaan komunitas, serta fasilitasi kegiatan edukatif kemasyarakatan.",
    desc_en: "Social volunteer contribution in community reading room initiatives by HIMA Publishing PoliMedia Jakarta in Srengseng Sawah, South Jakarta. Active role in children's literacy mentoring, community library management, and educational social activities.",
    syllabus: [
      "Edukasi & Pendampingan Literasi Baca Anak",
      "Pengorganisasian Koleksi Buku Taman Baca",
      "Interaksi Sosial & Pembinaan Komunitas Warga",
      "Kolaborasi Tim Sukarelawan Lapangan"
    ],
    syllabus_en: [
      "Children's Literacy Education & Mentoring",
      "Community Library Book Collection Organizing",
      "Social Interaction & Community Outreach",
      "Field Volunteer Team Collaboration"
    ]
  }
};

// ==========================================================================
// 2. BILINGUAL DICTIONARY (ID & EN) - FORMAL EXECUTIVE TONE
// ==========================================================================
const translations = {
  id: {
    // Nav locking - always keep English as requested by user
    nav_home: "Home",
    nav_about: "About",
    nav_skills: "Skills",
    nav_projects: "Projects",
    nav_experience: "Experience",
    nav_certs: "Certificates",
    nav_contact: "Contact",

    // index.html
    hero_status: "Fakultas Ilmu Komputer dan Teknologi Informasi • S1 Sistem Informasi",
    hero_greeting: "Selamat Datang di Portofolio Resmi",
    hero_lead_1: "Mahasiswa Sarjana (S1) Sistem Informasi dari Fakultas Ilmu Komputer dan Teknologi Informasi Universitas Gunadarma yang mendedikasikan keahlian pada",
    hero_lead_pill: "rekayasa perangkat lunak web modern, analitik data terstruktur, dan tata kelola sistem enterprise",
    hero_lead_2: "guna menghadirkan solusi teknologi terdepan yang andal, efisien, serta berdampak strategis bagi organisasi.",
    hero_focus_web: "Rekayasa Web & MVC",
    hero_focus_data: "Sains Data & AI",
    hero_focus_ai: "Sistem Informasi & ERP",
    meta_univ: "Fakultas Ilmu Komputer dan Teknologi Informasi • Universitas Gunadarma",
    meta_gpa: "IPK Kumulatif: 3.53 / 4.00",
    exec_sub_degree: "S1 Sistem Informasi",
    exec_sub_faculty: "Fakultas Ilmu Komputer dan Teknologi Informasi",
    exec_sub_univ: "Universitas Gunadarma",
    gpa_val_badge: "IPK 3.53 / 4.00",
    gpa_merit_tag: "Sarjana S1",
    transcript_strip_title: "Transkrip Nilai Akademik",
    transcript_strip_sub: "",
    btn_view_transcript_sm: "Lihat",
    btn_download_cv: "Unduh Curriculum Vitae (PDF)",
    btn_full_profile: "Profil Lengkap",
    btn_view_projects: "Eksplorasi Proyek",
    btn_contact_me: "Kontak Resmi",
    exec_card_title: "PROFIL EKSEKUTIF",
    exec_card_status: "AKTIF • 2026",
    academic_merit: "PRESTASI AKADEMIK",
    metric_academic: "AKADEMIK",
    metric_gpa_title: "IPK Kumulatif",
    metric_gpa_desc: "Skala 4.00 • Fakultas Ilmu Komputer dan Teknologi Informasi",
    metric_grad: "KELULUSAN",
    metric_grad_title: "S1 Sistem Informasi",
    metric_grad_desc: "Sarjana Komputer • Fakultas Ilmu Komputer dan Teknologi Informasi",
    metric_certs: "KREDENSIAL",
    metric_certs_title: "12 Sertifikasi Kompetensi",
    metric_certs_desc: "Rekayasa Web, AI, & Data",
    metric_status: "STATUS KARIER",
    metric_status_title: "Siap Berkontribusi",
    metric_status_desc: "Terbuka untuk Perusahaan & Tim",

    // about.html
    about_page_breadcrumb: "Profil Eksekutif & Kredensial Akademik",
    about_page_title: "Tentang & Landasan Profesional Rekayasa",
    about_page_sub: "Profil formal, komitmen etika rekayasa perangkat lunak, serta rekam jejak akademik Muhammad Danendra Daniswara Effendi.",
    about_edu_tag: "LATAR BELAKANG AKADEMIK FORMAL",
    about_edu_title: "Universitas Gunadarma",
    about_edu_degree: "S1 Sistem Informasi — Fakultas Ilmu Komputer dan Teknologi Informasi",
    about_edu_p1: "Menempuh pendidikan sarjana Sistem Informasi pada Fakultas Ilmu Komputer dan Teknologi Informasi Universitas Gunadarma dengan fokus studi integrasi teknologi perangkat lunak dan tata kelola proses bisnis organisasi. Kurikulum akademik yang diselesaikan mencakup rekayasa web berbasis MVC, arsitektur basis data relasional, manajemen proyek IT, Enterprise Resource Planning (ERP), sains data terapan, serta kecerdasan buatan.",
    about_edu_p2: "Melalui dedikasi dan komitmen akademik yang konsisten, saya berhasil menyelesaikan seluruh beban kurikulum dengan capaian Indeks Prestasi Kumulatif (IPK) 3.53 dari skala 4.00 (Total 74 Mata Kuliah), merefleksikan kapasitas analitis yang kuat, ketelitian tinggi, serta penguasaan menyeluruh pada bidang keilmuan sistem informasi.",
    about_gpa_label: "Indeks Prestasi Kumulatif (IPK)",
    about_gpa_tag: "SKALA 4.00 • DISTINCTION",
    about_lbl_faculty: "Fakultas:",
    about_val_faculty: "Ilmu Komputer dan Teknologi Informasi",
    about_pillars_tag: "PILAR KOMPETENSI UTAMA",
    p1_title: "Rekayasa Web & Framework",
    p1_desc: "Pengembangan aplikasi web terstruktur menggunakan PHP (Laravel, CodeIgniter 4), Go, Python (Django), HTML5, CSS3, dan JavaScript.",
    p2_title: "Sains Data & Otomasi AI",
    p2_desc: "Pemrosesan dataset terstruktur, pembuatan visualisasi analitis (Matplotlib, Seaborn), serta eksplorasi model Machine Learning & AI terapan.",
    p3_title: "Sistem Informasi Enterprise",
    p3_desc: "Pemahaman mendalam mengenai arsitektur sistem ERP (Microsoft Dynamics NAV, SAP, ADempiere) dan alur proses bisnis manufaktur & perdagangan.",
    ethic_tag: "PRINSIP KERJA & ETIKA PROFESIONAL",
    ethic_1_title: "Presisi & Integritas Kode",
    ethic_1_desc: "Penulisan kode yang bersih, terdokumentasi, dan mematuhi konvensi arsitektur perangkat lunak terkini.",
    ethic_2_title: "Pembelajaran Berkelanjutan",
    ethic_2_desc: "Komitmen tinggi untuk terus memperbarui wawasan teknologi sesuai standar industri yang terus berkembang.",
    ethic_3_title: "Kolaborasi Lintas Disiplin",
    ethic_3_desc: "Kemampuan beradaptasi dan berkomunikasi efektif dalam tim kerja maupun penugasan mandiri.",
    readiness_tag: "KESIAPAN KARIR",
    readiness_title: "Siap Berkontribusi pada Industri & Penugasan Profesional",
    readiness_desc: "Dengan landasan teori yang kokoh dan portofolio proyek teruji, saya siap memberikan kontribusi nyata sebagai Web Developer, System Analyst, atau Data Practitioner.",

    // skills.html
    skills_page_breadcrumb: "Matriks Keahlian & Teknologi",
    skills_page_title: "Matriks Kompetensi Rekayasa & Spesifikasi Teknologi",
    skills_page_sub: "Inventarisasi kapabilitas teknis, kerangka kerja terapan, perangkat sains data, serta metodologi pengembangan sistem yang dikuasai.",
    skills_dir_tag: "DIREKTORI KOMPETENSI",
    skills_heading: "Matriks Kompetensi Terstruktur",
    skills_sub: "Telusuri instrumen teknologi dan kapabilitas berdasarkan domain keahlian melalui fitur pencarian langsung atau penyaringan kategori.",
    skills_search_ph: "Pencarian kompetensi (Laravel, Django, PHP, Python, MySQL)...",
    filter_all_skills: "Semua Domain (23)",
    filter_web_skills: "Rekayasa Web & Framework (8)",
    filter_data_skills: "Sains Data & Kecerdasan Buatan (6)",
    filter_tools_skills: "Perangkat Kerja & DevOps (4)",
    filter_soft_skills: "Kompetensi Interpersonal (5)",
    tag_php: "Bahasa Pemrograman Backend",
    tag_laravel: "Kerangka Kerja PHP Modern & Ekosistem Web",
    tag_ci4: "Kerangka Kerja MVC Terstruktur",
    tag_python: "Pemrograman & Skrip Otomasi",
    tag_django: "Kerangka Kerja Python Skalabilitas Tinggi & API",
    tag_golang: "Pemrograman Backend Berkinerja Tinggi",
    name_webdev: "Pengembangan Web",
    tag_webdev: "Arsitektur Web Responsif & Standar",
    tag_mysql: "Tata Kelola Basis Data Relasional",
    tag_numpy: "Komputasi Numerik Saintifik",
    tag_pandas: "Manipulasi & Pembersihan Data",
    tag_tf: "Kerangka Kerja Pembelajaran Mesin",
    tag_pytorch: "Pustaka Pembelajaran Mendalam",
    name_data_analysis: "Analisis Data",
    tag_data_analysis: "Wawasan Statistik Kuantitatif",
    tag_bi: "Pelaporan & Dukungan Keputusan Bisnis",
    tag_msoffice: "Dokumentasi & Pengolahan Data Kantor",
    tag_phpmyadmin: "Administrasi Basis Data Berbasis Web",
    tag_vscode: "Lingkungan Pengembangan Kode",
    tag_git: "Sistem Kontrol Versi Kolaboratif",
    name_creative: "Pemikiran Kreatif",
    tag_creative: "Inovasi Solutif Berkelanjutan",
    name_problem: "Penyelesaian Masalah",
    tag_problem: "Resolusi Logis & Terstruktur",
    name_team: "Kolaborasi Tim",
    tag_team: "Sinergi Komunikasi Lintas Fungsi",
    name_lead: "Kepemimpinan",
    tag_lead: "Inisiatif & Akuntabilitas Peran",
    name_discipline: "Ketelitian & Disiplin",
    tag_discipline: "Presisi Detail & Integritas Kinerja",
    web_method_tag: "METODOLOGI REKAYASA WEB",
    web_method_title: "Pendekatan Arsitektur MVC & Berbasis Komponen",
    web_method_desc: "Menerapkan prinsip perancangan perangkat lunak teratur dengan pemisahan tegas antara struktur data, logika bisnis, dan antarmuka pengguna demi kemudahan pemeliharaan dan skalabilitas.",
    data_method_tag: "METODOLOGI SAINS DATA",
    data_method_title: "Alur Kerja Pemrosesan Data & Analitik Terapan",
    data_method_desc: "Memproses data mentah melalui pembersihan, transformasi, serta analisis eksploratif untuk menghasilkan wawasan terukur dan visualisasi yang informatif.",

    // projects.html
    projects_page_breadcrumb: "Portofolio Proyek Rekayasa",
    projects_page_title: "Portofolio Rekayasa & Studi Kasus Sistem",
    projects_page_sub: "Dokumentasi formal perancangan perangkat lunak, arsitektur basis data, serta implementasi sistem informasi terapan yang berorientasi pada efisiensi operasional dan keandalan fungsional.",
    btn_view_proj: "Dokumentasi Teknis Lengkap",
    featured_case_study: "STUDI KASUS UNGGULAN",
    live_status_badge: "Sistem Produksi Aktif (Live)",
    proj_title_izqy: "Pengembangan Sistem Informasi Web – Izqy’s Kitchen",
    proj_role_label: "Peran: <strong>Pengembang Web Utama (Web Developer)</strong>",
    proj_period_label: "Periode Pelaksanaan: <strong>Juni – Agustus 2025</strong>",
    proj_status_label: "Status: <strong>Produksi Publik</strong>",
    proj_narrative: "Perancangan dan implementasi sistem informasi berbasis web untuk Izqy’s Kitchen sebagai platform digital terintegrasi. Sistem ini mengakomodasi penyajikan katalog komprehensif, profil entitas bisnis, manajemen basis data produk, serta penyederhanaan mekanisme pemesanan pelanggan dengan antarmuka yang responsif lintas perangkat.",
    btn_visit_live: "Kunjungi Sistem Live (izqyskitchen.shop)",
    btn_copy_url: "Salin Tautan Proyek",
    btn_desktop_view: "Tampilan Desktop",
    btn_mobile_view: "Tampilan Seluler",
    proj_subbar_tag: "Sistem Katalog Kuliner & Transaksi Pemesanan",
    btn_open_tab: "Buka Tab Baru",
    btn_open_live_sm: "Buka Live",
    mobile_app_label: "IZQY’S KITCHEN SELULER",
    cs_challenge_tag: "01 / IDENTIFIKASI TANTANGAN",
    cs_challenge_title: "Kebutuhan Digitalisasi Operasional",
    cs_challenge_desc: "Entitas bisnis kuliner Izqy’s Kitchen memerlukan platform digital terpadu untuk menyajikan katalog produk terbarukan secara transparan, menstandarisasi pencatatan pesanan, serta memitigasi risiko kesalahan komunikasi pada pemesanan manual.",
    cs_solution_tag: "02 / ARSITEKTUR SOLUSI",
    cs_solution_title: "Penerapan Arsitektur MVC & Basis Data Relasional",
    cs_solution_desc: "Penerapan kerangka kerja CodeIgniter 4 dengan isolasi fungsional yang tegas antara Model kueri database MySQL, Controller logika pemrosesan, dan View presentasi. Dilengkapi validasi ketat pada sisi server demi menjamin keutuhan integritas data transaksi.",
    cs_result_tag: "03 / HASIL & DAMPAK STRATEGIS",
    cs_result_title: "Efisiensi Transaksi & Aksesibilitas Optimal",
    cs_result_desc: "Menghasilkan platform web dengan kecepatan muat tinggi yang adaptif pada peramban desktop maupun ponsel cerdas. Berhasil mengefisiensikan siklus konfirmasi pemesanan pelanggan serta memperkuat kredibilitas identitas digital entitas bisnis.",

    // experience.html
    exp_page_breadcrumb: "Riwayat Rekam Jejak",
    exp_page_title: "Jejak Rekam Pengalaman & Penugasan Operasional",
    exp_page_sub: "Kilas balik perjalanan kontribusi profesional, keikutsertaan organisasi, serta peranan aktif dalam kegiatan akademis dan kemasyarakatan.",
    exp_dir_tag: "KRONOLOGI REKAM JEJAK",
    exp_heading: "Pengalaman Penugasan & Aktivitas Organisasi",
    exp_sub: "Gunakan tab penyaringan untuk memilah antara penugasan reguler formal dan keikutsertaan panitia operasional.",
    exp_filter_all: "Semua Rekam Jejak (5)",
    exp_filter_reg: "Penugasan Formal & Organisasi (3)",
    exp_filter_crew: "Kepanitiaan & Operasional (2)",
    exp_05_sub: "Perusahaan Dagang & Jasa Keuangan",
    exp_05_badge: "Penugasan Regulasi Operasional",
    exp_05_date: "November 2025 – Sekarang",
    exp_05_cat: "Organisasi & Operasional",
    exp_05_p1: "Bertanggung jawab atas administrasi arsip transaksi, pengelolaan basis data operasional internal, serta penyusunan laporan berkala demi menjamin kepatuhan standar entitas.",
    exp_05_p2: "Mengoordinasikan alur komunikasi antar devisi operasional dan mengawal efisiensi alokasi sumber daya dalam aktivitas bisnis harian.",
    exp_04_sub: "HIMA Penerbitan PoliMedia Jakarta",
    exp_04_badge: "Pengabdian Masyarakat & Literasi",
    exp_04_date: "November 2023",
    exp_04_cat: "Sukarelawan Sosial",
    exp_04_p1: "Berperan aktif sebagai sukarelawan lapangan dalam program pendampingan literasi anak-anak di RW.05 Srengseng Sawah, Jakarta Selatan.",
    exp_04_p2: "Mengelola pengorganisasian katalog buku, memfasilitasi aktivitas edukatif interaktif, serta membangun keakraban sosial dengan warga setempat.",
    exp_03_sub: "Panitia Pelaksana Acara Kampus",
    exp_03_badge: "Manajemen Perlengkapan & Logistik",
    exp_03_date: "Oktober 2023",
    exp_03_cat: "Kepanitiaan Acara",
    exp_03_p1: "Mengelola inventarisasi perlengkapan teknis acara, pengawasan tata letak panggung, serta penyiapan sarana pendukung kegiatan.",
    exp_03_p2: "Menjamin kelancaran alur pendistribusian logistik sebelum, selama, dan sesudah penutupan rangkaian kegiatan acara.",
    exp_02_sub: "Panitia Orientasi Mahasiswa",
    exp_02_badge: "Operasional & Konsumsi",
    exp_02_date: "Agustus 2023",
    exp_02_cat: "Kepanitiaan Acara",
    exp_02_p1: "Mengoordinasikan alokasi dan distribusi logistik konsumsi bagi ratusan peserta orientasi secara teratur dan tepat waktu.",
    exp_02_p2: "Bekerja dalam kecepatan tinggi dengan koordinasi tim yang presisi untuk meminimalkan kendala operasional di lapangan.",
    exp_01_sub: "Organisasi Kesiswaan Sekolah",
    exp_01_badge: "Kepemimpinan & Organisasi",
    exp_01_date: "2019 – 2020",
    exp_01_cat: "Organisasi Sekolah",
    exp_01_p1: "Terlibat aktif dalam perencanaan program kerja kesiswaan, pelaksanaan kegiatan ekstrakurikuler, serta penggalangan dana sosial.",
    exp_01_p2: "Melatih fondasi awal kepemimpinan, kemampuan negosiasi, tata kelola rapat formal, dan penyusunan proposal kegiatan.",
    tk1_tag: "NILAI TAMBAH OPERASIONAL",
    tk1_title: "Manajemen Tugas & Kedisiplinan",
    tk1_desc: "Terbiasa bekerja dengan tenggat waktu ketat dan pengorganisasian berkas administrasi secara sistematis.",
    tk2_tag: "KEPEMIMPINAN TIM",
    tk2_title: "Komunikasi & Koordinasi Lintas Divisi",
    tk2_desc: "Mampu menjembatani kebutuhan teknis dan non-teknis melalui penyampaian informasi yang jelas dan terstruktur.",
    tk3_tag: "SOLUSI TAKTIS",
    tk3_title: "Adaptabilitas & Pemecahan Masalah Lapangan",
    tk3_desc: "Cepat tanggap dalam mengidentifikasi hambatan tak terduga dan mengambil tindakan korektif yang efisien.",

    // certifications.html
    cert_page_breadcrumb: "Lisensi & Sertifikasi Industri",
    cert_page_title: "Direktori Sertifikasi Kompetensi & Kredensial Resmi",
    cert_page_sub: "Dokumentasi 12 sertifikasi resmi yang diterbitkan oleh Universitas Gunadarma dan Lembaga Sertifikasi Profesi, mencakup ranah ERP, Rekayasa Web, Pemrograman Go, Sains Data, dan Kecerdasan Buatan.",
    btn_combined_pdf: "Buka Berkas Gabungan 12 Sertifikat (PDF)",
    cert_dir_tag: "VERIFIKASI KREDENSIAL",
    cert_heading: "Koleksi Sertifikat & Matriks Pembelajaran",
    cert_sub: "Klik pada kartu sertifikasi untuk meninjau silabus pembelajaran terperinci, nomor lisensi, serta pratinjau dokumen PDF resmi.",
    cert_filter_all: "Semua Sertifikasi (12)",
    cert_filter_erp: "Sistem ERP (3)",
    cert_filter_web: "Rekayasa Web & Go (4)",
    cert_filter_data: "Sains Data & AI (4)",
    cert_filter_vol: "Pengabdian & Volunteer (1)",

    // contact.html
    contact_page_breadcrumb: "Kanal Korespondensi",
    contact_page_title: "Korespondensi Profesional & Kontak Resmi",
    contact_page_sub: "Sarana komunikasi terbuka untuk diskusi peluang karir, penawaran proyek rekayasa perangkat lunak, konsultasi teknis, atau kolaborasi strategis.",
    contact_top_copy: "Salin Alamat Email",
    direct_channels_tag: "KANAL LANGSUNG",
    direct_channels_title: "Informasi Kontak Utama",
    contact_channel_tag: "SALURAN RESMI",
    contact_channel_title: "Saluran Komunikasi Langsung",
    contact_channel_desc: "Korespondensi profesional dapat disampaikan melalui surat elektronik resmi, jejaring profesional LinkedIn, ataupun melalui formulir terlampir. Komitmen waktu tanggap adalah 1x24 jam kerja.",
    btn_copy_email: "Salin Email",
    btn_open_email_client: "Buka Klien Email Langsung",
    lbl_email_official: "Alamat Email Resmi",
    lbl_residence: "Wilayah Domisili",
    val_residence: "Jakarta Selatan, DKI Jakarta, Indonesia",
    lbl_timezone: "Zona Waktu Operasional",
    val_timezone: "WIB (UTC+7) • GMT+7",
    contact_form_tag: "FORMULIR KORESPONDENSI",
    contact_form_title: "Kirimkan Pesan atau Penawaran",
    lbl_form_name: "Nama Lengkap",
    ph_contact_name: "Masukkan nama lengkap Anda...",
    lbl_form_email: "Alamat Email Resmi",
    ph_contact_email: "nama@instansi.com",
    lbl_form_msg: "Uraian Pesan / Penawaran Kolaborasi",
    ph_contact_msg: "Tuliskan uraian kebutuhan kerjasama, posisi lowongan, atau pertanyaan kualifikasi...",
    btn_send_msg: "Kirimkan Pesan Resmi",
    hub_tag: "PROFIL PROFESIONAL DIGITAL",
    hub_title: "Pusat Tautan & Dokumen Digital",
    hub_desc: "Akses langsung ke seluruh kanal profesional, verifikasi profil publik, dan berkas resume formal.",
    hub_link_email: "Email Resmi Langsung",
    hub_link_wa: "WhatsApp",
    hub_link_linkedin: "Profil LinkedIn",
    hub_link_github: "Repositori GitHub",
    hub_guarantee_title: "Komitmen Respon Cepat",
    hub_guarantee_desc: "Respons korespondensi profesional ditanggapi dalam 1×24 jam kerja.",
    btn_show_qr: "Tampilkan Kode QR",
    ws_tag: "SPESIFIKASI LINGKUNGAN PENGEMBANG",
    ws_status: "TERVALIDASI AKTIF",
    ws_title: "Infrastruktur & Lingkungan Rekayasa Sistem",
    ws_desc: "Konfigurasi piranti lunak dan mesin kerja harian yang digunakan dalam rekayasa solusi teknologi.",
    ws_item_1_name: "Perangkat Utama (Workstation)",
    ws_item_2_name: "Lingkungan Pengembangan (IDE)",
    ws_item_3_name: "Tumpukan Server Lokal",
    ws_item_4_name: "Antarmuka Perintah (CLI & Shell)",
    ws_readiness: "Kesiapan Penugasan Profesional",
    ws_ready_badge: "SIAP BERTUGAS (ON-SITE / HYBRID / REMOTE)",

    // Missing keys mapping
    about_lbl_degree: "Jenjang Pendidikan:",
    about_val_degree: "Strata 1 (S1)",
    about_lbl_major: "Program Studi:",
    about_val_major: "Sistem Informasi",
    about_lbl_grad_year: "Tahun Kelulusan:",
    about_lbl_title: "Gelar Akademik:",
    about_val_title: "Sarjana Komputer (S.Kom)",
    about_lbl_loc: "Lokasi Domisili:",
    about_val_loc: "Jakarta Selatan, Indonesia",
    about_pillars_title: "Fondasi Keahlian & Spesialisasi Profesional",
    about_pillars_sub: "Tiga pilar keahlian utama yang menjadi fondasi dalam memberikan nilai tambah dan kontribusi teknologi nyata bagi institusi.",
    ethic_title: "Etos Kerja & Integritas Profesional",
    ethic_sub: "Dalam setiap amanah rekayasa teknologi dan tugas operasional yang dipercayakan, saya senantiasa menjunjung tinggi nilai-nilai fundamental berikut:",
    btn_view_skills: "Lihat Matriks Keahlian",
    btn_contact_official: "Hubungi Kontak Resmi",
    btn_cert_vault: "Sertifikasi Kompetensi & Kredensial Resmi (12)",
    certs_page_breadcrumb: "Lisensi & Sertifikasi Resmi",
    certs_page_title: "Sertifikasi Kompetensi & Kredensial Resmi (12)",
    certs_page_sub: "Arsip terverifikasi dari 12 sertifikat kompetensi nasional dan internasional dalam bidang Rekayasa Perangkat Lunak, Data Science, AI, dan Tata Kelola Sistem Informasi.",
    certs_domain_tag: "KLASIFIKASI BIDANG KOMPETENSI",
    certs_domain_heading: "Penyaringan Berdasarkan Domain Keahlian"
  },

  en: {
    // Nav locking - always keep English as requested by user
    nav_home: "Home",
    nav_about: "About",
    nav_skills: "Skills",
    nav_projects: "Projects",
    nav_experience: "Experience",
    nav_certs: "Certificates",
    nav_contact: "Contact",

    // index.html
    hero_status: "Faculty of Computer Science and Information Technology • B.Sc. Information Systems",
    hero_greeting: "Welcome to the Official Portfolio",
    hero_lead_1: "Bachelor student in Information Systems from the Faculty of Computer Science and Information Technology, Universitas Gunadarma, dedicated to",
    hero_lead_pill: "modern web software engineering, structured data analytics, and enterprise IT governance",
    hero_lead_2: "to deliver innovative, high-performance, and strategically impactful technology solutions.",
    hero_focus_web: "Web Engineering & MVC",
    hero_focus_data: "Data Science & AI",
    hero_focus_ai: "Information Systems & ERP",
    meta_univ: "Faculty of Computer Science and Information Technology • Gunadarma Univ.",
    meta_gpa: "Cumulative GPA: 3.53 / 4.00",
    exec_sub_degree: "B.Sc. in Information Systems",
    exec_sub_faculty: "Faculty of Computer Science and Information Technology",
    exec_sub_univ: "Universitas Gunadarma",
    gpa_val_badge: "GPA 3.53 / 4.00",
    gpa_merit_tag: "B.Sc. Degree",
    transcript_strip_title: "Academic Grade Transcript",
    transcript_strip_sub: "",
    btn_view_transcript_sm: "View",
    btn_download_cv: "Download Curriculum Vitae (PDF)",
    btn_full_profile: "Full Profile",
    btn_view_projects: "Explore Projects",
    btn_contact_me: "Official Contact",
    exec_card_title: "EXECUTIVE PROFILE",
    exec_card_status: "ACTIVE • 2026",
    academic_merit: "ACADEMIC MERIT",
    metric_academic: "ACADEMIC",
    metric_gpa_title: "Cumulative GPA",
    metric_gpa_desc: "4.00 Scale • Faculty of Computer Science and Information Technology",
    metric_grad: "GRADUATION",
    metric_grad_title: "B.Sc. Information Systems",
    metric_grad_desc: "Bachelor of Computer Science • Faculty of Computer Science and Information Technology",
    metric_certs: "CREDENTIALS",
    metric_certs_title: "12 Industry Certifications",
    metric_certs_desc: "Web Engineering, AI, & Data",
    metric_status: "CAREER STATUS",
    metric_status_title: "Ready for Deployment",
    metric_status_desc: "Open for Enterprise & Team Roles",

    // about.html
    about_page_breadcrumb: "Executive Profile & Academic Credentials",
    about_page_title: "About & Professional Engineering Foundation",
    about_page_sub: "Formal profile, software engineering ethics commitment, and academic track record of Muhammad Danendra Daniswara Effendi.",
    about_edu_tag: "FORMAL ACADEMIC BACKGROUND",
    about_edu_title: "Gunadarma University",
    about_edu_degree: "B.Sc. Information Systems — Faculty of Computer Science and Information Technology",
    about_edu_p1: "Pursuing a Bachelor of Science degree in Information Systems at the Faculty of Computer Science and Information Technology, Universitas Gunadarma, focusing on Software Development Life Cycle (SDLC), relational database architecture, MVC web engineering, IT project management, Enterprise Resource Planning (ERP), applied data science, and artificial intelligence.",
    about_edu_p2: "Maintaining high academic standards and consistent performance, successfully completing the curriculum with a cumulative GPA of 3.53 / 4.00 across 74 courses, demonstrating solid analytical capacity and comprehensive knowledge in Information Systems.",
    about_gpa_label: "Cumulative Grade Point Average (GPA)",
    about_gpa_tag: "4.00 SCALE • DISTINCTION",
    about_lbl_faculty: "Faculty:",
    about_val_faculty: "Computer Science and Information Technology",
    about_pillars_tag: "CORE COMPETENCY PILLARS",
    p1_title: "Web Engineering & Frameworks",
    p1_desc: "Structured web application development using PHP (Laravel, CodeIgniter 4), Go, Python (Django), HTML5, CSS3, and JavaScript.",
    p2_title: "Data Science & AI Automation",
    p2_desc: "Structured dataset processing, analytical visualization generation (Matplotlib, Seaborn), and applied Machine Learning & AI model exploration.",
    p3_title: "Enterprise Information Systems",
    p3_desc: "In-depth understanding of ERP system architecture (Microsoft Dynamics NAV, SAP, ADempiere) and manufacturing & trading business process flows.",
    ethic_tag: "WORK ETHIC & PROFESSIONAL VALUES",
    ethic_1_title: "Precision & Code Integrity",
    ethic_1_desc: "Writing clean, documented code adhering to modern software architecture conventions.",
    ethic_2_title: "Continuous Learning",
    ethic_2_desc: "High commitment to continuously update tech insights according to evolving industry standards.",
    ethic_3_title: "Cross-Disciplinary Collaboration",
    ethic_3_desc: "Ability to adapt and communicate effectively within team environments or independent assignments.",
    readiness_tag: "CAREER READINESS",
    readiness_title: "Ready to Contribute to Industry & Professional Assignments",
    readiness_desc: "With a strong theoretical background and proven project portfolio, I am ready to deliver tangible contributions as a Web Developer, System Analyst, or Data Practitioner.",



    // skills.html
    skills_page_breadcrumb: "Competency & Tech Matrix",
    skills_page_title: "Engineering Competency Matrix & Tech Specs",
    skills_page_sub: "Inventory of technical capabilities, applied frameworks, data science tools, and mastered system development methodologies.",
    skills_dir_tag: "COMPETENCY DIRECTORY",
    skills_heading: "Structured Competency Matrix",
    skills_sub: "Browse tech instruments and capabilities by domain via real-time search or category filtering.",
    skills_search_ph: "Search competencies (Laravel, Django, PHP, Python, MySQL)...",
    filter_all_skills: "All Domains (23)",
    filter_web_skills: "Web Engineering & Frameworks (8)",
    filter_data_skills: "Data Science & AI (6)",
    filter_tools_skills: "Tools & Workstation (4)",
    filter_soft_skills: "Interpersonal Competencies (5)",
    tag_php: "Backend Programming Language",
    tag_laravel: "Modern PHP Framework & Web Ecosystem",
    tag_ci4: "Structured MVC Framework",
    tag_python: "Programming & Automation Scripting",
    tag_django: "High-Level Python Web Framework & APIs",
    tag_golang: "High-Performance Backend Programming",
    name_webdev: "Web Development",
    tag_webdev: "Responsive Web Architecture & Standards",
    tag_mysql: "Relational Database Management System (RDBMS)",
    tag_numpy: "Scientific Numerical Computing",
    tag_pandas: "Structured Data Manipulation & Analysis",
    tag_tf: "Machine Learning Framework",
    tag_pytorch: "Deep Learning Library",
    name_data_analysis: "Data Analytics",
    tag_data_analysis: "Quantitative Statistical Insights",
    tag_bi: "Business Reporting & Decision Support",
    tag_msoffice: "Office Documentation & Data Processing",
    tag_phpmyadmin: "Web-Based Database Administration",
    tag_vscode: "Primary Code Editing Environment",
    tag_git: "Source Code Version Control System",
    name_creative: "Creative & Innovative Thinking",
    tag_creative: "Developing Unique & Adaptive Solutions",
    name_problem: "Problem Solving",
    tag_problem: "Logical & Structured Resolution",
    name_team: "Team Collaboration",
    tag_team: "Cross-Functional Communication Synergy",
    name_lead: "Leadership",
    tag_lead: "Role Initiative & Accountability",
    name_discipline: "Precision & Discipline",
    tag_discipline: "Detail Precision & Performance Integrity",
    web_method_tag: "WEB ENGINEERING METHODOLOGY",
    web_method_title: "MVC & Component-Based Architecture Approach",
    web_method_desc: "Applying orderly software design principles with strict separation between data structures, business logic, and UI for maintainability and scalability.",
    data_method_tag: "DATA SCIENCE METHODOLOGY",
    data_method_title: "Data Processing Workflow & Applied Analytics",
    data_method_desc: "Processing raw data through cleaning, transformation, and exploratory analysis to generate quantifiable insights and informative visualizations.",

    // projects.html
    projects_page_breadcrumb: "Engineering Project Portfolio",
    projects_page_title: "Engineering Portfolio & System Case Studies",
    projects_page_sub: "Formal documentation of software design, database architecture, and applied information system implementations focused on operational efficiency and reliability.",
    btn_view_proj: "Full Technical Documentation",
    featured_case_study: "FEATURED CASE STUDY",
    live_status_badge: "Live Production System",
    proj_title_izqy: "Web Information System Development – Izqy’s Kitchen",
    proj_role_label: "Role: <strong>Lead Web Developer</strong>",
    proj_period_label: "Duration: <strong>June – August 2025</strong>",
    proj_status_label: "Status: <strong>Public Production</strong>",
    proj_narrative: "Design and implementation of a web-based information system for Izqy’s Kitchen as an integrated digital platform. Accommodates comprehensive menu cataloging, business entity profiles, product database management, and streamlined customer ordering.",
    btn_visit_live: "Visit Live System (izqyskitchen.shop)",
    btn_copy_url: "Copy Project URL",
    btn_desktop_view: "Desktop View",
    btn_mobile_view: "Mobile View",
    proj_subbar_tag: "Culinary Catalog & Ordering System",
    btn_open_tab: "Open New Tab",
    btn_open_live_sm: "Open Live",
    mobile_app_label: "IZQY’S KITCHEN MOBILE",
    cs_challenge_tag: "01 / CHALLENGE IDENTIFICATION",
    cs_challenge_title: "Operational Digitalization Need",
    cs_challenge_desc: "Izqy’s Kitchen culinary business required a unified digital platform to present updated product catalogs transparently, standardize order records, and mitigate communication errors from manual ordering.",
    cs_solution_tag: "02 / SOLUTION ARCHITECTURE",
    cs_solution_title: "MVC Architecture & Relational Database Implementation",
    cs_solution_desc: "Implementation of CodeIgniter 4 framework with strict functional isolation between MySQL database Model, processing Controller, and presentation View. Equipped with strict server-side validation to guarantee transactional data integrity.",
    cs_result_tag: "03 / RESULTS & STRATEGIC IMPACT",
    cs_result_title: "Transactional Efficiency & Optimal Accessibility",
    cs_result_desc: "Resulted in a high-speed web platform adaptive across desktop browsers and smartphones. Successfully streamlined customer order confirmation cycles while enhancing digital business identity credibility.",

    // experience.html
    exp_page_breadcrumb: "Track Record & Career Timeline",
    exp_page_title: "Track Record & Operational Experience Timeline",
    exp_page_sub: "A chronological overview of professional contributions, organizational engagements, and active involvement in academic and community activities.",
    exp_dir_tag: "CHRONOLOGICAL TIMELINE",
    exp_heading: "Operational Experience & Organizational Activities",
    exp_sub: "Use filter tabs to switch between formal regular assignments and operational event committees.",
    exp_filter_all: "All Timelines (5)",
    exp_filter_reg: "Formal Assignments & Organizations (3)",
    exp_filter_crew: "Event Committees & Operations (2)",
    exp_05_sub: "Commercial Trading & Financial Services Entity",
    exp_05_badge: "Operational Regulatory Assignment",
    exp_05_date: "November 2025 – Present",
    exp_05_cat: "Organization & Operations",
    exp_05_p1: "Responsible for transaction archive administration, internal database management, and periodic report compilation to ensure organizational compliance.",
    exp_05_p2: "Coordinating cross-divisional operational communication channels and safeguarding resource allocation efficiency in daily business activities.",
    exp_04_sub: "HIMA Publishing PoliMedia Jakarta",
    exp_04_badge: "Community Service & Literacy",
    exp_04_date: "November 2023",
    exp_04_cat: "Social Volunteer",
    exp_04_p1: "Served as a field volunteer in children's literacy mentoring programs at RW.05 Srengseng Sawah, South Jakarta.",
    exp_04_p2: "Managed book catalog organization, facilitated interactive educational activities, and fostered social engagement with local residents.",
    exp_03_sub: "Campus Event Organizing Committee",
    exp_03_badge: "Equipment & Logistics Management",
    exp_03_date: "October 2023",
    exp_03_cat: "Event Crew",
    exp_03_p1: "Managed event technical equipment inventory, stage layout supervision, and support facility preparation.",
    exp_03_p2: "Ensured seamless logistics distribution channels prior to, during, and following event conclusion.",
    exp_02_sub: "Student Orientation Committee",
    exp_02_badge: "Operations & Logistics Crew",
    exp_02_date: "August 2023",
    exp_02_cat: "Event Crew",
    exp_02_p1: "Coordinated catering logistics allocation and distribution for hundreds of orientation participants accurately on schedule.",
    exp_02_p2: "Operated at high pace with precise team coordination to eliminate field operational bottlenecks.",
    exp_01_sub: "School Student Organization",
    exp_01_badge: "Leadership & Organization",
    exp_01_date: "2019 – 2020",
    exp_01_cat: "School Organization",
    exp_01_p1: "Actively involved in student work program planning, extracurricular execution, and community fundraising.",
    exp_01_p2: "Developed foundational leadership, negotiation, formal meeting governance, and activity proposal drafting skills.",
    tk1_tag: "OPERATIONAL VALUE",
    tk1_title: "Task Management & Discipline",
    tk1_desc: "Accustomed to working under strict deadlines with systematic administrative record management.",
    tk2_tag: "TEAM LEADERSHIP",
    tk2_title: "Cross-Divisional Communication",
    tk2_desc: "Capable of bridging technical and non-technical requirements through clear and structured communication.",
    tk3_tag: "TACTICAL SOLUTIONS",
    tk3_title: "Adaptability & Field Problem Solving",
    tk3_desc: "Quick to identify unexpected bottlenecks and implement swift corrective actions.",

    // certifications.html
    cert_page_breadcrumb: "Licenses & Industry Certifications",
    cert_page_title: "Official Competency Certifications & Credential Vault",
    cert_page_sub: "Documentation of 12 official credentials issued by Universitas Gunadarma and Certification Bodies, covering ERP Systems, Web Engineering, Go Programming, Data Science, and AI.",
    btn_combined_pdf: "Open Combined 12 Certificates Vault (PDF)",
    cert_dir_tag: "CREDENTIAL VERIFICATION",
    cert_heading: "Certificate Collection & Syllabus Matrix",
    cert_sub: "Click any certificate card to view detailed learning syllabus, license ID, and official PDF document preview.",
    cert_filter_all: "All Credentials (12)",
    cert_filter_erp: "ERP Systems (3)",
    cert_filter_web: "Web & Go Engineering (4)",
    cert_filter_data: "Data Science & AI (4)",
    cert_filter_vol: "Volunteer & Community (1)",

    // contact.html
    contact_page_breadcrumb: "Correspondence Channels",
    contact_page_title: "Professional Correspondence & Official Contact",
    contact_page_sub: "Open communication channels for career opportunities, software engineering project proposals, technical consultations, or strategic collaboration.",
    contact_top_copy: "Copy Email Address",
    direct_channels_tag: "DIRECT CHANNELS",
    direct_channels_title: "Primary Contact Information",
    lbl_email_official: "Official Email Address",
    lbl_residence: "Residence Location",
    val_residence: "South Jakarta, DKI Jakarta, Indonesia",
    lbl_timezone: "Operational Timezone",
    val_timezone: "WIB (UTC+7) • GMT+7",
    contact_form_tag: "CORRESPONDENCE FORM",
    contact_form_title: "Send a Message or Proposal",
    lbl_form_name: "Full Name",
    ph_contact_name: "Enter your full name...",
    lbl_form_email: "Official Email Address",
    ph_contact_email: "name@company.com",
    lbl_form_msg: "Message / Collaboration Details",
    ph_contact_msg: "Describe your collaboration needs, position details, or inquiry...",
    btn_send_msg: "Send Official Message",
    hub_tag: "DIGITAL PROFESSIONAL PROFILE",
    hub_title: "Digital Link & Document Hub",
    hub_desc: "Direct access to professional channels, public profile verification, and formal resume files.",
    hub_link_email: "Direct Official Email",
    hub_link_wa: "WhatsApp",
    hub_link_linkedin: "LinkedIn Profile",
    hub_link_github: "GitHub Repositories",
    hub_guarantee_title: "Fast Response Guarantee",
    hub_guarantee_desc: "Professional correspondence queries are addressed within 24 business hours.",
    btn_show_qr: "Show QR Code",
    ws_tag: "DEVELOPER ENVIRONMENT SPECS",
    ws_status: "VALIDATED ACTIVE",
    ws_title: "Infrastructure & System Engineering Environment",
    ws_desc: "Software configuration and daily workstation setup utilized in engineering tech solutions.",
    ws_item_1_name: "Primary Workstation",
    ws_item_2_name: "Development Environment (IDE)",
    ws_item_3_name: "Local Server Stack",
    ws_item_4_name: "Command Line Interface (CLI & Shell)",
    ws_readiness: "Professional Deployment Readiness",
    ws_ready_badge: "READY FOR DEPLOYMENT (ON-SITE / HYBRID / REMOTE)",

    // contact_channel aliases & buttons
    contact_channel_tag: "OFFICIAL CHANNELS",
    contact_channel_title: "Direct Communication Channels",
    contact_channel_desc: "Professional correspondence can be submitted via official email, LinkedIn, or the attached form. Standard response time commitment is 24 business hours.",
    btn_copy_email: "Copy Email",
    btn_open_email_client: "Open Email Client",

    // Missing keys mapping for EN
    about_lbl_degree: "Education Level:",
    about_val_degree: "Bachelor's Degree (B.Sc.)",
    about_lbl_major: "Study Program:",
    about_val_major: "Information Systems",
    about_lbl_grad_year: "Graduation Year:",
    about_lbl_title: "Academic Degree:",
    about_val_title: "Bachelor of Computer Science (B.Sc.)",
    about_lbl_loc: "Domicile Location:",
    about_val_loc: "South Jakarta, Indonesia",
    about_pillars_title: "Engineering Foundation & Core Specializations",
    about_pillars_sub: "Three core competency pillars forming the technical foundation to deliver real value and technological impact.",
    ethic_title: "Work Ethic & Professional Integrity",
    ethic_sub: "In every software engineering assignment and operational task, I uphold the following core values:",
    btn_view_skills: "View Skills Matrix",
    btn_contact_official: "Official Contact",
    btn_cert_vault: "Official Competency Certifications & Credential Vault (12)",
    certs_page_breadcrumb: "Licenses & Industry Certifications",
    certs_page_title: "Official Competency Certifications & Credential Vault (12)",
    certs_page_sub: "Documentation of 12 official credentials issued by Universitas Gunadarma and Certification Bodies, covering ERP Systems, Web Engineering, Go Programming, Data Science, and AI.",
    certs_domain_tag: "COMPETENCY DOMAIN CLASSIFICATION",
    certs_domain_heading: "Filter by Competency Domain"
  }
};

const flagIcons = {
  id: `<svg width="20" height="20" viewBox="0 0 24 24" style="border-radius: 50%; overflow: hidden; display: block; box-shadow: 0 1px 3px rgba(0,0,0,0.25); border: 1px solid rgba(128,128,128,0.3);"><rect width="24" height="12" fill="#E70011"/><rect y="12" width="24" height="12" fill="#FFFFFF"/></svg>`,
  en: `<svg width="20" height="20" viewBox="0 0 60 60" style="border-radius: 50%; overflow: hidden; display: block; box-shadow: 0 1px 3px rgba(0,0,0,0.25); border: 1px solid rgba(128,128,128,0.3);"><clipPath id="ukClipNav"><circle cx="30" cy="30" r="30"/></clipPath><g clip-path="url(#ukClipNav)"><rect width="60" height="60" fill="#012169"/><path d="M0 0 L60 60 M60 0 L0 60" stroke="#FFFFFF" stroke-width="9"/><path d="M0 0 L60 60 M60 0 L0 60" stroke="#C8102E" stroke-width="5"/><path d="M30 0 V60 M0 30 H60" stroke="#FFFFFF" stroke-width="14"/><path d="M30 0 V60 M0 30 H60" stroke="#C8102E" stroke-width="8"/></g></svg>`
};

let currentLang = localStorage.getItem('danendra_lang') || 'id';

function toggleLangDropdown(e) {
  if (e) e.stopPropagation();
  const menu = document.getElementById('langDropdownMenu');
  if (menu) menu.classList.toggle('show');
}

function closeLangDropdown() {
  const menu = document.getElementById('langDropdownMenu');
  if (menu) menu.classList.remove('show');
}

function selectLanguage(lang) {
  setLanguage(lang);
  closeLangDropdown();
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('danendra_lang', lang);
  
  const badge = document.getElementById('langDisplayBadge');
  if (badge) {
    badge.innerHTML = flagIcons[lang] || flagIcons['id'];
  }

  document.querySelectorAll('.lang-option-btn').forEach(btn => {
    if (btn.getAttribute('data-lang') === lang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[lang] && translations[lang][key]) {
      el.placeholder = translations[lang][key];
    }
  });

  if (window.lucide) window.lucide.createIcons();
}


// ==========================================================================
// 3. THEME ENGINE (DARK / LIGHT MODE)
// ==========================================================================
const htmlEl = document.documentElement;

function applyTheme(theme) {
  htmlEl.setAttribute('data-theme', theme);
  localStorage.setItem('danendra_theme', theme);
  const themeIcon = document.getElementById('themeIcon');
  if (themeIcon) {
    if (theme === 'light') {
      themeIcon.setAttribute('data-lucide', 'moon');
    } else {
      themeIcon.setAttribute('data-lucide', 'sun');
    }
  }
  if (window.lucide) window.lucide.createIcons();
}

function initTheme() {
  const savedTheme = localStorage.getItem('danendra_theme') || 'light';
  applyTheme(savedTheme);

  const themeToggleBtn = document.getElementById('themeToggleBtn');
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const active = htmlEl.getAttribute('data-theme');
      const next = active === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      showToast(next === 'dark' ? 'Dark Mode diaktifkan 🌙' : 'Light Mode diaktifkan ☀️');
    });
  }
}

// ==========================================================================
// 4. LO-FI WEB AUDIO FOCUS SYNTHESIZER
// ==========================================================================
let audioCtx = null;
let isPlayingAudio = false;
let audioInterval = null;

function initAudioPlayer() {
  const audioBtn = document.getElementById('audioFocusBtn');
  if (!audioBtn) return;

  const audioIcon = document.getElementById('audioIcon');
  const audioTrackLabel = document.getElementById('audioTrackLabel');

  function toggleAudio() {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }

    if (isPlayingAudio) {
      isPlayingAudio = false;
      audioBtn.classList.remove('playing');
      if (audioIcon) audioIcon.setAttribute('data-lucide', 'play');
      if (audioTrackLabel) audioTrackLabel.textContent = "Lo-Fi Coding Focus";
      clearInterval(audioInterval);
      showToast("Audio fokus dihentikan.");
    } else {
      isPlayingAudio = true;
      audioBtn.classList.add('playing');
      if (audioIcon) audioIcon.setAttribute('data-lucide', 'pause');
      if (audioTrackLabel) audioTrackLabel.textContent = "Playing: Chill Ambient";
      playAmbientChordProgression();
      showToast("Lo-Fi synth ambient sedang diputar 🎧");
    }
    if (window.lucide) window.lucide.createIcons();
  }

  function playAmbientChordProgression() {
    if (!isPlayingAudio || !audioCtx) return;
    
    const chords = [
      [261.63, 329.63, 392.00], // C major
      [220.00, 261.63, 329.63], // A minor
      [174.61, 220.00, 261.63], // F major
      [196.00, 246.94, 293.66]  // G major
    ];

    let chordIdx = 0;

    function playNextChord() {
      if (!isPlayingAudio) return;
      const currentChord = chords[chordIdx];
      chordIdx = (chordIdx + 1) % chords.length;

      currentChord.forEach(freq => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, audioCtx.currentTime);

        gain.gain.setValueAtTime(0.001, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.04, audioCtx.currentTime + 0.8);
        gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 3.8);

        osc.connect(gain);
        gain.connect(audioCtx.destination);

        osc.start();
        osc.stop(audioCtx.currentTime + 4.0);
      });
    }

    playNextChord();
    audioInterval = setInterval(playNextChord, 4000);
  }

  audioBtn.addEventListener('click', toggleAudio);
}

// ==========================================================================
// 5. DUAL-DEVICE PREVIEW SWITCHER (DESKTOP VS MOBILE)
// ==========================================================================
function switchProjectPreview(device) {
  const desktopFrame = document.getElementById('projectDesktopFrame');
  const mobileFrame = document.getElementById('projectMobileFrame');
  const btnDesktop = document.getElementById('viewDesktopBtn');
  const btnMobile = document.getElementById('viewMobileBtn');

  if (!desktopFrame || !mobileFrame) return;

  if (device === 'mobile') {
    desktopFrame.style.display = 'none';
    mobileFrame.style.display = 'block';
    if (btnDesktop) btnDesktop.classList.remove('active');
    if (btnMobile) btnMobile.classList.add('active');
    showToast("Beralih ke tampilan responsif Smartphone 📱");
  } else {
    desktopFrame.style.display = 'block';
    mobileFrame.style.display = 'none';
    if (btnDesktop) btnDesktop.classList.add('active');
    if (btnMobile) btnMobile.classList.remove('active');
    showToast("Beralih ke tampilan Desktop Browser 💻");
  }
}

// ==========================================================================
// 6. LIVE CLOCK (WIB)
// ==========================================================================
function initClock() {
  const clockEl = document.getElementById('liveClockBadge');
  if (!clockEl) return;

  function updateClock() {
    const now = new Date();
    const timeStr = now.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    clockEl.textContent = `${timeStr} WIB`;
  }
  setInterval(updateClock, 1000);
  updateClock();
}

// ==========================================================================
// 7. SKILL SEARCH & FILTERING (CAPABILITY VAULT)
// ==========================================================================
function initSkillFilters() {
  const skillSearchInput = document.getElementById('skillSearchInput');
  const skillCards = document.querySelectorAll('.capability-card');
  const filterTabs = document.querySelectorAll('.skills-filter-tabs .tab-pill-btn');

  if (!skillCards.length) return;

  let currentCategory = 'all';

  function filterSkills() {
    const term = skillSearchInput ? skillSearchInput.value.toLowerCase().trim() : '';

    skillCards.forEach(card => {
      const text = card.textContent.toLowerCase();
      const cat = card.getAttribute('data-category');

      const matchesCat = (currentCategory === 'all' || cat === currentCategory);
      const matchesTerm = (term === '' || text.includes(term));

      if (matchesCat && matchesTerm) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  }

  if (skillSearchInput) {
    skillSearchInput.addEventListener('input', filterSkills);
  }

  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentCategory = tab.getAttribute('data-filter');
      filterSkills();
    });
  });
}

// ==========================================================================
// 8. TIMELINE FILTERING (EXPERIENCE PAGE)
// ==========================================================================
function initTimelineFilters() {
  const expFilters = document.querySelectorAll('[data-exp-filter]');
  const expItems = document.querySelectorAll('.timeline-card-item');

  if (!expFilters.length || !expItems.length) return;

  expFilters.forEach(btn => {
    btn.addEventListener('click', () => {
      expFilters.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-exp-filter');

      expItems.forEach(item => {
        const type = item.getAttribute('data-type');
        if (filter === 'all' || type === filter) {
          item.style.display = 'flex';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
}

// ==========================================================================
// 9. CERTIFICATIONS FILTERING
// ==========================================================================
function initCertFilters() {
  const certFilters = document.querySelectorAll('[data-cert-filter]');
  const certCards = document.querySelectorAll('.cert-bento-card');

  if (!certFilters.length || !certCards.length) return;

  certFilters.forEach(btn => {
    btn.addEventListener('click', () => {
      certFilters.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-cert-filter');

      certCards.forEach(card => {
        const cat = card.getAttribute('data-cat');
        if (filter === 'all' || cat === filter) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// ==========================================================================
// 10. UNIVERSAL MODAL HANDLER
// ==========================================================================
function openModalWithHTML(htmlContent) {
  const modalBackdrop = document.getElementById('universalModalBackdrop');
  const modalDynamicBody = document.getElementById('modalDynamicBody');
  if (!modalBackdrop || !modalDynamicBody) return;

  modalDynamicBody.innerHTML = htmlContent;
  modalBackdrop.classList.add('active');
  document.body.style.overflow = 'hidden';
  if (window.lucide) window.lucide.createIcons();
}

function closeUniversalModal() {
  const modalBackdrop = document.getElementById('universalModalBackdrop');
  if (!modalBackdrop) return;
  modalBackdrop.classList.remove('active');
  document.body.style.overflow = '';
}

function closeModal() {
  closeUniversalModal();
}

function initModals() {
  const modalBackdrop = document.getElementById('universalModalBackdrop');
  if (!modalBackdrop) return;

  modalBackdrop.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) closeUniversalModal();
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeUniversalModal();
  });
}

// Modal: Certificate Details
function openCertDetailsModal(certId) {
  const c = certsData[certId];
  if (!c) return;

  const isEn = currentLang === 'en';
  const title = isEn ? (c.title_en || c.title) : c.title;
  const cat = isEn ? (c.cat_en || c.cat) : c.cat;
  const period = isEn ? (c.period_en || c.period) : c.period;
  const issuer = isEn ? (c.issuer_en || c.issuer) : c.issuer;
  const desc = isEn ? (c.desc_en || c.desc) : c.desc;
  const syllabusList = isEn ? (c.syllabus_en || c.syllabus) : c.syllabus;

  const syllabusHTML = syllabusList.map(s => `<span style="background: var(--bg-elevated); border: 1px solid var(--border-color); padding: 5px 12px; border-radius: var(--radius-full); font-size: 0.8rem; font-weight: 600;">${s}</span>`).join(' ');

  const labelLicense = isEn ? "License Number" : "Nomor Lisensi";
  const labelDate = isEn ? "Date" : "Tanggal";
  const labelIssuer = isEn ? "Issuer" : "Penerbit";
  const labelSyllabus = isEn ? "Syllabus & Competency Modules:" : "Silabus Materi Pelatihan / Kompetensi:";
  const btnOpen = isEn ? "Open Official PDF in New Tab" : "Buka Dokumen PDF Resmi di Tab Baru";
  const pdfTitleHover = isEn ? "Click to open original PDF document" : "Klik untuk membuka dokumen PDF asli";

  const content = `
    <span class="cert-badge-tag" style="margin-bottom: 8px; display: inline-block;">${cat}</span>
    <h3 style="font-size: 1.5rem; margin-bottom: 6px; color: var(--text-main); line-height: 1.3;">${title}</h3>
    <div style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 16px;">
      ${labelLicense}: <strong style="color: var(--text-main); font-family: var(--font-mono);">${c.id}</strong> • ${labelDate}: <strong>${period}</strong> • ${labelIssuer}: <strong>${issuer}</strong>
    </div>

    <!-- Real Certificate Preview Image -->
    <div style="text-align: center; margin-bottom: 18px; background: var(--bg-surface); padding: 10px; border-radius: var(--radius-lg); border: 1.5px solid var(--border-color); display: flex; align-items: center; justify-content: center;">
      <a href="${c.pdf}" target="_blank" title="${pdfTitleHover}">
        <img src="${c.img}" alt="${title}" style="max-height: 380px; width: auto; max-width: 100%; border-radius: var(--radius-md); box-shadow: var(--shadow-sm); object-fit: contain;">
      </a>
    </div>

    <p style="font-size: 0.9rem; line-height: 1.6; color: var(--text-muted); margin-bottom: 16px;">${desc}</p>
    
    <div style="font-weight: 700; font-size: 0.875rem; margin-bottom: 8px; color: var(--text-main);">${labelSyllabus}</div>
    <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 24px;">${syllabusHTML}</div>

    <!-- Direct PDF Actions (View in New Tab) -->
    <div style="display: flex; gap: 12px;">
      <a href="${c.pdf}" target="_blank" class="btn-tactile btn-primary-tactile" style="width: 100%; justify-content: center; text-decoration: none;">
        <i data-lucide="external-link"></i> ${btnOpen}
      </a>
    </div>
  `;

  openModalWithHTML(content);
}

// Modal: Resume Preview & Complete Certificate Dossier
function openResumeModal() {
  const isEn = currentLang === 'en';
  const tag = isEn ? "OFFICIAL DOCUMENT" : "DOKUMEN RESMI";
  const title = isEn ? "Curriculum Vitae & Official Document Preview" : "Pratinjau Curriculum Vitae & Dokumen Resmi";
  const sub = isEn ? "Muhammad Danendra Daniswara Effendi • Bachelor of Science in Information Systems (GPA: 3.53 / 4.00)" : "Muhammad Danendra Daniswara Effendi • Sarjana Sistem Informasi (IPK: 3.53 / 4.00)";
  const desc = isEn ? "Official Curriculum Vitae document covering complete academic background, technical qualifications, and professional track record." : "Dokumen Curriculum Vitae resmi yang mencakup riwayat akademik lengkap, rincian kualifikasi teknikal, dan rekam jejak profesional.";
  const btnCv = isEn ? "Open Curriculum Vitae (PDF)" : "Buka Berkas Curriculum Vitae (PDF)";
  const btnCerts = isEn ? "Open Complete Certificate Dossier (Combined PDF)" : "Buka Seluruh Berkas Sertifikat Lengkap (PDF Terpadu)";

  const content = `
    <span class="cert-badge-tag" style="margin-bottom: 8px; display: inline-block;">${tag}</span>
    <h3 style="font-size: 1.6rem; margin-bottom: 6px; color: var(--text-main);">${title}</h3>
    <p style="font-size: 0.875rem; color: var(--text-muted); margin-bottom: 18px;">${sub}</p>

    <div style="aspect-ratio: 1/0.95; background: var(--bg-elevated); border: 2px dashed var(--border-color); border-radius: var(--radius-lg); display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 12px; margin-bottom: 20px; padding: 20px; text-align: center;">
      <i data-lucide="file-text" style="width: 48px; height: 48px; color: var(--primary);"></i>
      <span style="font-weight: 800; font-size: 1.1rem;">[OFFICIAL_CV_FILE.PDF]</span>
      <p style="font-size: 0.85rem; color: var(--text-muted); max-width: 320px;">${desc}</p>
    </div>

    <div style="display: flex; flex-direction: column; gap: 10px;">
      <button class="btn-tactile btn-primary-tactile" style="width: 100%; justify-content: center;" onclick="handlePlaceholderAction(event, '${isEn ? "Open CV File [CV_URL]" : "Buka Berkas [CV_URL]"}')">
        <i data-lucide="external-link"></i> ${btnCv}
      </button>
      <a href="certificates/sertifikat-lengkap-muhammad-danendra.pdf" target="_blank" class="btn-tactile btn-secondary-tactile" style="width: 100%; justify-content: center; text-decoration: none;">
        <i data-lucide="file-archive"></i> ${btnCerts}
      </a>
    </div>
  `;
  openModalWithHTML(content);
}

// ==========================================================================
// ACADEMIC TRANSCRIPT DATASET & MODAL HANDLER
// ==========================================================================
const transcriptCourses = [
  // Semester 1 (11 MK)
  { no: 1, code: 'IT011302', name: 'ALGORITMA DAN PEMROGRAMAN 1', sks: 3, grade: 'B', sem: 1 },
  { no: 2, code: 'IT011104', name: 'BAHASA INGGRIS 1', sks: 1, grade: 'A', sem: 1 },
  { no: 3, code: 'AK011136', name: 'DIGITAL CITIZENSHIP', sks: 1, grade: 'A', sem: 1 },
  { no: 4, code: 'IT011208', name: 'FISIKA DAN KIMIA DASAR', sks: 2, grade: 'A', sem: 1 },
  { no: 5, code: 'HM011102', name: 'ILMU SOSIAL DASAR', sks: 1, grade: 'B', sem: 1 },
  { no: 6, code: 'IT011210', name: 'MATEMATIKA DASAR 1', sks: 2, grade: 'A', sem: 1 },
  { no: 7, code: 'PP000206', name: 'PENDIDIKAN PANCASILA', sks: 2, grade: 'B', sem: 1 },
  { no: 8, code: 'IT011236', name: 'PENGANTAR BISNIS DAN EKONOMI DIGITAL', sks: 2, grade: 'A', sem: 1 },
  { no: 9, code: 'IT011316', name: 'PENGANTAR TEKNOLOGI SISTEM INFORMASI', sks: 3, grade: 'A', sem: 1 },
  { no: 10, code: 'IT011119', name: 'PRAKTIKUM ALGORITMA DAN PEMROGRAMAN 1', sks: 1, grade: 'A', sem: 1 },
  { no: 11, code: 'IT011121', name: 'PRAKTIKUM FISIKA DASAR', sks: 1, grade: 'B', sem: 1 },

  // Semester 2 (9 MK)
  { no: 12, code: 'IT011341', name: 'ALGORITMA DAN PEMROGRAMAN 2', sks: 3, grade: 'A', sem: 2 },
  { no: 13, code: 'IT011105', name: 'BAHASA INGGRIS 2', sks: 1, grade: 'B', sem: 2 },
  { no: 14, code: 'HM011101', name: 'ILMU BUDAYA DASAR', sks: 1, grade: 'B', sem: 2 },
  { no: 15, code: 'IT011309', name: 'KONSEP SISTEM INFORMASI', sks: 3, grade: 'A', sem: 2 },
  { no: 16, code: 'IT011211', name: 'MATEMATIKA DASAR 2', sks: 2, grade: 'C', sem: 2 },
  { no: 17, code: 'PP000201', name: 'PENDIDIKAN AGAMA ISLAM', sks: 2, grade: 'A', sem: 2 },
  { no: 18, code: 'PP000207', name: 'PENDIDIKAN KEWARGANEGARAAN', sks: 2, grade: 'A', sem: 2 },
  { no: 19, code: 'IT000201', name: 'TEKNOLOGI KECERDASAN ARTIFISIAL', sks: 2, grade: 'A', sem: 2 },
  { no: 20, code: 'IT011239', name: 'TEORI ORGANISASI UMUM', sks: 2, grade: 'B', sem: 2 },

  // Semester 3 (10 MK)
  { no: 21, code: 'AK011127', name: 'INOVASI SISTEM INFORMASI DAN NEW TEKNOLOGI', sks: 1, grade: 'B', sem: 3 },
  { no: 22, code: 'IT000203', name: 'KOMPUTASI BIG DATA', sks: 2, grade: 'A', sem: 3 },
  { no: 23, code: 'AK011209', name: 'MANAJEMEN DAN SISTEM INFORMASI MANAJEMEN 1', sks: 2, grade: 'B', sem: 3 },
  { no: 24, code: 'IT011212', name: 'MATEMATIKA LANJUT 1', sks: 2, grade: 'B', sem: 3 },
  { no: 25, code: 'IT011214', name: 'MATEMATIKA SISTEM INFORMASI 1', sks: 2, grade: 'B', sem: 3 },
  { no: 26, code: 'IT011317', name: 'PENGANTAR ORGANISASI DAN ARSITEKTUR KOMPUTER', sks: 3, grade: 'B', sem: 3 },
  { no: 27, code: 'IT000104', name: 'PRAKTIKUM KOMPUTASI BIG DATA', sks: 1, grade: 'A', sem: 3 },
  { no: 28, code: 'AK011317', name: 'SISTEM BASIS DATA 1', sks: 3, grade: 'B', sem: 3 },
  { no: 29, code: 'IT011328', name: 'STRUKTUR DAN ORGANISASI DATA', sks: 3, grade: 'B', sem: 3 },
  { no: 30, code: 'IT011237', name: 'TEKNIK PEMROGRAMAN TERSTRUKTUR', sks: 2, grade: 'A', sem: 3 },

  // Semester 4 (10 MK)
  { no: 31, code: 'PB011102', name: 'BAHASA INDONESIA 1', sks: 1, grade: 'A', sem: 4 },
  { no: 32, code: 'AK011210', name: 'MANAJEMEN DAN SISTEM INFORMASI MANAJEMEN 2', sks: 2, grade: 'A', sem: 4 },
  { no: 33, code: 'AK011228', name: 'MANAJEMEN LAYANAN SISTEM INFORMASI', sks: 2, grade: 'A', sem: 4 },
  { no: 34, code: 'IT011213', name: 'MATEMATIKA LANJUT 2', sks: 2, grade: 'A', sem: 4 },
  { no: 35, code: 'IT011215', name: 'MATEMATIKA SISTEM INFORMASI 2', sks: 2, grade: 'C', sem: 4 },
  { no: 36, code: 'AK011312', name: 'PEMROGRAMAN BERORIENTASI OBJEK', sks: 3, grade: 'A', sem: 4 },
  { no: 37, code: 'IT011201', name: 'PENGANTAR AKUNTANSI KEUANGAN 1', sks: 2, grade: 'B', sem: 4 },
  { no: 38, code: 'IT000102', name: 'PRAKTIKUM TEKNOLOGI KECERDASAN ARTIFISIAL', sks: 1, grade: 'B', sem: 4 },
  { no: 39, code: 'AK011318', name: 'SISTEM BASIS DATA 2', sks: 3, grade: 'A', sem: 4 },
  { no: 40, code: 'IT011325', name: 'SISTEM OPERASI', sks: 3, grade: 'B', sem: 4 },

  // Semester 5 (9 MK)
  { no: 41, code: 'PB011103', name: 'BAHASA INDONESIA 2', sks: 1, grade: 'B', sem: 5 },
  { no: 42, code: 'IT011308', name: 'GRAF DAN ANALISIS ALGORITMA', sks: 3, grade: 'B', sem: 5 },
  { no: 43, code: 'AK011305', name: 'INTERAKSI MANUSIA DAN KOMPUTER', sks: 3, grade: 'B', sem: 5 },
  { no: 44, code: 'AK011137', name: 'JEJARING SOSIAL DAN KONTEN KREATIF', sks: 1, grade: 'B', sem: 5 },
  { no: 45, code: 'IT011234', name: 'KONSEP DATA MINING', sks: 2, grade: 'A', sem: 5 },
  { no: 46, code: 'AK011229', name: 'METODE PENELITIAN', sks: 2, grade: 'A', sem: 5 },
  { no: 47, code: 'AK011211', name: 'PEMROGRAMAN BERBASIS WEB', sks: 2, grade: 'A', sem: 5 },
  { no: 48, code: 'AK011332', name: 'SISTEM KEAMANAN TEKNOLOGI INFORMASI', sks: 3, grade: 'B', sem: 5 },
  { no: 49, code: 'IT011338', name: 'STATISTIKA', sks: 3, grade: 'B', sem: 5 },

  // Semester 6 (11 MK)
  { no: 50, code: 'AK011302', name: 'ANALISIS DAN PERANCANGAN SISTEM INFORMASI', sks: 3, grade: 'B', sem: 6 },
  { no: 51, code: 'AK011331', name: 'DISAIN DAN MANAJEMEN JARINGAN KOMPUTER', sks: 3, grade: 'A', sem: 6 },
  { no: 52, code: 'AK011204', name: 'GRAFIK KOMPUTER DAN PENGOLAHAN CITRA', sks: 2, grade: 'D', sem: 6 },
  { no: 53, code: 'AK011138', name: 'PEMODELAN DAN VISUALISASI DATA', sks: 1, grade: 'A', sem: 6 },
  { no: 54, code: 'AK011201', name: 'PENGANTAR AKUNTANSI KEUANGAN 2', sks: 2, grade: 'A', sem: 6 },
  { no: 55, code: 'IT011240', name: 'PENGANTAR SAIN DATA', sks: 2, grade: 'A', sem: 6 },
  { no: 56, code: 'PB011207', name: 'PENULISAN ILMIAH / KERJA PRAKTEK', sks: 2, grade: 'A', sem: 6 },
  { no: 57, code: 'IT011120', name: 'PRAKTIKUM ALGORITMA DAN PEMROGRAMAN 2', sks: 1, grade: 'D', sem: 6 },
  { no: 58, code: 'IT000106', name: 'PRAKTIKUM TERAPAN TEORI GRAF', sks: 1, grade: 'A', sem: 6 },
  { no: 59, code: 'IT011222', name: 'SISTEM BERBASIS PENGETAHUAN', sks: 2, grade: 'A', sem: 6 },
  { no: 60, code: 'IT000205', name: 'TERAPAN TEORI GRAF', sks: 2, grade: 'A', sem: 6 },

  // Semester 7 (9 MK)
  { no: 61, code: 'AK011303', name: 'ANALISIS KINERJA SISTEM', sks: 3, grade: 'A', sem: 7 },
  { no: 62, code: 'PB011104', name: 'BAHASA INGGRIS BISNIS 1', sks: 1, grade: 'A', sem: 7 },
  { no: 63, code: 'AK011416', name: 'PENGELOLAAN PROYEK SISTEM INFORMASI', sks: 4, grade: 'A', sem: 7 },
  { no: 64, code: 'IT000108', name: 'PRAKTIKUM ROBOTIKA CERDAS', sks: 1, grade: 'B', sem: 7 },
  { no: 65, code: 'IT000207', name: 'ROBOTIKA CERDAS', sks: 2, grade: 'A', sem: 7 },
  { no: 66, code: 'AK011235', name: 'SISTEM MULTIMEDIA', sks: 2, grade: 'A', sem: 7 },
  { no: 67, code: 'AK011224', name: 'SISTEM PENUNJANG KEPUTUSAN', sks: 2, grade: 'A', sem: 7 },
  { no: 68, code: 'AK011225', name: 'SISTEM TERDISTRIBUSI', sks: 2, grade: 'B', sem: 7 },
  { no: 69, code: 'AK011326', name: 'TESTING DAN IMPLEMENTASI SISTEM', sks: 3, grade: 'A', sem: 7 },

  // Semester 8 (5 MK)
  { no: 70, code: 'AK011133', name: 'AUDIT TEKNOLOGI SISTEM INFORMASI', sks: 1, grade: 'A', sem: 8 },
  { no: 71, code: 'PB011105', name: 'BAHASA INGGRIS BISNIS 2', sks: 1, grade: 'A', sem: 8 },
  { no: 72, code: 'PB011206', name: 'ETIKA DAN PROFESIONALISME TEKNOLOGI SISTEM INFORMASI', sks: 2, grade: 'B', sem: 8 },
  { no: 73, code: 'PB011201', name: 'PENGANTAR BISNIS TEKNOLOGI INFORMASI', sks: 2, grade: 'A', sem: 8 },
  { no: 74, code: 'PB011610', name: 'TUGAS AKHIR / SKRIPSI/ STUDI KOMPREHENSIF', sks: 6, grade: 'A', sem: 8 }
];

let activeTranscriptSem = 'all';

function renderTranscriptRows(courses) {
  if (!courses || courses.length === 0) {
    const isEn = currentLang === 'en';
    return `<tr><td colspan="6" style="text-align: center; padding: 24px; color: var(--text-muted); font-size: 0.9rem;">${isEn ? 'No courses found matching your query.' : 'Mata kuliah tidak ditemukan.'}</td></tr>`;
  }

  return courses.map(c => {
    const gradeClass = `grade-pill-${c.grade.toLowerCase()}`;
    return `
      <tr>
        <td style="text-align: center; font-weight: 700; color: var(--text-muted);">${c.no}</td>
        <td style="font-family: var(--font-mono); font-weight: 700; font-size: 0.8rem; color: var(--primary);">${c.code}</td>
        <td style="font-weight: 600; color: var(--text-main); font-size: 0.875rem;">${c.name}</td>
        <td style="text-align: center; font-weight: 700; color: var(--text-main);">${c.sks}</td>
        <td style="text-align: center;"><span class="${gradeClass}">${c.grade}</span></td>
        <td style="text-align: center; font-weight: 700; color: var(--text-muted); font-size: 0.8rem;">Sem ${c.sem}</td>
      </tr>
    `;
  }).join('');
}

function filterTranscriptTab(sem, btn) {
  activeTranscriptSem = sem;
  document.querySelectorAll('.transcript-tab-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');

  const searchInput = document.getElementById('transcriptSearchInput');
  const query = searchInput ? searchInput.value.toLowerCase().trim() : '';
  applyTranscriptFilter(query);
}

function filterTranscriptSearch(query) {
  applyTranscriptFilter(query.toLowerCase().trim());
}

function applyTranscriptFilter(query) {
  let filtered = transcriptCourses;
  if (activeTranscriptSem !== 'all') {
    filtered = filtered.filter(c => c.sem === parseInt(activeTranscriptSem, 10));
  }
  if (query) {
    filtered = filtered.filter(c => 
      c.name.toLowerCase().includes(query) || 
      c.code.toLowerCase().includes(query) ||
      c.grade.toLowerCase() === query
    );
  }

  const tbody = document.getElementById('transcriptTableBody');
  const countBadge = document.getElementById('transcriptFilteredCount');
  if (tbody) {
    tbody.innerHTML = renderTranscriptRows(filtered);
  }
  if (countBadge) {
    const isEn = currentLang === 'en';
    countBadge.textContent = isEn ? `${filtered.length} Courses` : `${filtered.length} MK`;
  }
}

// ==========================================================================
// ACADEMIC TRANSCRIPT MODAL HANDLER (PDF PREVIEW LIKE CERTIFICATES)
// ==========================================================================
function switchTranscriptPreview(pageNum, btn) {
  const img = document.getElementById('transcriptPreviewImg');
  if (img) {
    img.src = `assets/transkrip-page-${pageNum}.png`;
  }
  document.querySelectorAll('.transcript-page-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
}

function openTranscriptModal() {
  const isEn = currentLang === 'en';
  const pdfUrl = 'certificates/transkrip-nilai-muhammad-danendra.pdf';

  const badgeTag = isEn ? "OFFICIAL ACADEMIC RECORD" : "DOKUMEN RESMI AKADEMIK";
  const title = isEn ? "Academic Grade Transcript (Gunadarma University)" : "Transkrip Nilai Akademik (Universitas Gunadarma)";
  const metaInfo = isEn 
    ? "NPM: 10122872 • Bachelor of Science in Information Systems • Faculty of Computer Science and Information Technology • Cumulative GPA: 3.53 / 4.00" 
    : "NPM: 10122872 • S1 Sistem Informasi • Fakultas Ilmu Komputer dan Teknologi Informasi • IPK Kumulatif: 3.53 / 4.00";

  const desc = isEn
    ? "Official Academic Transcript summary document issued by Gunadarma University covering 74 completed courses with a Cumulative GPA of 3.53 / 4.00 and Final Undergraduate Thesis Grade A."
    : "Dokumen Rangkuman Nilai Akademik resmi dari Universitas Gunadarma yang mencakup seluruh 74 mata kuliah dengan perolehan IPK Kumulatif 3.53 / 4.00 serta nilai Skripsi / Tugas Akhir A.";

  const labelPages = isEn ? "Select Page Preview:" : "Pilih Pratinjau Halaman:";
  const btnOpen = isEn ? "Open Official PDF in New Tab" : "Buka Dokumen PDF Resmi di Tab Baru";
  const pdfTitleHover = isEn ? "Click to open official transcript PDF" : "Klik untuk membuka dokumen PDF transkrip asli";

  const content = `
    <span class="cert-badge-tag" style="margin-bottom: 8px; display: inline-block;">${badgeTag}</span>
    <h3 style="font-size: 1.55rem; margin-bottom: 6px; color: var(--text-main); line-height: 1.3;">${title}</h3>
    <div style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 16px; line-height: 1.5;">
      ${metaInfo}
    </div>

    <!-- Page Switcher Tabs for 3-Page Transcript -->
    <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 8px; margin-bottom: 10px;">
      <span style="font-size: 0.8rem; font-weight: 700; color: var(--text-muted);">${labelPages}</span>
      <div style="display: flex; gap: 6px;">
        <button class="transcript-page-btn active" onclick="switchTranscriptPreview(1, this)">${isEn ? 'Page 1' : 'Halaman 1'}</button>
        <button class="transcript-page-btn" onclick="switchTranscriptPreview(2, this)">${isEn ? 'Page 2' : 'Halaman 2'}</button>
        <button class="transcript-page-btn" onclick="switchTranscriptPreview(3, this)">${isEn ? 'Page 3' : 'Halaman 3'}</button>
      </div>
    </div>

    <!-- Real Transcript PDF Visual Preview -->
    <div style="text-align: center; margin-bottom: 18px; background: var(--bg-surface); padding: 10px; border-radius: var(--radius-lg); border: 1.5px solid var(--border-color); display: flex; align-items: center; justify-content: center; position: relative;">
      <a href="${pdfUrl}" target="_blank" title="${pdfTitleHover}" style="display: block; width: 100%;">
        <img id="transcriptPreviewImg" src="assets/transkrip-page-1.png" alt="Transkrip Nilai Muhammad Danendra Daniswara" style="max-height: 420px; width: auto; max-width: 100%; border-radius: var(--radius-md); box-shadow: var(--shadow-sm); object-fit: contain; margin: 0 auto;">
      </a>
      <div style="position: absolute; bottom: 18px; right: 18px; background: rgba(15, 23, 42, 0.82); backdrop-filter: blur(4px); color: #FFFFFF; font-size: 0.725rem; font-weight: 700; padding: 4px 10px; border-radius: var(--radius-full); pointer-events: none;">
        <i data-lucide="zoom-in" style="width: 12px; height: 12px; display: inline-block; vertical-align: middle; margin-right: 4px;"></i> ${isEn ? 'Click image to open PDF' : 'Klik gambar untuk buka PDF'}
      </div>
    </div>

    <p style="font-size: 0.9rem; line-height: 1.6; color: var(--text-muted); margin-bottom: 20px;">${desc}</p>

    <!-- Direct PDF Action (Open / View in New Tab) -->
    <div style="display: flex; gap: 12px;">
      <a href="${pdfUrl}" target="_blank" class="btn-tactile btn-primary-tactile" style="width: 100%; justify-content: center; text-decoration: none;">
        <i data-lucide="external-link"></i> ${btnOpen}
      </a>
    </div>
  `;

  openModalWithHTML(content);
}

// Modal: Project Details
function openProjectDetailsModal() {
  const isEn = currentLang === 'en';
  const tag = isEn ? "SYSTEM ENGINEERING CASE STUDY" : "STUDI KASUS REKAYASA SISTEM";
  const title = isEn ? "Web Information System Development – Izqy’s Kitchen" : "Pengembangan Sistem Web – Izqy’s Kitchen";
  const desc = isEn ? "This software engineering initiative was designed to modernize promotional efficiency and order processing for Izqy’s Kitchen culinary enterprise. Integrating CodeIgniter 4 MVC framework and MySQL database to ensure optimal query execution, strict data validation, and responsive user experience across desktop and mobile devices." : "Inisiatif rekayasa perangkat lunak ini dirancang untuk memodernisasi efisiensi promosi dan pencatatan pesanan entitas kuliner Izqy’s Kitchen. Mengintegrasikan kerangka kerja MVC CodeIgniter 4 dan basis data MySQL guna menjamin pemrosesan kueri yang optimal, sanitasi validasi data ketat, serta pengalaman antarmuka responsif yang konsisten pada peramban desktop maupun perangkat seluler.";
  const btnVisit = isEn ? "Visit Live System (izqyskitchen.shop)" : "Kunjungi Sistem Live (izqyskitchen.shop)";
  const btnCopy = isEn ? "Copy Official Project Link (izqyskitchen.shop)" : "Salin Tautan Resmi Proyek (izqyskitchen.shop)";

  const content = `
    <span class="cert-badge-tag" style="margin-bottom: 8px; display: inline-block;">${tag}</span>
    <h3 style="font-size: 1.6rem; margin-bottom: 16px; color: var(--text-main);">${title}</h3>

    <div style="position: relative; border-radius: var(--radius-lg); overflow: hidden; border: 1.5px solid var(--border-color); margin-bottom: 20px;">
      <img src="assets/projects/izqy-landing-light.png" alt="Landing Page Izqy's Kitchen — Light Mode" class="izqy-img-light" style="width: 100%; height: auto; display: block; max-height: 250px; object-fit: cover;">
      <img src="assets/projects/izqy-landing-dark.png" alt="Landing Page Izqy's Kitchen — Dark Mode" class="izqy-img-dark" style="width: 100%; height: auto; display: block; max-height: 250px; object-fit: cover;">
      <div style="position: absolute; bottom: 10px; left: 10px; right: 10px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px; background: rgba(15, 23, 42, 0.78); backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px); padding: 8px 14px; border-radius: var(--radius-md); border: 1px solid rgba(255,255,255,0.15);">
        <span style="color: #FFFFFF; font-size: 0.8rem; font-weight: 700; display: flex; align-items: center; gap: 6px;">
          <span style="width: 8px; height: 8px; border-radius: 50%; background: #22c55e;"></span>
          izqyskitchen.shop • Live Production
        </span>
      </div>
    </div>

    <p style="font-size: 0.925rem; line-height: 1.7; color: var(--text-muted); margin-bottom: 20px;">${desc}</p>

    <div style="display: flex; gap: 10px;">
      <a href="https://izqyskitchen.shop/" target="_blank" rel="noopener noreferrer" class="btn-tactile btn-primary-tactile" style="width: 100%; justify-content: center; text-decoration: none;">
        <i data-lucide="external-link"></i> ${btnVisit}
      </a>
    </div>
  `;
  openModalWithHTML(content);
}

// Modal: QR Code Hub
function showQrModal() {
  const isEn = currentLang === 'en';
  const tag = isEn ? "PERMANENT DIGITAL QUICK ACCESS" : "AKSES CEPAT DIGITAL PERMANEN";
  const title = isEn ? "Portfolio QR Code" : "Kode QR Portofolio";
  const btnClose = isEn ? "Close Dialog" : "Tutup Dialog";

  // Target landing page (index.html)
  const targetUrl = window.location.origin + '/index.html';
  const qrApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(targetUrl)}`;

  const content = `
    <div style="text-align: center;">
      <span class="cert-badge-tag" style="margin-bottom: 8px; display: inline-block;">${tag}</span>
      <h3 style="font-size: 1.5rem; margin-bottom: 18px; color: var(--text-main);">${title}</h3>
      
      <div style="width: 230px; height: 230px; margin: 0 auto 16px auto; background: #FFFFFF; padding: 12px; border-radius: var(--radius-lg); border: 2px solid var(--border-color); box-shadow: var(--shadow-sm); display: flex; align-items: center; justify-content: center; position: relative;">
        <img src="${qrApiUrl}" alt="Kode QR Portofolio ${targetUrl}" style="width: 100%; height: 100%; object-fit: contain; display: block; border-radius: var(--radius-sm);">
      </div>

      <div style="font-family: var(--font-mono); font-size: 0.775rem; color: var(--primary); font-weight: 700; background: var(--bg-surface); padding: 8px 14px; border-radius: var(--radius-md); border: 1.5px solid var(--border-color); margin-bottom: 20px; word-break: break-all; display: inline-flex; align-items: center; gap: 6px;">
        <i data-lucide="link" style="width: 14px; height: 14px; flex-shrink: 0;"></i> ${targetUrl}
      </div>

      <button class="btn-tactile btn-primary-tactile" style="width: 100%; justify-content: center;" onclick="closeUniversalModal()">${btnClose}</button>
    </div>
  `;
  openModalWithHTML(content);
}

// ==========================================================================
// 11. TOAST NOTIFICATIONS & CLIPBOARD UTILITIES
// ==========================================================================
let toastTimer;

function showToast(msg) {
  // Toast notifications disabled completely per user request
  return;
}

function copyEmailToClipboard() {
  const isEn = currentLang === 'en';
  navigator.clipboard.writeText('muhdanendra12@gmail.com').then(() => {
    showToast(isEn ? 'Official email address muhdanendra12@gmail.com copied successfully.' : 'Alamat email resmi muhdanendra12@gmail.com berhasil disalin.');
  });
}

function copyProjectUrlLive() {
  const isEn = currentLang === 'en';
  const url = 'https://izqyskitchen.shop/';
  if (navigator.clipboard) {
    navigator.clipboard.writeText(url).then(() => {
      showToast(isEn ? 'Official project link ' + url + ' copied successfully.' : 'Tautan resmi proyek ' + url + ' berhasil disalin.');
    }).catch(() => {
      showToast(isEn ? 'Official project link: ' + url : 'Tautan resmi proyek: ' + url);
    });
  } else {
    showToast(isEn ? 'Official project link: ' + url : 'Tautan resmi proyek: ' + url);
  }
}

function copyProjectUrlPlaceholder() {
  copyProjectUrlLive();
}

function handlePlaceholderAction(e, placeholderName) {
  if (e) e.preventDefault();
  showToast(`Tautan rujukan: ${placeholderName}`);
}

async function handleContactSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const submitBtn = form.querySelector('button[type="submit"]');
  const originalBtnHTML = submitBtn.innerHTML;

  const name = document.getElementById('contactName').value.trim();
  const email = document.getElementById('contactEmail').value.trim();
  const msg = document.getElementById('contactMsg').value.trim();

  if (!name || !email || !msg) {
    showToast(currentLang === 'en' ? 'Please fill in all form fields.' : 'Harap lengkapi seluruh kolom formulir.');
    return;
  }

  // Update button to loading state
  submitBtn.disabled = true;
  submitBtn.style.opacity = '0.75';
  submitBtn.innerHTML = `<i data-lucide="loader-2" class="spin-icon"></i> <span>${currentLang === 'en' ? 'Sending Message...' : 'Mengirimkan Pesan...'}</span>`;
  if (window.lucide) lucide.createIcons();

  try {
    const formData = new FormData();
    formData.append('Name', name);
    formData.append('Email', email);
    formData.append('Message', msg);
    formData.append('_subject', `Korespondensi Portofolio Baru dari ${name}`);
    formData.append('_template', 'table');
    formData.append('_captcha', 'false');

    const response = await fetch('https://formsubmit.co/ajax/263fb3d33ee9961c3f81a27d902b7589', {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });

    const result = await response.json();

    if (response.ok || result.success === "true" || result.success === true) {
      showToast(currentLang === 'en' ? 'Message sent successfully!' : 'Pesan korespondensi berhasil terkirim!');
      
      const isEn = currentLang === 'en';
      const modalTitle = isEn ? "Message Sent Successfully!" : "Pesan Korespondensi Terkirim!";
      const modalDesc = isEn 
        ? `Thank you, <strong>${name}</strong>. Your correspondence message has been transmitted directly to <strong>muhdanendra12@gmail.com</strong>. I will get back to you shortly.` 
        : `Terima kasih, <strong>${name}</strong>. Pesan korespondensi Anda telah berhasil dikirimkan secara langsung ke <strong>muhdanendra12@gmail.com</strong>. Saya akan segera merespons pesan Anda.`;
      const btnCloseText = isEn ? "Close Window" : "Tutup Jendela";

      openModalWithHTML(`
        <div style="text-align: center; padding: 10px 0;">
          <div style="width: 56px; height: 56px; border-radius: 50%; background: rgba(34, 197, 94, 0.15); border: 2px solid #22c55e; color: #22c55e; display: flex; align-items: center; justify-content: center; margin: 0 auto 16px;">
            <i data-lucide="check-circle-2" style="width: 32px; height: 32px;"></i>
          </div>
          <h3 style="font-size: 1.5rem; color: var(--text-main); margin-bottom: 10px;">${modalTitle}</h3>
          <p style="font-size: 0.95rem; color: var(--text-muted); line-height: 1.6; margin-bottom: 24px;">${modalDesc}</p>
          <button onclick="closeUniversalModal()" class="btn-tactile btn-primary-tactile" style="width: 100%; justify-content: center;">
            ${btnCloseText}
          </button>
        </div>
      `);

      form.reset();
    } else {
      throw new Error(result.message || 'Server error');
    }
  } catch (err) {
    console.warn('Direct fetch failed, falling back to mailto:', err);
    showToast(currentLang === 'en' ? 'Redirecting to email client...' : 'Dialihkan ke klien email...');
    window.location.href = `mailto:muhdanendra12@gmail.com?subject=Korespondensi%20Profesional%20dari%20${encodeURIComponent(name)}&body=${encodeURIComponent(msg + "\n\nPengirim: " + name + "\nEmail: " + email)}`;
  } finally {
    submitBtn.disabled = false;
    submitBtn.style.opacity = '1';
    submitBtn.innerHTML = originalBtnHTML;
    if (window.lucide) lucide.createIcons();
  }
}

// ==========================================================================
// 12. MOBILE NAVIGATION MENU & ACTIVE LINK HIGHLIGHTER
// ==========================================================================
function initNavigation() {
  const mobileMenuToggle = document.getElementById('mobileMenuToggle');
  const navLinks = document.querySelector('.nav-links');

  if (mobileMenuToggle && navLinks) {
    mobileMenuToggle.addEventListener('click', () => {
      const isVisible = navLinks.style.display === 'flex';
      if (isVisible) {
        navLinks.style.display = 'none';
      } else {
        navLinks.style.display = 'flex';
        navLinks.style.position = 'fixed';
        navLinks.style.top = '80px';
        navLinks.style.left = '20px';
        navLinks.style.right = '20px';
        navLinks.style.flexDirection = 'column';
        navLinks.style.background = 'var(--bg-surface)';
        navLinks.style.padding = '20px';
        navLinks.style.borderRadius = 'var(--radius-lg)';
        navLinks.style.border = '2px solid var(--border-color)';
        navLinks.style.boxShadow = 'var(--shadow-card)';
        navLinks.style.zIndex = '1500';
      }
    });

    document.querySelectorAll('.nav-item').forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
          navLinks.style.display = 'none';
        }
      });
    });
  }

  // Active link highlighter
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-item').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    } else if (href !== currentPath && !href.startsWith('#')) {
      link.classList.remove('active');
    }
  });

  // Language switcher dropdown button & outside click listener
  const langToggleBtn = document.getElementById('langToggleBtn');
  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', toggleLangDropdown);
  }

  document.addEventListener('click', (e) => {
    const wrapper = document.querySelector('.lang-dropdown-wrapper');
    if (wrapper && !wrapper.contains(e.target)) {
      closeLangDropdown();
    }
  });
}

// Social media link handler
function handleSocialClick(event, platform, defaultUrl) {
  // Allow direct navigation to user's social profile URL
  return true;
}

// ==========================================================================
// 13. DOM INITIALIZATION
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  setLanguage(currentLang);
  initNavigation();
  initAudioPlayer();
  initClock();
  initSkillFilters();
  initTimelineFilters();
  initCertFilters();
  initModals();

  if (window.lucide) window.lucide.createIcons();
});
