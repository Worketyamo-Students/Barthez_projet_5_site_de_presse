/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      theme: {
        extend: {
          colors: {
            primary: "#79AC78",
            primary2: "#618264",
            light: "#fff",
            dark: "#000E01"
          },
        
          container: {
            center: true,
            padding: {
              DEFAULT: "20px",
              sm: "32px",
              lg: "48px",
              xl: "64px",
            }
          },
    
          fontFamily: {
            poppins: ["Poppins", "sans-serif"],
            ibm: ["IBM Plex Sans", "sans-serif"]
          }
        },
      },    
    },
  },
  plugins: [],
}