/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // ─── SMARP brand ──────────────────────────────────────────────────────
        // Deep ink navy — confident authority, not cold corporate blue
        'smarp-navy':  '#0C2340',
        // Forest teal — healing, clarity, precision
        'smarp-teal':  '#0A7265',
        // Warm brass gold — reserved for certification / trust signals only
        'smarp-gold':  '#B8892A',

        // ─── Surface — warm parchment palette ────────────────────────────────
        // The defining aesthetic shift: cream warmth replaces cold blue-gray
        'surface-container':         '#E4DDD3',
        'surface-container-lowest':  '#FFFFFF',
        'surface-container-low':     '#EDE8DF',   // alternate section background
        'surface-container-high':    '#D9D0C3',
        'surface-container-highest': '#CEC4B5',
        'surface-dim':               '#C5BAA9',
        'surface-bright':            '#FFFFFF',
        'surface-tint':              '#1456A0',
        'surface-variant':           '#EAE4DB',
        'surface':                   '#FFFFFF',   // card faces — crisp white on cream
        'background':                '#F5F1EA',   // warm parchment — main page bg

        // ─── Text — deep navy-black for authority, warm muted for body ────────
        'on-background':             '#0F1A2B',
        'on-surface':                '#0F1A2B',
        'on-surface-variant':        '#5C6478',   // warm blue-gray body text

        // ─── Primary — confident refined blue ────────────────────────────────
        'primary':                   '#1456A0',
        'primary-fixed':             '#E3EBF7',
        'primary-fixed-dim':         '#B8CEF0',
        'primary-container':         '#1456A0',
        'on-primary':                '#FFFFFF',
        'on-primary-fixed':          '#001C3A',
        'on-primary-fixed-variant':  '#0E3B7A',
        'on-primary-container':      '#FFFFFF',
        'inverse-primary':           '#B8CEF0',

        // ─── Secondary ────────────────────────────────────────────────────────
        'secondary':                 '#476080',
        'secondary-fixed':           '#D8E5F8',
        'secondary-fixed-dim':       '#AFC6EC',
        'secondary-container':       '#BAD0F4',
        'on-secondary':              '#FFFFFF',
        'on-secondary-fixed':        '#001C3A',
        'on-secondary-fixed-variant':'#2F4A6A',
        'on-secondary-container':    '#3A5578',

        // ─── Tertiary — forest teal ───────────────────────────────────────────
        'tertiary':                  '#0A7265',
        'tertiary-fixed':            '#C5EDE9',
        'tertiary-fixed-dim':        '#8ED5CF',
        'tertiary-container':        '#0A6055',
        'on-tertiary':               '#FFFFFF',
        'on-tertiary-fixed':         '#00201D',
        'on-tertiary-fixed-variant': '#066058',
        'on-tertiary-container':     '#FFFFFF',

        // ─── Status ───────────────────────────────────────────────────────────
        'error':                     '#C0392B',
        'error-container':           '#FFE4E1',
        'on-error':                  '#FFFFFF',
        'on-error-container':        '#93000A',

        // ─── Structure ────────────────────────────────────────────────────────
        'outline':                   '#8C8275',
        'outline-variant':           '#CCC3B7',
        'inverse-surface':           '#24201A',
        'inverse-on-surface':        '#F5F1EA',
      },
      fontFamily: {
        // Playfair Display: editorial, authoritative serif — signals expertise & tradition
        headline: ['Playfair Display', 'Georgia', 'serif'],
        // DM Sans: humanist, clean, highly legible — avoids the generic Inter trap
        body:     ['DM Sans', 'system-ui', 'sans-serif'],
        label:    ['DM Sans', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '0.25rem',
        lg:      '0.5rem',
        xl:      '0.75rem',
        '2xl':   '1rem',
        '3xl':   '1.5rem',
        full:    '9999px',
      },
    },
  },
  plugins: [],
};
