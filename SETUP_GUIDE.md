# HantaTracker Kurulum ve Yapılandırma Rehberi

## Hızlı Başlangıç

### 1. Geliştirme Sunucusu

```bash
cd hanta-tracker
npm install
npm run dev
```

Site **http://localhost:3000** adresinde çalışacak.

### 2. Production Build

```bash
npm run build
npm start
```

---

## Google AdSense Kurulumu

### Adım 1: AdSense Hesabı Oluşturma

1. [Google AdSense](https://adsense.google.com) adresine gidin
2. Google hesabınızla giriş yapın
3. Sitenizi ekleyin ve onay için bekleyin (1-14 gün)

### Adım 2: Publisher ID'yi Güncelleme

Onay aldıktan sonra, aşağıdaki dosyalardaki `ca-pub-XXXXXXXXXXXXXXXX` değerini kendi Publisher ID'nizle değiştirin:

**`src/app/layout.tsx`** (satır ~62):
```typescript
src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-YOUR_PUBLISHER_ID"
```

**`src/components/AdBanner.tsx`** (satır ~36):
```typescript
data-ad-client="ca-pub-YOUR_PUBLISHER_ID"
```

**`public/ads.txt`**:
```
google.com, pub-YOUR_PUBLISHER_ID, DIRECT, f08c47fec0942fa0
```

### Adım 3: Reklam Slotları Oluşturma

AdSense panelinde reklam üniteleri oluşturun:

| Konum | Önerilen Boyut | Format |
|-------|----------------|--------|
| Header Banner | 728x90 | Horizontal |
| Sidebar | 300x250 | Rectangle |
| In-Content | Responsive | Auto |
| Footer Banner | 728x90 | Horizontal |

Her slot için verilen kodu `AdBanner` komponentine ekleyin.

---

## Google Analytics Kurulumu

### Adım 1: GA4 Property Oluşturma

1. [Google Analytics](https://analytics.google.com) adresine gidin
2. Yeni property oluşturun
3. Measurement ID'yi kopyalayın (G-XXXXXXXXXX formatında)

### Adım 2: Measurement ID Güncelleme

**`src/app/layout.tsx`** dosyasında (satır ~68 ve ~73):

```typescript
// src='https://www.googletagmanager.com/gtag/js?id=G-YOUR_MEASUREMENT_ID'
// gtag('config', 'G-YOUR_MEASUREMENT_ID');
```

---

## Vercel'e Deploy

### Otomatik Deploy (Önerilen)

1. GitHub'a push edin
2. [Vercel](https://vercel.com) adresinde "New Project" seçin
3. GitHub repo'nuzu seçin
4. Deploy butonuna tıklayın

### Manuel Deploy

```bash
npm install -g vercel
vercel login
vercel --prod
```

### Environment Variables (Opsiyonel)

Vercel dashboard'da şu değişkenleri ekleyebilirsiniz:

```
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_ADSENSE_ID=ca-pub-XXXXXXXXXXXXXXXX
```

---

## Domain Yapılandırması

### DNS Ayarları

Vercel'de custom domain eklerken:

1. **A Record**: `76.76.19.19`
2. **CNAME**: `cname.vercel-dns.com`

### SSL Sertifikası

Vercel otomatik olarak ücretsiz SSL sertifikası sağlar.

---

## Dosya Yapısı

```
hanta-tracker/
├── public/
│   ├── ads.txt              # AdSense doğrulama
│   ├── robots.txt           # SEO
│   ├── manifest.json        # PWA
│   └── icon.svg             # Favicon
├── src/
│   ├── app/
│   │   ├── api/outbreaks/   # API endpoint
│   │   ├── privacy/         # Gizlilik politikası
│   │   ├── terms/           # Kullanım şartları
│   │   ├── disclaimer/      # Tıbbi uyarı
│   │   ├── layout.tsx       # Ana layout + SEO + Ads
│   │   ├── page.tsx         # Ana dashboard
│   │   └── sitemap.ts       # Dinamik sitemap
│   ├── components/
│   │   ├── Map.tsx          # İnteraktif harita
│   │   ├── Charts.tsx       # Grafikler
│   │   ├── OutbreakTable.tsx # Salgın tablosu
│   │   └── AdBanner.tsx     # Reklam komponenti
│   ├── data/
│   │   └── outbreaks.ts     # Salgın verileri
│   └── types/
│       └── index.ts         # TypeScript tipleri
└── README.md
```

---

## Veri Güncelleme

### Otomatik Güncelleme (Aktif)

Site şu kaynaklardan otomatik olarak veri çeker:

1. **WHO Disease Outbreak News API** - Hantavirüs salgın bildirimleri
2. **ECDC Surveillance Atlas** - Avrupa hantavirüs verileri
3. **ProMED-mail RSS** - Salgın haberleri ve uyarılar

Veriler her **1 saat**te bir otomatik yenilenir (ISR - Incremental Static Regeneration).

### Veri Kaynağı Yapılandırması

`src/lib/api.ts` dosyasında veri kaynaklarını özelleştirebilirsiniz:

```typescript
// WHO API filtresi
const WHO_API_BASE = 'https://www.who.int/api/news/dons';

// Ülke koordinatları
const countryCoordinates: Record<string, {...}> = {...};
```

### TrackHanta API Entegrasyonu (Opsiyonel)

Daha detaylı veriler için TrackHanta API kullanabilirsiniz:

1. API key alın: https://trackhanta.com/api
2. Environment variable ekleyin: `TRACKHANTA_API_KEY`
3. `src/lib/api.ts` dosyasına TrackHanta endpoint'i ekleyin

---

## Sorun Giderme

### Harita Yüklenmiyor

- Leaflet CSS'in yüklendiğinden emin olun
- Client-side rendering kontrolü yapın

### AdSense Çalışmıyor

- Site onayının tamamlandığını kontrol edin
- Publisher ID'nin doğru olduğunu doğrulayın
- ads.txt dosyasının erişilebilir olduğunu kontrol edin

### Build Hataları

```bash
rm -rf .next node_modules
npm install
npm run build
```

---

## Destek

Sorularınız için: info@hantatracker.com
