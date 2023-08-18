/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

const Myclass = plugin(function ({ addUtilities }) {
  addUtilities({
    '.my-rotate-y-180': {
      transform: 'rotateY(180deg)',
    },
    '.preserve-3d': {
      transformStyle: 'preserve-3d',
    },
    '.perspective': {
      perspective: '1000px',
    },
    '.backface-hidden': {
      backfaceVisibility: 'hidden',
    },
  });
});
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('../public/assets/BGimage/Herro.svg')",
        baner: "url('../public/assets/OfferBner/offersnew.svg')",
        BGFooter: "url('../public/assets/Footer/footerimage.svg')",
        BGSSilder: "url('../public/assets/Slider/sliderbg.svg')",
        Gaming: "url('../public/assets/Gamagingpage/computer.svg')",
        Lepyheder: "url('../public/assets/Laptops/lepyheder.svg')",
        MonterHeder: "url('../public/assets/Moneter/MonterHeder.svg')",
        headerkeybord:
          "url('../public/assets/keybordLaptop/headerkeybord.svg')",
        StorageHeader: "url('../public/assets/Storage/StorageHeder.svg')",
        CPUSFF: "url('../public/assets/CPUSFF/CPU.svg')",
        CPUSFF1: "url('../public/assets/Footer/mobaiFoot.svg')",
        Mobail: "url('../public/assets/Footer/mobaiFoot.svg)",
        mobailbotem: "url('../public/assets/NavbarIcon/Subtraction.png)",
      },
    },
  },
  plugins: [Myclass],
};
