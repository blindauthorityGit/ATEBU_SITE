const plugin = require("tailwindcss/plugin");

module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                beige: "#FAF6E9",
                darkbeige: "#EDE9DD",
                darkerbeige: "#B2AC97",
                brightbeige: "#FFFDF6",
                brightgrey: "#F5F5F5",
                text: "#494949",
            },
            container: {
                center: true,
                padding: {
                    DEFAULT: "2rem",
                },
            },
            fontFamily: {
                sans: ["Montserrat", "sans-serif"],
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [
        plugin(function ({ addBase, theme }) {
            addBase({
                h1: { fontSize: theme("fontSize.2xl") },
                h2: { fontSize: theme("fontSize.xl") },
                h3: { fontSize: theme("fontSize.lg") },
                h4: { fontSize: theme("fontSize.lg") },
            });
        }),
    ],
};
