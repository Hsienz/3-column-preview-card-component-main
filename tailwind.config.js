/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./*.html"],
	theme: {
		extend: {
			colors: {
				test: "#777",
				Bright_orange: "hsl(31, 77%, 52%)",
				Dark_cyan: "hsl(184, 100%, 22%)",
				Very_dark_cyan: "hsl(179, 100%, 13%)",
				Transparent_white /*(paragraphs)*/: "hsla(0, 0%, 100%, 0.75)",
				Very_light_gray /*(background, headings, buttons)*/:
					"hsl(0, 0%, 95%)",
			},
			fontFamily: {
				Big_Shoulders_Display: ['Big Shoulders Display', 'cursive'],
				Lexend_Deca: ['Lexend Deca', 'sans-serif']
			},
			fontSize: {
				base: ['15px', '24px']
			}
		},
	},
	plugins: [],
};
