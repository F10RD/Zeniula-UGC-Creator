// ============================================================
// PLIK KONFIGURACYJNY STRONY ZENIULI
// ============================================================
// Tutaj zmieniasz WSZYSTKIE treści strony.
// Nie musisz dotykać żadnych innych plików!
//
// JAK DODAĆ VIDEO:
//   YouTube:  'https://www.youtube.com/embed/TWOJE_ID'
//   TikTok:   'https://www.tiktok.com/embed/v2/TWOJE_ID'
//   Brak:     null  (pokaże placeholder)
//
// JAK ZNALEŹĆ ID:
//   YouTube: youtube.com/watch?v=[TO_JEST_ID]
//   TikTok:  tiktok.com/@login/video/[TO_JEST_ID]
//
// JAK WGRAĆ ZDJĘCIE:
//   1. Zapisz plik jako .webp (przez squoosh.app)
//   2. Wgraj do folderu public/ w projekcie
//   3. Wpisz '/nazwa-pliku.webp' jako wartość
// ============================================================

export const siteConfig = {
  // ----------------------------------------------------------
  // PODSTAWOWE INFO
  // ----------------------------------------------------------
  name: 'Zeniula', // Imię — pojawia się w Hero i footerze
  title: 'Zeniula · UGC Creator', // Tytuł karty przeglądarki i footera
  tagline: 'UGC Creator', // Badge nad imieniem w Hero

  // ----------------------------------------------------------
  // SEKCJA HERO (pierwsza sekcja — pełny ekran)
  // ----------------------------------------------------------

  // Zdjęcie tła Hero
  // Wgraj swoje zdjęcie do public/ i wpisz '/nazwa.webp'
  heroBgImage: '/hero-bg.webp',

  // Tekst pod imieniem
  heroDescription: 'Tworzę, angażuję, sprzedaję.',

  // Tekst małego napisu obok "UGC Creator"
  heroSubtagline: 'Tworzę content, który sprzedaje',

  // Przyciski
  heroCTAPrimary: 'Porozmawiajmy 💌',
  heroCTASecondary: 'Zobacz realizacje',

  // ----------------------------------------------------------
  // SEKCJA "O MNIE"
  // ----------------------------------------------------------

  // Zdjęcie profilowe
  // Wgraj swoje zdjęcie do public/ i wpisz '/nazwa.webp'
  profileImage: '/profile.webp',

  // Opis — pojawia się po prawej stronie zdjęcia
  about:
    'Cześć, jestem Zeniula. Tworzę treści UGC, które zatrzymają uwagę i sprzedają produkty. Skupiam się na naturalnym storytellingu i dopasowuję treści do grupy docelowej.',

  // true  = pokazuje zielony badge "Dostępna do współpracy"
  // false = ukrywa badge (gdy jesteś zajęta)
  availability: true,

  // Statystyki — zmień wartości według potrzeb
  stats: [
    { value: 'Beauty', label: '& Lifestyle' },
    { value: 'Fashion', label: '& E-com' },
    { value: '100%', label: 'Zaangażowania' },
  ],

  // Lista usług — pojawia się pod statystykami
  services: [
    'Filmy produktowe UGC',
    'Unboxing & recenzje',
    'Storytelling dla marek',
    'Content na TikTok & Instagram Reels',
  ],

  // Tagi kategorii — pojawią się jako "pigułki" pod usługami
  tags: ['Beauty', 'Lifestyle', 'Fashion', 'Produkty', 'Unboxing', 'Recenzje'],

  // Video w sekcji "O mnie" (pod zdjęciem)
  // null   = pokazuje placeholder "wkrótce"
  // 'link' = pokazuje prawdziwe video
  aboutVideoUrl: null as string | null,
  // Przykład: aboutVideoUrl: 'https://www.youtube.com/embed/ABC123',

  // ----------------------------------------------------------
  // SEKCJA "MÓJ SPRZĘT"
  // ----------------------------------------------------------
  // Dodaj lub usuń sprzęt według potrzeb
  // image — link do zdjęcia produktu lub '/nazwa.webp' z folderu public/
  gear: [
    {
      name: 'Laptop HP Omen 15',
      image: '/gear/hp-omen.png',
    },
    {
      name: 'iPhone 17',
      image: '/gear/iphone.png',
    },
    {
      name: 'Mikrofon DJI Mic Mini',
      image: '/gear/dji.png',
    },
    {
      name: 'Lampa Grundig',
      image: '/gear/lamp.png',
    },
    {
      name: 'Lampa Ulanzi',
      image: '/gear/ulanzi.png',
    },
  ],
  // ----------------------------------------------------------
  // SEKCJA KONTAKT
  // ----------------------------------------------------------
  contactHeading: 'Działamy? 🌸',
  contactSubtext: 'Chętnie porozmawiam o współpracy. Napisz do mnie!',

  contactLabels: {
    name: 'Imię',
    namePlaceholder: 'Twoje imię',
    email: 'Email',
    emailPlaceholder: 'twoj@email.com',
    message: 'Wiadomość',
    messagePlaceholder: 'Opowiedz mi o swojej marce i czego szukasz...',
    submit: 'Wyślij wiadomość 💌',
    submitSuccess: '✓ Wysłano! Odezwę się wkrótce 🌸',
  },

  // ----------------------------------------------------------
  // SOCIAL MEDIA
  // ----------------------------------------------------------
  social: {
    tiktok: 'https://tiktok.com/@zeniula',
    tiktokHandle: '@zeniula',
    instagram: 'https://instagram.com/zeeniula',
    instagramHandle: '@zeeniula',
    email: 'zeniula.ugc@gmail.com',
  },

  // ----------------------------------------------------------
  // FOOTER
  // ----------------------------------------------------------
  footerCopyright: '© 2026 Zeniula · UGC Creator. Wszelkie prawa zastrzeżone.',
};

// ============================================================
// PORTFOLIO — REALIZACJE
// ============================================================
// Każda realizacja to jeden blok { } oddzielony przecinkiem.
//
// POLA:
//   id        — numer porządkowy (1, 2, 3...), nie powtarzaj
//   title     — tytuł projektu
//   brand     — nazwa marki / klienta
//   type      — kategoria (mały tag na karcie)
//   image     — miniatura karty:
//               • Własny screenshot: '/thumbnails/nazwa.webp'
//               • Zewnętrzny link:   'https://...'
//   videoUrl  — link do video lub null jeśli brak
//   videoType — 'youtube' | 'tiktok' | null  ← WAŻNE: zawsze ustaw!
//
// ABY DODAĆ REALIZACJĘ:
//   Skopiuj blok poniżej, wklej na końcu listy przed ostatnim ]
//   i uzupełnij dane. Pamiętaj o przecinku po poprzednim bloku!
//
//   PRZYKŁAD NOWEJ REALIZACJI:
//   {
//     id: 7,
//     title: 'Mój nowy film',
//     brand: 'Nazwa marki',
//     type: 'Video UGC',
//     image: '/thumbnails/moj-film.webp',
//     videoUrl: 'https://www.tiktok.com/embed/v2/TWOJE_ID',
//     videoType: 'tiktok',
//     lub YT
//     videoUrl: 'https://www.youtube.com/embed/TWOJE_ID',
//     videoType: 'youtube',
//     lub YT Shorts
//     videoUrl: 'https://www.youtube.com/embed/TWOJE_ID',
//     videoType: 'youtube-shorts',
//     lub Vimeo
//     videoUrl: 'https://player.vimeo.com/video/VIDEO_ID',
//     videoType: 'vimeo',
//   },
//
// ABY USUNĄĆ REALIZACJĘ:
//   Usuń cały blok { ... } wraz z przecinkiem po nim.
//
// ABY UKRYĆ PLAY BUTTON (brak video):
//   videoUrl: null,
//   videoType: null,
// ============================================================

export type VideoType = 'youtube' | 'youtube-short' | 'tiktok' | 'vimeo' | null;

export type PortfolioItem = {
  id: number;
  title: string;
  brand: string;
  type: string;
  image: string | null;
  videoUrl: string | null;
  videoType: VideoType;
};

export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: 'Nosidełko dla dziecka',
    brand: 'Lennylamb',
    type: 'Recenzja produktu',
    image: null,
    videoUrl: 'https://player.vimeo.com/video/1169339688',
    videoType: 'vimeo',
    // Gdy dodasz video:
    // image: '/thumbnails/beauty-unboxing.webp',
    // videoUrl: 'https://www.tiktok.com/embed/v2/1234567890',
    // videoType: 'tiktok',
  },
  {
    id: 2,
    title: 'Puder Taft',
    brand: 'Schwarzkopf',
    type: 'Recenzja produktu',
    image: null,
    videoUrl: 'https://player.vimeo.com/video/1169337129',
    videoType: 'vimeo',
  },
  {
    id: 3,
    title: 'Odkrywczy Domek',
    brand: 'Dumel',
    type: 'Recenzja produktu',
    image: null,
    videoUrl: 'https://player.vimeo.com/video/1169341166',
    videoType: 'vimeo',
  },
];
