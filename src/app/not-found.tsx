import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white flex flex-col items-center justify-center p-6 text-center">
      <div className="p-4 rounded-full bg-amber-500/10 border border-amber-500/30 mb-6">
        <span className="text-4xl font-black text-amber-400">404</span>
      </div>
      <h1 className="text-2xl sm:text-3xl font-bold mb-2">
        الصفحة غير موجودة • Page Not Found
      </h1>
      <p className="text-neutral-400 text-sm max-w-md mb-8">
        عذراً، الصفحة التي تبحث عنها غير متوفرة. يمكنك العودة إلى الصفحة الرئيسية لمطعم السدة.
      </p>
      <Link
        href="/"
        className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-neutral-950 font-bold text-sm shadow-lg hover:brightness-110 transition-all"
      >
        العودة للرئيسية • Return to Home
      </Link>
    </div>
  );
}
