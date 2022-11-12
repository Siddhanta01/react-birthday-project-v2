import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";
import { Fade } from "react-awesome-reveal";

function DarkCard(props) {
	const { charactersData } = props;

	const charactersComponents = charactersData.map((character) => {
		const {
			id: name,
			url: video,
			poster,
			brightness,
			contrast,
			/* 			color,
			tagLine: codeName, */
		} = character;

		return (
			<SplideSlide
				key={name}
				id="character-cards"
				className="bg-black rounded-3xl shadow-md transition-all"
			>
				<video
					src={video}
					muted={true}
					autoPlay={true}
					loop={true}
					poster={poster}
					// srcSet={`${imageSmall} 320w, ${imageMedium} 680w, ${imageLarge}   960w, ${imageXLarge} 1980w`}
					alt=""
					className={"rounded-2xl duration-300 " + brightness + contrast}
				/>

				{/* <div className="flex items-center justify-center">
					<h2
						className={
							"text-4xl capitalize tracking-widest text-center font-Poppins font-semibold py-5 " +
							color
						}
					>
						{codeName}
					</h2>
				</div> */}
			</SplideSlide>
		);
	});
	return (
		<Fade triggerOnce delay={500}>
			<Splide
				aria-label="My Favorite Images"
				id="darkCard"
				className="flex flex-wrap bg-black justify-center items-center rounded-3xl duration-700"
				options={{
					gap: "2rem",
					rewind: true,
					padding: 12,
					speed: 1000,
					waitForTransition: false,
				}}
			>
				{charactersComponents}
			</Splide>
		</Fade>
	);
}

export default DarkCard;
