/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
        "./node_modules/@headlessui/vue/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#16B364",
                dark: "#344054",
                gray: "#F3F4F6",
            },

            fontFamily: {
                primary: ['"Inter", sans-serif'],
            },
        },
    },
    plugins: [],
};
