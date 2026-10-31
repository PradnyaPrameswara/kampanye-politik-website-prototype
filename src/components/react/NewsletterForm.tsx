import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) return;

    setStatus('loading');

    try {
      const { promise, resolve } = Promise.withResolvers<void>();
      setTimeout(resolve, 1000);
      await promise;
      setStatus('success');
      setMessage('Thanks for subscribing!');
      setEmail('');
    } catch {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="w-full max-w-sm mt-4">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <div className="flex gap-2">
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 bg-white text-neutral-black-900 border-none rounded-[0.75rem] h-10 px-5 py-3 focus-visible:ring-2 focus-visible:ring-brand-blue"
            required
            disabled={status === 'loading'}
          />
          <Button
            type="submit"
            variant="default"
            className="bg-brand-blue hover:bg-brand-red text-white rounded-[0.75rem] px-4 font-medium transition-colors h-10 flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
            disabled={status === 'loading'}
          >
            {status === 'loading' ? '...' : 'Subscribe'}
          </Button>
        </div>
        {status === 'success' && <p className="text-sm text-green-400">{message}</p>}
        {status === 'error' && <p className="text-sm text-brand-red">{message}</p>}
      </form>
    </div>
  );
}
