const defaultTheme = require('tailwindcss/defaultTheme')


module.exports = {
    theme: {
        extend: {
            fontFamily: {
              'sans': ['Inter', ...defaultTheme.fontFamily.sans],
            },
        }
    },
    plugins: [],
    content: [
      `components/**/*.{vue,js}`,
      `layouts/**/*.vue`,
      `pages/**/*.vue`,
      `composables/**/*.{js,ts}`,
      `plugins/**/*.{js,ts}`,
      `App.{js,ts,vue}`,
      `app.{js,ts,vue}`
    ]

}