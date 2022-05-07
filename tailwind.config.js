module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            screens: {
                'xs': '450px',
    
                'sm': '640px',
    
                'md': '768px',
    
                'lg': '1024px',
    
                'xl': '1280px',
    
                '2xl': '1536px',
            },
            colors: {
                bluePrimary: "#007AFF",
                blackPrimary: "#2A3039",
                blackPrimary2: "#2A303980",
                blackPrimary3: "#2A3039B2",
                grayBack: "rgba(241, 239, 241, 0.4);",
                grayBack2: "#F1EFF166"
            },
            boxShadow: {
                top: '0px 0px 34px rgba(0, 0, 0, 0.12)',
                card: '14px 14px 84px rgba(0, 0, 0, 0.11)'
            }
        },
    },
    plugins: [],
}
