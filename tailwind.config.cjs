/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}",
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#202C5B',
        secondary: '#226796',
        tertiary: '#23A0D0',
        quaternary: '#30AFC1',
        quinary: '#3CBEB3',
        accent: '#FFD166',
        accent2: '#FF9E6D'
      },
      fontFamily: {
        'arabic-heading': ['Noto Naskh Arabic', 'serif'],
        'arabic-body': ['Almarai', 'sans-serif']
      },
      backgroundImage: {
        'gradient-theme': 'linear-gradient(135deg, #202C5B 0%, #226796 25%, #23A0D0 50%, #30AFC1 75%, #3CBEB3 100%)',
        'gradient-line': 'linear-gradient(to right, #202C5B, #226796, #23A0D0, #30AFC1, #3CBEB3)',
        'gradient-seal': 'linear-gradient(135deg, #202C5B 0%, #226796 50%, #23A0D0 100%)',
        'gradient-text': 'linear-gradient(to right, #FFD166, #FF9E6D)',
        'image-header': "linear-gradient(rgba(32, 44, 91, 0.85), rgba(34, 103, 150, 0.9)), url('https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')"
      }
    }
  },
  plugins: [],
}