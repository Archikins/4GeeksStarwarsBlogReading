import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

import { Demo } from "./demo";

export const Home = () => (
	<div className="text-center mt-5">
		<p id="start">A short time ago in a browser very, very close&hellip;</p>

		<h1>STAR WARS<sub>by 4Geeks</sub></h1>

		<div id="titles">
			<div id="titlecontent">

				<p className="center">STAR WARS BLOG<br />
					CHARACTERS, PLANETS & STARSHIPS</p>

				<p>It's a simple blog</p>

				<p>Here you are gonna find informartion about the characters, starships and planets that are part of the STAR WARS universe, keep in mind that all the info is from SWAPI</p>

				<p>This blog is made with JS | React | HTML | CSS by a very skillfull jedi, well not yet, the Padawan is training to become a Jedi.</p>

				
			</div>
		</div>
	</div>
);
