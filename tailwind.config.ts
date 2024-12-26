import {nextui} from '@nextui-org/theme';
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(breadcrumbs|modal|select|spinner|table|form|listbox|divider|popover|button|ripple|scroll-shadow|checkbox|spacer).js"
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage:{
        bannerImage: "url('/background.png')",
        logo: "url('/logo.png')",
        darkLogo: "url('/logo-escura.png')",
      }
    },
  },
  plugins: [nextui()],
} satisfies Config;
