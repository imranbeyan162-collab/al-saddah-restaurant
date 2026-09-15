import type { Metadata } from 'next';
import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';

export const metadata: Metadata = {
  title: 'مطعم السدة | Al-Saddah Restaurant | አል ሰዳህ ሬስቶራንት - Addis Ababa',
  description: 'مطعم السدة للمأكولات اليمنية التراثية في شارع رواندا، أديس أبابا. مندي، زربيان، شاورما، معصوب، وشاي عدني. Authentic Yemeni cuisine in Addis Ababa, Rwanda Street.',
  keywords: [
    'Al-Saddah Restaurant',
    'مطعم السدة',
    'አል ሰዳህ ሬስቶራንት',
    'Yemeni Restaurant Addis Ababa',
    'Mandi Addis Ababa',
    'Rwanda Street restaurant',
    'Zurbian',
    'Shawarma',
    'Masoob'
  ],
  authors: [{ name: 'Al-Saddah Restaurant' }],
  openGraph: {
    title: 'Al-Saddah Yemeni Restaurant • مطعم السدة',
    description: 'Authentic Yemeni Flavors in the Heart of Addis Ababa, Rwanda Street. Slow-cooked pit Mandi, Zurbian, Shawarma, and fine multi-floor dining.',
    url: 'https://al-saddah.com',
    siteName: 'Al-Saddah Restaurant',
    locale: 'ar_YE',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;600;700;800;900&family=Noto+Sans+Ethiopic:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#FCFBF7] text-neutral-900 min-h-screen flex flex-col antialiased">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
