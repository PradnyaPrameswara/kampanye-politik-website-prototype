import React, { useState } from 'react';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) return;
    
    setStatus('loading');
    
    try {
      // Assuming there's an Astro action endpoint for this, we'll mock the fetch here
      // const response = await fetch('/api/newsletter', {
      //   method: 'POST',
      //   body: JSON.stringify({ email }),
      //   headers: { 'Content-Type': 'application/json' }
      // });
      
      // Mock successful response
      await new Promise(resolve => setTimeout(resolve, 1000));
      
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
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 bg-white text-neutral-black-900 border-none rounded-[0.75rem] h-10 px-5 py-3 focus:outline-none focus:ring-2 focus:ring-brand-blue"
            required
            disabled={status === 'loading'}
          />
          <button
            type="submit"
            className="bg-brand-blue hover:bg-brand-red text-white rounded-[0.75rem] px-4 font-medium transition-colors h-10 flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
            disabled={status === 'loading'}
          >
            {status === 'loading' ? '...' : 'Subscribe'}
          </button>
        </div>
        {status === 'success' && <p className="text-sm text-green-400">{message}</p>}
        {status === 'error' && <p className="text-sm text-brand-red">{message}</p>}
      </form>
    </div>
  );
}
