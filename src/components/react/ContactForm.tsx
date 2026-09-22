import React, { useState } from 'react';

export const ContactForm = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    
    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formData
      });
      
      if (response.ok) {
        setStatus('success');
        e.currentTarget.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full">
      {status === 'success' && (
        <div className="bg-green-100 text-green-800 p-4 rounded-[0.75rem] mb-6">
          Thank you! Your message has been sent.
        </div>
      )}
      
      {status === 'error' && (
        <div className="bg-red-100 text-red-800 p-4 rounded-[0.75rem] mb-6">
          There was an error sending your message. Please try again later.
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <input 
            type="text" 
            name="name" 
            placeholder="Name" 
            required 
            className="w-full bg-neutral-white-200 border-none rounded-[0.75rem] px-5 py-3 h-10 outline-none focus:ring-2 focus:ring-brand-blue"
          />
        </div>
        <div>
          <input 
            type="email" 
            name="email" 
            placeholder="Email" 
            required 
            className="w-full bg-neutral-white-200 border-none rounded-[0.75rem] px-5 py-3 h-10 outline-none focus:ring-2 focus:ring-brand-blue"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <input 
            type="tel" 
            name="phone" 
            placeholder="Phone" 
            className="w-full bg-neutral-white-200 border-none rounded-[0.75rem] px-5 py-3 h-10 outline-none focus:ring-2 focus:ring-brand-blue"
          />
        </div>
        <div>
          <input 
            type="text" 
            name="subject" 
            placeholder="Subject" 
            required
            className="w-full bg-neutral-white-200 border-none rounded-[0.75rem] px-5 py-3 h-10 outline-none focus:ring-2 focus:ring-brand-blue"
          />
        </div>
      </div>
      
      <div>
        <textarea 
          name="message" 
          placeholder="Message" 
          required
          className="w-full bg-neutral-white-200 border-none rounded-[0.75rem] px-5 py-3 h-[6.625rem] resize-none outline-none focus:ring-2 focus:ring-brand-blue"
        ></textarea>
      </div>
      
      <button 
        type="submit" 
        disabled={status === 'loading'}
        className="bg-brand-blue hover:bg-brand-red text-white rounded-[0.75rem] px-6 py-[0.8125rem] font-medium transition-colors duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? 'Sending...' : 'Send message'}
      </button>
    </form>
  );
};

export default ContactForm;
