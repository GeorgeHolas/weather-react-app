/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'main-bg': "url('https://img.freepik.com/free-vector/sky-background-video-conferencing_23-2148639325.jpg?t=st=1715903772~exp=1715907372~hmac=dfafe8f9498f5c3a46c9515267321699936f4155f419a90c3dfc880cba578547&w=1380')",
      },
    },
  },
  plugins: [],
}
