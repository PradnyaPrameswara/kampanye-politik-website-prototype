import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    screens: {
      mobile: '480px',
      tablet: '768px',
      laptop: '992px',
      desktop: '1200px',
    },
    extend: {
      fontFamily: {
        sans: ['Lora Variable', 'Lora', 'serif'],
      },
      colors: {
        neutral: {
          white: '#ffffff',
          'white-200': '#fafafb',
          'white-300': '#e8ecf2',
          'black-500': '#a7acb5',
          'black-600': '#798192',
          'black-700': '#434c5c',
          'black-800': '#4b6493',
          'black-900': '#002466',
        },
        brand: {
          blue: '#0267ff',
          red: '#d3383f',
        },
        header: {
          overlay: '#081a3ecc',
        },
      },
      fontSize: {
        h1: ['3.875rem', { lineHeight: '4.375rem', fontWeight: '700' }],
        h2: ['2.625rem', { lineHeight: '3.125rem', fontWeight: '700' }],
        h3: ['2rem', { lineHeight: '2.5rem', fontWeight: '700' }],
        h4: ['1.75rem', { lineHeight: '2.25rem', fontWeight: '700' }],
        h5: ['1.5rem', { lineHeight: '2rem', fontWeight: '700' }],
        h6: ['1.125rem', { lineHeight: '1.625rem', fontWeight: '600' }],
      },
      maxWidth: {
        container: '75rem',
      },
      borderRadius: {
        DEFAULT: '0.75rem',
      },
      boxShadow: {
        subtle: '0 8px 16px #00000008',
      },
      spacing: {
        'section-md': '3.75rem',
        'section-lg': '7.5rem',
        'global-pad': '1.5rem',
        'gap-lg': '3.125rem',
        'gap-md': '2.5rem',
      },
      typography: {
        DEFAULT: {
          css: {
            fontFamily: 'Lora Variable, Lora, serif',
            color: 'var(--tw-prose-body)',
            maxWidth: 'none',
            h4: {
              fontSize: '1.75rem',
              lineHeight: '2.25rem',
              fontWeight: '700',
            },
            h5: {
              fontSize: '1.5rem',
              lineHeight: '2rem',
              fontWeight: '700',
            },
            blockquote: {
              borderLeftColor: '#0267ff',
              fontStyle: 'italic',
            },
          },
        },
      },
    },
  },
  plugins: [typography],
} satisfies Config;
