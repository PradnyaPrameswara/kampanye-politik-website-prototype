import React, { useState } from 'react';

interface DonateButtonProps {
  stripePriceId: string;
  amount: number;
}

export function DonateButton({ stripePriceId: _stripePriceId, amount }: DonateButtonProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleDonate = async () => {
    setLoading(true);
    setError(null);

    try {
      // If deployed with an API route or direct Stripe payment link
      // For static deployment, redirect to success confirmation
      setTimeout(() => {
        window.location.href = `/donate/success?amount=${amount}`;
      }, 500);
    } catch {
      setError('An unexpected error occurred.');
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-start">
      <button
        onClick={handleDonate}
        disabled={loading}
        className="bg-brand-blue hover:bg-brand-red text-white rounded-[0.75rem] px-6 py-[0.8125rem] font-medium transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center min-w-[150px] cursor-pointer"
      >
        {loading ? (
          <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        ) : (
          `Donate $${amount}`
        )}
      </button>
      {error && <p className="text-brand-red mt-2 text-sm">{error}</p>}
    </div>
  );
}

export default DonateButton;
