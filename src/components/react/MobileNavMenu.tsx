import React, { useState } from 'react';
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
  SheetClose,
} from '@/components/ui/sheet';

interface MobileNavMenuProps {
  currentPath?: string;
}

const base = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');

const toHref = (path: string) => path === '/' ? (base ? `${base}/` : '/') : `${base}${path}`;

const navLinks = [
  { name: 'Beranda', path: '/' },
  { name: 'Tentang Kami', path: '/about' },
  { name: 'Hubungi Kami', path: '/contact' },
  { name: 'Tim', path: '/team' },
  { name: 'Berita', path: '/blog' },
];

const getActiveKey = (p: string): string => {
  const pathWithoutBase = base && p.startsWith(base) ? p.slice(base.length) : p;

  const cleanPath = pathWithoutBase.replace(/\/+$/, '') || '/';

  if (cleanPath === '/') {
    return 'Beranda';
  }

  if (cleanPath === '/about' || cleanPath.startsWith('/about/')) {
    return 'Tentang Kami';
  }

  if (cleanPath === '/contact' || cleanPath.startsWith('/contact/')) {
    return 'Hubungi Kami';
  }

  if (cleanPath === '/team' || cleanPath.startsWith('/team/') || cleanPath.startsWith('/member/')) {
    return 'Tim';
  }

  if (cleanPath === '/blog' || cleanPath.startsWith('/blog/') || cleanPath.startsWith('/post/')) {
    return 'Berita';
  }

  if (cleanPath === '/program' || cleanPath.startsWith('/program/')) {
    return 'Program Nasional';
  }

  return '';
};

export default function MobileNavMenu({ currentPath = '/' }: MobileNavMenuProps) {
  const [open, setOpen] = useState(false);

  const activeKey = getActiveKey(currentPath);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger render={<button className="text-neutral-white p-2" aria-label="Buka menu" />}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="4" x2="20" y1="12" y2="12" />
          <line x1="4" x2="20" y1="6" y2="6" />
          <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
      </SheetTrigger>
      
      <SheetContent side="right" showCloseButton={false} className="w-3/4 max-w-sm bg-neutral-white-200 p-6 flex flex-col overflow-y-auto border-l border-neutral-black-500/20">
        <SheetTitle className="sr-only">Menu Navigasi Seluler</SheetTitle>
        <div className="flex justify-end mb-8">
          <SheetClose render={<button className="text-neutral-black-900 p-2" aria-label="Tutup menu" />}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </SheetClose>
        </div>
        
        <nav className="flex flex-col gap-4 mb-8">
          {navLinks.map((link) => (
            <a
              key={link.path}
              href={toHref(link.path)}
              className={`text-h5 text-neutral-black-900 py-4 border-b border-neutral-black-500/20 transition-colors hover:text-brand-blue ${link.name === activeKey ? 'font-bold text-brand-blue' : ''}`}
              onClick={() => setOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </nav>
        
        <div className="mt-auto flex flex-col gap-4">
          <a href={toHref('/program')} className={`flex items-center justify-center gap-2 py-3 text-neutral-black-900 font-medium border border-neutral-black-500 rounded-[0.75rem] ${activeKey === 'Program Nasional' ? 'font-bold' : ''}`} onClick={() => setOpen(false)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="7" height="7" rx="1" />
              <rect x="14" y="3" width="7" height="7" rx="1" />
              <rect x="3" y="14" width="7" height="7" rx="1" />
              <rect x="14" y="14" width="7" height="7" rx="1" />
            </svg>
            Program Nasional
          </a>
          <a href={toHref('/program')} className={`bg-brand-blue text-neutral-white py-4 rounded-[0.75rem] font-medium text-center transition-colors hover:bg-brand-red ${activeKey === 'Program Nasional' ? 'font-bold' : ''}`} onClick={() => setOpen(false)}>
            Jelajahi Program
          </a>
        </div>
      </SheetContent>
    </Sheet>
  );
}
