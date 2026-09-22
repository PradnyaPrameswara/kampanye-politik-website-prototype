import Stripe from 'stripe';

if (!import.meta.env.STRIPE_SECRET_KEY) {
  throw new Error('STRIPE_SECRET_KEY environment variable is required');
}

export const stripe = new Stripe(import.meta.env.STRIPE_SECRET_KEY || 'sk_test_placeholder', {
  apiVersion: '2025-02-24.acacia',
});
