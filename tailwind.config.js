/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        "ProfessorImage": "url('images/ProfessorImgCHose.png')",
        "EmpresarioImage": "url('images/Empresario.png')",
        "AlunoImage": "url('images/AlunoImg.png')",
      },
    },
  },
  plugins: [],
}
