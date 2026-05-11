# HantaTracker - Global Hantavirus Outbreak Monitor

Real-time tracking of global hantavirus outbreaks with interactive map and statistics.

![HantaTracker Screenshot](./screenshot.png)

## Features

- **Live Outbreak Map**: Interactive world map showing active hantavirus outbreaks
- **Real-time Statistics**: Global case counts, deaths, and active outbreaks
- **Data Visualization**: Charts showing trends, country comparisons, and virus type distribution
- **News Feed**: Latest updates from health authorities
- **Comprehensive Information**: Educational content about hantavirus, symptoms, and prevention
- **Mobile Responsive**: Fully responsive design for all devices
- **SEO Optimized**: Full meta tags, sitemap, and structured data

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Maps**: React Leaflet + Leaflet
- **Charts**: Recharts
- **Icons**: Lucide React
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/hanta-tracker.git
cd hanta-tracker

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
npm run build
npm start
```

## Configuration

### Google AdSense

To enable Google AdSense, update the following in `src/app/layout.tsx`:

```typescript
// Replace with your AdSense Publisher ID
data-ad-client="ca-pub-YOUR_PUBLISHER_ID"
```

And in `src/components/AdBanner.tsx`:

```typescript
data-ad-client="ca-pub-YOUR_PUBLISHER_ID"
data-ad-slot="YOUR_AD_SLOT_ID"
```

### Google Analytics

Update the Google Analytics ID in `src/app/layout.tsx`:

```typescript
// Replace with your GA4 Measurement ID
gtag('config', 'G-YOUR_MEASUREMENT_ID');
```

### Domain Configuration

Update the base URL in `src/app/layout.tsx`:

```typescript
metadataBase: new URL('https://yourdomain.com'),
```

## Data Sources (Live)

Outbreak data is **automatically fetched** from official health authorities:

- **WHO Disease Outbreak News API** - Real-time disease outbreak notifications
- **ECDC Surveillance Atlas** - European hantavirus surveillance data
- **ProMED-mail RSS** - Outbreak alerts and reports

Data refreshes every hour using Next.js ISR (Incremental Static Regeneration).

## Project Structure

```
src/
├── app/
│   ├── api/
│   │   └── outbreaks/      # API endpoint
│   ├── privacy/            # Privacy policy page
│   ├── terms/              # Terms of service page
│   ├── disclaimer/         # Medical disclaimer page
│   ├── layout.tsx          # Root layout with SEO
│   ├── page.tsx            # Main dashboard
│   ├── globals.css         # Global styles
│   └── sitemap.ts          # Dynamic sitemap
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Footer.tsx          # Site footer
│   ├── Map.tsx             # Interactive Leaflet map
│   ├── StatsCard.tsx       # Statistics cards
│   ├── OutbreakTable.tsx   # Sortable outbreak table
│   ├── Charts.tsx          # Recharts visualizations
│   ├── NewsFeed.tsx        # News/updates component
│   ├── AboutSection.tsx    # Hantavirus information
│   ├── SourcesSection.tsx  # Data sources
│   └── AdBanner.tsx        # Google AdSense component
├── lib/
│   ├── api.ts              # WHO, ECDC, ProMED API clients
│   └── data.ts             # Data aggregation & processing
└── types/
    └── index.ts            # TypeScript interfaces
```

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import the repository in [Vercel](https://vercel.com)
3. Configure environment variables if needed
4. Deploy

### Environment Variables (Optional)

```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_ADSENSE_ID=ca-pub-XXXXXXXXXXXXXXXX
```

## AdSense Setup Guide

1. **Create AdSense Account**: Visit [Google AdSense](https://adsense.google.com)
2. **Add Your Site**: Submit your domain for review
3. **Wait for Approval**: Usually 1-14 days
4. **Get Ad Codes**: Create ad units in AdSense dashboard
5. **Update Code**: Replace placeholder IDs in the codebase

### Ad Placement Best Practices

- Header banner (728x90 or responsive)
- Sidebar (300x250 or 160x600)
- In-content (responsive)
- Footer banner (728x90 or responsive)

## License

MIT License - see [LICENSE](LICENSE) for details.

## Disclaimer

This website is for informational purposes only and is not intended as medical advice. Data accuracy is not guaranteed. Always consult official health authorities for guidance.

## Contributing

Contributions are welcome! Please read our contributing guidelines before submitting PRs.

---

Built with care for public health awareness.
