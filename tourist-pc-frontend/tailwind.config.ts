export default {
  content: ['./components/**/*.{vue,js,ts}', './pages/**/*.vue', './app.vue'],
  theme: {
    extend: {
      colors: {
        ink: '#342b25',
        clay: '#b64b32',
        moss: '#48635a',
        paper: '#f4efe6',
        sand: '#e9ddca'
      },
      fontFamily: {
        display: ['Georgia', 'serif'],
        sans: ['"PingFang SC"', '"Microsoft YaHei"', 'sans-serif']
      }
    }
  }
};
