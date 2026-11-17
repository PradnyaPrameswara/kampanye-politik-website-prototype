import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const NEWSLETTER_EMAIL = 'newsletter@example.com';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'prepared'>('idle');
  const [mailtoLink, setMailtoLink] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const subject = 'Permintaan berlangganan newsletter Kabinet Merah Putih';
    const body = `E-mail: ${email}\n\nSaya ingin berlangganan newsletter Kabinet Merah Putih.`;
    const link = `mailto:${NEWSLETTER_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setMailtoLink(link);
    setStatus('prepared');
    window.location.href = link;
  };

  return (
    <div className="w-full max-w-sm mt-4">
      <p className="text-sm text-color-white-200 mb-2">
        Demo prototipe — langganan tidak diproses, hanya simulasi tampilan.
      </p>
      {status === 'prepared' ? (
        <div className="flex flex-col gap-2" role="status">
          <p className="text-sm text-white">
            Aplikasi email akan terbuka dengan pesan contoh. Ini demo — jangan kirim ke alamat tersebut.
          </p>
          <a className="text-sm text-white underline self-start" href={mailtoLink}>
            Buka aplikasi email
          </a>
          <button
            className="text-sm text-white underline self-start"
            onClick={() => setStatus('idle')}
            type="button"
          >
            Kembali ke formulir
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <div className="flex gap-2">
            <label className="sr-only" htmlFor="newsletter-email">
              Alamat e-mail Anda
            </label>
            <Input
              id="newsletter-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Masukkan alamat e-mail Anda"
              className="flex-1 bg-white text-neutral-black-900 border-none rounded-[0.75rem] h-10 px-5 py-3 focus-visible:ring-2 focus-visible:ring-brand-blue"
              required
            />
            <Button
              type="submit"
              variant="default"
              className="bg-brand-blue hover:bg-brand-red text-white rounded-[0.75rem] px-4 font-medium transition-colors h-10 flex items-center justify-center"
            >
              Berlangganan
            </Button>
          </div>
        </form>
      )}
    </div>
  );
}
