module.exports = {
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    colors: {
      gray: { 100: '#CCCCCC', 200: '#333333' },
      white: '#fff',
      black: '#000',
      purple: '#FED3FF',
      'light-blue': '#00E7FE'
    },
    fontFamily: {
      body: 'var(--font-body)',
      heading: 'var(--font-heading)'
    },
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: [],
  mode: 'jit'
}
