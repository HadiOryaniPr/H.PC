/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*{.html,js}", "./node_modules/flowbite/**/*.js"],
    theme: {

        extend: {
            colors: {
                "Primary": "#2cbca9"
            },
            fontFamily: {
                "nahid": "nahid"
            }
        },
    },
    plugins: [
        require('flowbite/plugin')
    ],
}