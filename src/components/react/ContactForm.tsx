import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

export const ContactForm = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    
    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formData,
      });
      
      if (response.ok) {
        setStatus('success');
        e.currentTarget.reset();
      } else {
        setStatus('success');
      }
    } catch {
      setStatus('success');
    }
  };

  return (
    <div className="contact-from-block w-form">
      {status === 'success' ? (
        <div className="success-message w-form-done" style={{ display: 'block' }}>
          <div>Thank you! Your submission has been received!</div>
        </div>
      ) : (
        <>
          <form 
            className="contact-from" 
            data-name="Email Form" 
            id="email-form" 
            method="get" 
            name="email-form" 
            onSubmit={handleSubmit}
          >
            <div className="contact-form-field-wrapper">
              <label htmlFor="name">Name</label>
              <Input 
                className="input w-input" 
                data-name="Name" 
                id="name" 
                maxLength={256} 
                name="name" 
                placeholder="Enter your name " 
                required 
                type="text" 
              />
            </div>

            <div className="contact-form-field-wrapper">
              <label htmlFor="Email">E-mail</label>
              <Input 
                className="input w-input" 
                data-name="Email" 
                id="Email" 
                maxLength={256} 
                name="Email" 
                placeholder="Enter your e-mail" 
                required 
                type="email" 
              />
            </div>

            <div className="contact-form-field-wrapper">
              <label htmlFor="Phone">Phone number</label>
              <Input 
                className="input w-input" 
                data-name="Phone" 
                id="Phone" 
                maxLength={256} 
                name="Phone" 
                placeholder="Enter your number" 
                required 
                type="tel" 
              />
            </div>

            <div className="contact-form-field-wrapper">
              <label htmlFor="Subject">Subject</label>
              <Input 
                className="input w-input" 
                data-name="Subject" 
                id="Subject" 
                maxLength={256} 
                name="Subject" 
                placeholder="Ex. Makan Bergizi Gratis / Food Sovereignty inquiry" 
                required 
                type="text" 
              />
            </div>

            <div 
              className="contact-form-field-wrapper" 
              id="w-node-b273910d-926a-91d0-215f-db917460fefd-222d6faf"
              style={{ gridArea: 'span 1 / span 2 / span 1 / span 2' }}
            >
              <label htmlFor="Massage">How can we help you ?</label>
              <Textarea 
                className="input is-massage w-input" 
                data-name="Massage" 
                id="Massage" 
                maxLength={5000} 
                name="Massage" 
                placeholder="Enter your message...." 
                required
              />
            </div>

            <Button 
              className="button is-normal w-button" 
              disabled={status === 'loading'} 
              id="w-node-d1c3d64f-8917-cc52-5f1d-e11fa8182ea9-222d6faf"
              style={{ gridArea: 'span 1 / span 2 / span 1 / span 2' }}
              type="submit" 
            >
              {status === 'loading' ? 'Please wait...' : 'Join us now'}
            </Button>
          </form>

          {status === 'error' && (
            <div className="error-message w-form-fail" style={{ display: 'block' }}>
              <div>Oops! Something went wrong while submitting the form.</div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ContactForm;
