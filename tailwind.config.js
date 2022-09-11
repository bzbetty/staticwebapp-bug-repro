const themeSwapper = require("tailwindcss-theme-swapper");
const plugin = require("tailwindcss/plugin");
/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ["./app/**/*.{js,jsx,ts,tsx}", "./index.html"],
    safelist: [{ pattern: /^col-span-/ }, { pattern: /w-\d+\/12/ }, "w-[30rem]", "w-[60rem]", "w-[80rem]", "w-[32rem]", "w-[62rem]", "w-[82rem]", "-translate-x-[30rem]", "-translate-x-[60rem]", "-translate-x-[80rem]", "left-[calc(100%-30rem)]", "left-[calc(100%-60rem)]", "left-[calc(100%-80rem)]", "pl-0", "pl-8", "pl-16", "pl-24", "pl-32", "pl-40", "pl-48"],
    theme: {
        colors: {
            black: "#151729",
            "dark-grey": "#4F515E",
            "mid-grey": "#8A8B94",
            "light-grey": "#C7C7CD",
            "subtle-grey": "#E8EAEC",
            "lighter-grey": "#F0F0F1",
            background: "#F2F6FC",
            "background-dark": "#E8EFF8",
            "background-grey": "#F8F9FA",
            "accent-purple": "#3E66FB",
            "accent-light": "rgba(62,102,251,0.35)",
            "accent-subtle": "rgba(62,102,251,0.1)",
            "accent-navy": "#05427A",
            white: "#FFFFFF",
            transparent: "transparent",

            yellow: {
                20: "#FCEAC6",
                60: "#F9D58D",
                80: "#EBC03E",
                100: "#DDB12F",
            },
            green: {
                20: "#CEEFCE",
                40: "#AAE4AA",
                60: "#82CC82",
                100: "#2E9D5D",
                200: "#3CC13B",
            },
            blue: {
                20: "#97C4ED",
                60: "#4F94D4",
                100: "#1360A8",
                500: "#3B82F6",
                600: "#3E66FB",
            },
            red: {
                20: "#FBCDCD",
                60: "#F79B9B",
                100: "#EB5757",
                200: "#F03738",
            },
        },
        extend: {
            dropShadow: {
                modal: "1px 1px 6px 0 rgba(0,0,0,0.15)",
            },
            boxShadow: {
                card: "1px 1px 6px 0 rgba(0,0,0,0.15)",
                contextmenu: "1px 3px 6px 0 rgba(1,18,33,0.15)",
            },
            zIndex: {
                100: "100",
                90: "90",
                80: "80",
                70: "70",
                60: "60",
            },
        },
    },
    plugins: [
        require("@tailwindcss/forms"),
        plugin(({ addVariant }) => {
            addVariant("collapse", ".collapse &");
            addVariant("theme-first", ".theme-first &");
            addVariant("theme-altherm", ".theme-altherm &");
            addVariant("theme-vantage", ".theme-vantage &");
            addVariant("theme-aws", ".theme-aws &");
            addVariant("selected", "&.selected");
            addVariant("group-selected", ".group-selected &");
            addVariant("popup", ".popup &");
            addVariant("factory-sidebar", ".factory-sidebar &");
            addVariant("dialog", ".dialog &");
        }),
        themeSwapper({
            themes: [
                // The only required theme is `base`. Every property used in
                // other themes must exist in here.
                {
                    name: "base",
                    selectors: [":root", ".theme-default"],
                    theme: {
                        colors: {
                            primary: "#01263A",
                            secondary: "#13486B",
                            "light-text": "#F2F3F0",
                            "nav-hover": "rgba(255,255,255,0.15)",
                            "nav-active": "#FFFFFF",
                            button: "#3E66FB",
                            "button-hover": "#DFEFFE",
                            sb: "#01263A",
                            "sb-nav": "#97C4ED",
                            "sb-nav-count": "#DDB12F",
                            "sb-nav-bg-hover": "rgba(255,255,255,0.15)",
                            "sb-icon": "#97C4ED",
                            "sb-icon-hover": "#82CC82",
                            "sb-user-avatar": "#3E66FB",
                            "sb-divider": "#3582C4",
                            "sb-button": "#F0F6FC",
                            "sb-button-text": "#000000",
                        },
                    },
                },
                {
                    name: "first",
                    selectors: [".theme-first"],
                    theme: {
                        colors: {
                            primary: "#003B71",
                            secondary: "#074781",
                            "light-text": "#F9F6F4",
                            "nav-hover": "rgba(255,255,255,0.12)",
                            "nav-active": "#00AFAA",
                            button: "#00AFAA",
                            "button-hover": "#195B98",
                            sb: "#003B71",
                            "sb-nav": "#F9F6F4",
                            "sb-nav-count": "#DDB12F",
                            "sb-nav-bg-hover": "rgba(255,255,255,0.12)",
                            "sb-icon": "#F9F6F4",
                            "sb-icon-hover": "#00AFAA",
                            "sb-user-avatar": "#2E9D5D",
                            "sb-button": "#28669F",
                            "sb-button-text": "#FFFFFF",
                        },
                    },
                },
                {
                    name: "vantage",
                    selectors: [".theme-vantage"],
                    theme: {
                        colors: {
                            primary: "#000000",
                            secondary: "#2A2B2D",
                            "light-text": "#DBDBDB",
                            "nav-hover": "rgba(255, 255, 255, 0.18)",
                            "nav-active": "#82BC5A",
                            button: "#82BC5A",
                            "button-hover": "#585A5F",
                            sb: "#000000",
                            "sb-nav": "#FFFFFF",
                            "sb-nav-count": "#DDB12F",
                            "sb-nav-bg-hover": "rgba(255,255,255,0.18)",
                            "sb-icon": "#FFFFFF",
                            "sb-icon-hover": "#82BC5A",
                            "sb-user-avatar": "#2E9D5D",
                            "sb-divider": "#3582C4",
                            "sb-button": "#505255",
                            "sb-button-text": "#FFFFFF",
                        },
                    },
                },
                {
                    name: "altherm",
                    selectors: [".theme-altherm"],
                    theme: {
                        colors: {
                            primary: "#042B45",
                            secondary: "#0B3E60",
                            "light-text": "#F2F3F0",
                            "nav-hover": "rgba(255,255,255,0.15)",
                            "nav-active": "#82CC82",
                            button: "#AA493E",
                            "button-hover": "#246590",
                            sb: "#042B45",
                            "sb-nav": "#FFFFFF",
                            "sb-nav-count": "#DDB12F",
                            "sb-nav-bg-hover": "rgba(255,255,255,0.15)",
                            "sb-icon": "#FFFFFF",
                            "sb-icon-hover": "#82CC82",
                            "sb-user-avatar": "#2E9D5D",
                            "sb-divider": "#3582C4",
                            "sb-button": "#1F5A81",
                            "sb-button-text": "#FFFFFF",
                        },
                    },
                },
                {
                    name: "aws",
                    selectors: [".theme-aws"],
                    theme: {
                        colors: {
                            primary: "#000000",
                            secondary: "#333638",
                            "light-text": "#EAE9E8",
                            "nav-hover": "#FFFFFF",
                            "nav-active": "#82CC82",
                            button: "#46474A",
                            "button-hover": "#585A5F",
                            sb: "#000000",
                            "sb-nav": "#FFFFFF",
                            "sb-nav-count": "#DDB12F",
                            "sb-nav-bg-hover": "FFFFFF",
                            "sb-icon": "#FFFFFF",
                            "sb-icon-hover": "#82CC82",
                            "sb-user-avatar": "#2E9D5D",
                            "sb-divider": "#3582C4",
                            "sb-button": "#515255",
                            "sb-button-text": "#FFFFFF",
                        },
                    },
                },
            ],
        }),
    ],
};
