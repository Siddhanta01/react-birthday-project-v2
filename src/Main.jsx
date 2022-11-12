// importing React
import React from "react";
import { Box, Grid, GridItem, Image } from "@chakra-ui/react";
import Typewriter from "typewriter-effect";

// image imports
import birthdayBoy from "./assets/soumojit.webp";
import birthdayBoyMask from "./assets/soumojit-mask.webp";
import birthdayBoySimple from "./assets/soumojit-simple.webp";
import birthdayBoySpokesman from "./assets/soumojit-spokesman.webp";

import GiftCard from "./GiftCard";
import { Fade } from "react-awesome-reveal";

// importing animation

// importing radio button components
/* import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { grey } from "@mui/material/colors"; */

function Main() {
	return (
		<>
			<Fade cascade delay={1000} damping={1}>
				<div
					id="topWish"
					className="relative flex flex-col bg-purple-800 justify-center items-center p-5 sm:p-10 rounded-3xl shadow-slate-800 shadow-md duration-700"
				>
					{/* <h1 className="screen font-bold tracking-wider text-white"></h1> */}
					<Grid
						className="pt-2"
						templateColumns={{ md: "repeat(2, 1fr)" }}
						gap={"10"}
					>
						<Fade triggerOnce cascade delay={2000} duration={1000} damping={1}>
							<GridItem>
								<Image
									className="rounded-2xl md:rounded-3xl brightness-95"
									src={birthdayBoy}
									alt=""
								/>
							</GridItem>

							<GridItem>
								<Image
									className="rounded-2xl md:rounded-3xl brightness-90 contrast-125"
									src={birthdayBoySpokesman}
									alt=""
								/>
							</GridItem>

							<GridItem>
								<Image
									className="rounded-2xl md:rounded-3xl  brightness-90 contrast-125"
									src={birthdayBoyMask}
									alt=""
								/>
							</GridItem>

							<GridItem>
								<Image
									className="rounded-2xl md:rounded-3xl  brightness-90 contrast-125"
									src={birthdayBoySimple}
									alt=""
								/>
							</GridItem>
						</Fade>
					</Grid>

					<Box w={"full"} my={{ base: "2", md: "4" }}>
						<Box
							py={{ base: "4", md: "7" }}
							// style={opacityAnimation}
							className="text-white text-center font-Poppins font-bold uppercase"
							letterSpacing={{ base: "wider", md: "widest" }}
							lineHeight={{ base: "1", md: "1.2" }}
							fontSize={{ base: "2rem", md: "4rem" }}
						>
							<Fade delay={1500} cascade damping={0.1}>
								Happy Birthday
							</Fade>
						</Box>

					</Box>

					<Box
						id="tagline"
						className="rounded-3xl transition-all duration-500 pb-2"
					>
						<Box
							className="text-cyan-100 text-center tracking-wide md:tracking-wider font-semibold"
							lineHeight={{ base: "1.2", md: "1.2" }}
							fontSize={{ base: "1.5rem", md: "3rem" }}
						>
							<Fade delay={3000} duration={500}>
								<Typewriter
									onInit={(typewriter) => {
										typewriter
											.pauseFor(4500)
											// 1st String
											.typeString(
												"I shall keep moving <Strong>Forward</Strong> until my <Strong>Dreams</Strong> Become <Strong>The REALITY </REALITY></Strong>"
											)
											.pauseFor(3500)
											.changeDeleteSpeed(20)
											.deleteChars(29)
											// 2nd String
											.typeString("I <Strong>ISEKAI </Strong>")
											.pauseFor(3500)
											.deleteChars(9)
											.pauseFor(3500)
											// 3rd String
											.typeString("I free The <Strong>ONE PIECE </Strong>")
											.pauseFor(3500)
											.deleteAll()
											// 4th String
											.typeString("I Love <Strong>JAPAN </Strong>")
											.pauseFor(3500)
											.deleteChars(6)
											// 5th String
											.typeString("<Strong>Manga </Strong>")
											.pauseFor(3500)
											.deleteChars(6)
											// 6th String
											.typeString("<Strong>Anime</Strong>")
											.pauseFor(3500)
											.deleteChars(6)
											.typeString("Early <Strong>AGING </Strong> ")
											.pauseFor(3500)
											.start();
									}}
									options={{ loop: true }}
								/>
							</Fade>
						</Box>
					</Box>
				</div>
				<Fade delay={1e3} duration={1000}>
					<GiftCard />
				</Fade>
			</Fade>
		</>
	);
}

export default Main;
