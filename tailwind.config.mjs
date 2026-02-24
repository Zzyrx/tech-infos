import typography from '@tailwindcss/typography';

// Importer la couleur depuis site-config
// NOTE : Tailwind config est evalue avant le build Astro,
// donc on definit la palette niche ici directement.
// Modifier cette palette selon la niche du site.

// Palette niche : violet (tech-infos)
const nichePalette = {
  50: '#faf5ff', 100: '#f3e8ff', 200: '#e9d5ff', 300: '#d8b4fe',
  500: '#a855f7', 600: '#9333ea', 700: '#7e22ce', 900: '#4a1d7e',
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  safelist: [
    // Classes dynamiques generees par siteConfig.color.primary
    // Adapter le pattern si le nom de la palette change
    { pattern: /bg-niche-(50|100|500|600|700)/ },
    { pattern: /from-niche-(50|500|600|700)/ },
    { pattern: /to-niche-(600|700|900)/ },
    { pattern: /via-niche-600/ },
    { pattern: /border-niche-(200|500)/ },
    { pattern: /text-niche-(600|700|900)/ },
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Newsreader', 'Georgia', 'Cambria', 'serif'],
        body: ['Outfit', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['Newsreader', 'Georgia', 'Cambria', 'serif'],
        sans: ['Outfit', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        // Palette chaude editoriale (commune a tous les sites)
        cream: '#faf8f5',
        warm: {
          50: '#faf8f5',
          100: '#f5f0ea',
          200: '#e8e4df',
          300: '#d4cec7',
          400: '#9c9590',
          500: '#6b6560',
          600: '#4a4540',
          700: '#35312d',
          800: '#252220',
          900: '#1a1a1a',
        },
        // Palette niche unique
        niche: nichePalette,
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.warm.700'),
            '--tw-prose-headings': theme('colors.warm.900'),
            color: theme('colors.warm.700'),
            lineHeight: '1.8',
            'table': {
              borderCollapse: 'separate',
              borderSpacing: '0',
              width: '100%',
              borderRadius: theme('borderRadius.xl'),
              overflow: 'hidden',
              border: `1px solid ${theme('colors.warm.200')}`,
            },
            'thead': {
              backgroundColor: theme('colors.warm.900'),
              color: theme('colors.white'),
            },
            'thead th': {
              padding: `${theme('spacing.3')} ${theme('spacing.4')}`,
              fontWeight: '600',
              fontSize: theme('fontSize.sm')[0],
              textTransform: 'uppercase',
              letterSpacing: theme('letterSpacing.wide'),
              color: theme('colors.white'),
              borderBottom: 'none',
              fontFamily: theme('fontFamily.body').join(', '),
            },
            'tbody tr': {
              borderBottomWidth: '1px',
              borderBottomColor: theme('colors.warm.100'),
            },
            'tbody tr:nth-child(even)': {
              backgroundColor: theme('colors.warm.50'),
            },
            'tbody td': {
              padding: `${theme('spacing.3')} ${theme('spacing.4')}`,
              fontSize: theme('fontSize.sm')[0],
            },
            'blockquote': {
              borderLeftColor: theme('colors.warm.300'),
              borderLeftWidth: '3px',
              backgroundColor: theme('colors.warm.50'),
              borderRadius: theme('borderRadius.lg'),
              padding: theme('spacing.5'),
              fontStyle: 'italic',
              color: theme('colors.warm.600'),
            },
            'blockquote p:last-child': {
              marginBottom: '0',
            },
            'li': {
              marginTop: theme('spacing.1'),
              marginBottom: theme('spacing.1'),
            },
            'strong': {
              color: theme('colors.warm.900'),
              fontWeight: '700',
            },
            'a': {
              color: theme('colors.warm.900'),
              textDecoration: 'underline',
              textDecorationColor: theme('colors.warm.300'),
              textUnderlineOffset: '3px',
              fontWeight: '500',
              transition: 'text-decoration-color 0.2s',
              '&:hover': {
                textDecorationColor: theme('colors.warm.900'),
              },
            },
            'code': {
              backgroundColor: theme('colors.warm.100'),
              padding: '2px 6px',
              borderRadius: theme('borderRadius.md'),
              fontWeight: '500',
              fontSize: '0.875em',
              color: theme('colors.warm.800'),
            },
            'code::before': { content: '""' },
            'code::after': { content: '""' },
            'h1, h2, h3, h4': {
              fontFamily: theme('fontFamily.display').join(', '),
              color: theme('colors.warm.900'),
            },
          },
        },
      }),
    },
  },
  plugins: [typography],
};
