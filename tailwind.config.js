export default {
    content: ["./index.html", "./**/*.{html,js}"],
    theme: {
        extend: {
            animation: {
                'loop-scroll': 'loop-scroll 50s linear infinite',
            },
            keyframes: {
                'loop-scroll': {
                    from: { transform: 'translateX(0)' },
                    to: { transform: 'translateX(-100%)' },
                },
            },
        },
        fontFamily: {
            poppins: ["Poppins", 'sans-serif'],
        },
    },
    variants: {},
    plugins: [],
}
