import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/sea-green";
import { Fade } from "react-awesome-reveal";

function LightCard(props) {
	const charactersData = props.charactersData;

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
				className="rounded-3xl transition-all duration-500"
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

				{/* <div className="">
					<h2
						className={
							"bg-purple-600 text-3xl text-center capitalize tracking-widest font-Poppins font-semibold py-5 px-1 " +
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
				id="LightCard"
				className="bg-purple-800 justify-center items-center rounded-3xl duration-700"
				options={{
					gap: "2rem",
					rewind: true,
					padding: 12,
					speed: 1000,
				}}
			>
				{charactersComponents}
			</Splide>
		</Fade>
	);
}

export default LightCard;
