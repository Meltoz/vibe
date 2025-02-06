
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        ruska: 'ruska',
        roboto: 'Roboto'
      },
      colors: {
        vgreen:'#D2DA90',
        vpink: '#E4819B',
        vblue: '#99B8E2'
      }
    }
  },
  plugins: [],
}

