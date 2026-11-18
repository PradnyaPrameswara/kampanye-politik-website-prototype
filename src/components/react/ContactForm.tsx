import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

const CONTACT_EMAIL = 'kontak@example.com';

export const ContactForm = () => {
  const [status, setStatus] = useState<'idle' | 'prepared'>('idle');
  const [mailtoLink, setMailtoLink] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const name = String(formData.get('name') ?? '').trim();
    const email = String(formData.get('Email') ?? '').trim();
    const phone = String(formData.get('Phone') ?? '').trim();
    const subject = String(formData.get('Subject') ?? '').trim();
    const message = String(formData.get('Massage') ?? '').trim();

    const body = [
      `Nama: ${name}`,
      `E-mail: ${email}`,
      `Nomor telepon: ${phone}`,
      '',
      message,
    ].join('\n');

    const link = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setMailtoLink(link);
    setStatus('prepared');
    window.location.href = link;
  };

  return (
    <div className="contact-from-block w-form">
      <p className="text-size-small text-color-white-200 mb-3">
        Demo prototipe — pesan tidak dikirim. Gunakan formulir ini hanya untuk simulasi tampilan.
      </p>
      {status === 'prepared' ? (
        <div className="success-message w-form-done" style={{ display: 'block' }} role="status">
          <div>
            Aplikasi email Anda akan terbuka dengan pesan contoh. Ini adalah demo — jangan kirim ke alamat tersebut.
          </div>
          <div className="contact-form-field-wrapper">
            <a className="button is-normal w-button" href={mailtoLink}>
              Buka aplikasi email
            </a>
          </div>
          <div className="contact-form-field-wrapper">
            <Button
              variant="ghost"
              className="button is-normal w-button"
              onClick={() => setStatus('idle')}
              type="button"
            >
              Kembali ke formulir
            </Button>
          </div>
        </div>
      ) : (
        <form
          className="contact-from"
          data-name="Email Form"
          id="email-form"
          method="get"
          name="email-form"
          onSubmit={handleSubmit}
        >
          <div className="contact-form-field-wrapper">
            <label htmlFor="name">Nama</label>
            <Input
              className="input w-input !bg-neutral-white-200 !rounded-[0.75rem] !border-0"
              data-name="Name"
              id="name"
              maxLength={256}
              name="name"
              placeholder="Masukkan nama Anda"
              required
              type="text"
            />
          </div>

          <div className="contact-form-field-wrapper">
            <label htmlFor="Email">E-mail</label>
            <Input
              className="input w-input !bg-neutral-white-200 !rounded-[0.75rem] !border-0"
              data-name="Email"
              id="Email"
              maxLength={256}
              name="Email"
              placeholder="Masukkan alamat e-mail Anda"
              required
              type="email"
            />
          </div>

          <div className="contact-form-field-wrapper">
            <label htmlFor="Phone">Nomor telepon</label>
            <Input
              className="input w-input !bg-neutral-white-200 !rounded-[0.75rem] !border-0"
              data-name="Phone"
              id="Phone"
              maxLength={256}
              name="Phone"
              placeholder="Masukkan nomor telepon Anda"
              required
              type="tel"
            />
          </div>

          <div className="contact-form-field-wrapper">
            <label htmlFor="Subject">Subjek</label>
            <Input
              className="input w-input !bg-neutral-white-200 !rounded-[0.75rem] !border-0"
              data-name="Subject"
              id="Subject"
              maxLength={256}
              name="Subject"
              placeholder="Contoh: Makan Bergizi Gratis / pertanyaan kedaulatan pangan"
              required
              type="text"
            />
          </div>

          <div
            className="contact-form-field-wrapper"
            id="w-node-b273910d-926a-91d0-215f-db917460fefd-222d6faf"
            style={{ gridArea: 'span 1 / span 2 / span 1 / span 2' }}
          >
            <label htmlFor="Massage">Bagaimana kami dapat membantu Anda?</label>
            <Textarea
              className="input is-massage w-input !bg-neutral-white-200 !rounded-[0.75rem] !border-0"
              data-name="Massage"
              id="Massage"
              maxLength={5000}
              name="Massage"
              placeholder="Masukkan pesan Anda..."
              required
            />
          </div>

          <Button
            variant="ghost"
            className="button is-normal w-button"
            id="w-node-d1c3d64f-8917-cc52-5f1d-e11fa8182ea9-222d6faf"
            style={{ gridArea: 'span 1 / span 2 / span 1 / span 2' }}
            type="submit"
          >
            Kirim pertanyaan
          </Button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
