import React, { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';

interface MobileNavMenuProps {
  currentPath?: string;
}

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
  { name: 'Team', path: '/team' },
  { name: 'Blog', path: '/blog' },
];

export default function MobileNavMenu({ currentPath = '/' }: MobileNavMenuProps) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button className="text-neutral-white p-2" aria-label="Open menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </button>
      </Dialog.Trigger>
      
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 z-40 transition-opacity" />
        <Dialog.Content className="fixed right-0 top-0 bottom-0 w-3/4 max-w-sm bg-neutral-white-200 z-50 p-6 flex flex-col overflow-y-auto animate-in slide-in-from-right">
          <div className="flex justify-end mb-8">
            <Dialog.Close asChild>
              <button className="text-neutral-black-900 p-2" aria-label="Close menu">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </Dialog.Close>
          </div>
          
          <nav className="flex flex-col gap-4 mb-8">
            {navLinks.map((link) => (
              <a
                key={link.path}
                href={link.path}
                className={`text-h5 text-neutral-black-900 py-4 border-b border-neutral-black-500/20 transition-colors hover:text-brand-blue ${currentPath === link.path ? 'font-bold' : ''}`}
                onClick={() => setOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </nav>
          
          <div className="mt-auto flex flex-col gap-4">
            <a href="/donate" className="flex items-center justify-center gap-2 py-3 text-neutral-black-900 font-medium border border-neutral-black-500 rounded-[0.75rem]">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
              </svg>
              Donate
            </a>
            <a href="/join" className="bg-brand-blue text-neutral-white py-4 rounded-[0.75rem] font-medium text-center transition-colors hover:bg-brand-red" onClick={() => setOpen(false)}>
              Join us now
            </a>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
