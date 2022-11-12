// importing images

import yorForger from "../assets/Spy Family/yorDark.mp4";
import yorPoster from "../assets/Spy Family/yor.jpg";
// import anyaForger from "./assets/Spy Family/anya.jpg";
import loidForger from "../assets/Spy Family/loidDark.mp4";
import loidPoster from "../assets/Spy Family/loidDark.jpg";

import echidna from "../assets/Re;0/echidnaDark.mp4";
import echidnaPoster from "../assets/Re;0/echidna.webp";

import luffy from "../assets/One Piece/luffyDark.mp4";
import luffyPoster from "../assets/One Piece/luffyDark.jpg";

import light from "../assets/Death Note/light.mp4";
import lightPoster from "../assets/Death Note/lightDark.jpg";

function darkCharacters() {
	const charactersArr = [
		// Re;

		{
			id: "echidna",
			url: echidna,
			tagLine: "Witch of Greed",
			poster: echidnaPoster,
			// photo edit properties
			color: "text-slate-300",
			brightness: "brightness-120 ",
			contrast: "contrast-100",
		},

		{
			id: "light",
			url: light,
			tagLine: "The Kira",
			poster: lightPoster,
			// photo edit properties
			color: "text-red-400",
			brightness: "brightness-120 ",
			contrast: "contrast-100",
		},

		// Spy X Family

		{
			id: "yor",
			url: yorForger,
			tagLine: "Thorn Princess",
			poster: yorPoster,
			// photo edit properties
			color: "text-red-400",
			// brightness: "brightness-125 ",
		},

		/* {
			id: "anya",
			url: anyaForger,
			tagLine: "Anya Likes Peanut",
			// photo edit properties
			color: "text-red-200",
			brightness: "brightness-90 ",
		}, */

		{
			id: "loid",
			url: loidForger,
			tagLine: "Twilight",
			poster: loidPoster,
			// photo edit properties
			color: "text-green-400",
			// brightness: "brightness-95 ",
			// contrast: "contrast-90",
		},

		// Re;0

		{
			id: "luffy",
			url: luffy,
			tagLine: "Monkey D. Luffy",
			poster: luffyPoster,
			// photo edit properties
			color: "text-green-400",
			brightness: "brightness-100 ",
			contrast: "contrast-100",
		},
	];
	return charactersArr;
}

export default darkCharacters;
