"use client";

import { useState } from "react";
import { WeightSample } from "./components/weight-samples/weight-samples";

const weights = ['ExtraLight', 'Light', 'Regular', 'Medium', 'Bold', 'ExtraBold']

export default function Home() {
	const [font, setFont] = useState<"fulie" | "elian">("fulie");

	return (
		<div>
			<section className="page-wrap" data-font={font}>
				<nav>
					<ul className="font-size-20">
						<li>
							<button type="button" aria-pressed={font === "fulie"} onClick={() => setFont("fulie")}>
								Fulie
							</button>
						</li>
						<li>
							<button type="button" aria-pressed={font === "elian"} onClick={() => setFont("elian")}>
								Elian
							</button>
						</li>
					</ul>
				</nav>
				{
					weights.map(weight => (
						<WeightSample
							key={weight}
							fontName={font === "fulie" ? "Fulie" : "Elian"}
							name={weight}
						/>
					))
				}
			</section>
		</div>
	);
}
