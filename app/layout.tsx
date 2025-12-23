import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Inco Filing - Start Your US Business Online',
  description: 'Inco Filing helps you start your US business online with ease. Form your LLC, get your EIN, open a business bank account & stay compliant – all in one simple package.',
  keywords: [
    'LLC Formation', 'US Business', 'EIN', 'Business Bank Account', 'Startup', 'Compliance',
    'Register US LLC', 'Online LLC', 'Business Compliance', 'Inco Filing'
  ],
  openGraph: {
    title: 'Inco Filing - Start Your US Business Online',
    description: 'Start your US business online with LLC formation, EIN, and banking services.',
    url: 'https://www.incofiling.com',
    siteName: 'Inco Filing',
    images: [
      {
        url: 'https://www.incofiling.com/images/Logo.svg', // Social preview image
        width: 1200,
        height: 630,
      },
    ],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Inco Filing - Start Your US Business Online',
    description: 'Form your LLC, get your EIN, open a business bank account & stay compliant – all in one simple package.',
    images: ['https://www.incofiling.com/images/Logo.svg'],
    site: '@IncoFiling',
    creator: '@IncoFiling',
  },
  robots: { index: true, follow: true },
  metadataBase: new URL('https://www.incofiling.com'),
  icons: { 
    icon: '/images/favicon.ico',      // Browser tab
    shortcut: '/images/favicon.ico',  // Shortcut icon
    apple: '/images/Logo.svg',        // Apple devices & tiles
  },
  alternates: { canonical: '/' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Favicon and Apple Touch Icon */}
        <link rel="icon" href="/images/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/images/Logo.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#310971" />

        {/* Structured Data JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "LocalBusiness",
                  name: "Inco Filing",
                  image: "https://www.incofiling.com/images/Logo.svg",
                  url: "https://www.incofiling.com",
                  telephone: "+923354882824",
                  priceRange: "$$$",
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "Online Service",
                    addressLocality: "USA",
                    postalCode: "00000",
                    addressCountry: "US",
                  },
                  geo: { "@type": "GeoCoordinates", latitude: "37.0902", longitude: "-95.7129" },
                  sameAs: [
                    "https://www.facebook.com/IncoFiling",
                    "https://twitter.com/IncoFiling",
                    "https://www.linkedin.com/company/incofiling",
                  ],
                  openingHoursSpecification: [
                    {
                      "@type": "OpeningHoursSpecification",
                      dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"],
                      opens: "09:00",
                      closes: "18:00"
                    },
                  ],
                },
                {
                  "@type": "FAQPage",
                  mainEntity: [
                    { "@type": "Question", name: "How can I start a US LLC online?", acceptedAnswer: { "@type": "Answer", text: "You can start your US LLC online easily using Inco Filing services by filling out our online form." } },
                    { "@type": "Question", name: "Do I need a US address?", acceptedAnswer: { "@type": "Answer", text: "No, Inco Filing provides a registered agent address in the US." } },
                  ],
                },
                {
                  "@type": "BreadcrumbList",
                  itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incofiling.com" },
                  ],
                },
              ],
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
