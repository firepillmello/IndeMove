import type { Config } from 'tailwindcss';
export default { content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'], theme: { extend: { colors: { navy: '#172f3b', teal: '#17685e', cream: '#f7f5ef', coral: '#ce7356', mist: '#edf3f3' } } }, plugins: [] } satisfies Config;
