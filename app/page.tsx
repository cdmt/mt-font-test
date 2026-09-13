import Image from "next/image";
import { Weights } from "./components/weights/weights";
import { WeightSamples } from "./components/weight-samples/weight-samples";

export default function Home() {
	return (
		<div>
			<section className="page-wrap">
				<header className="header">
					<h1 className="heading">Fulie Test Page</h1>
				</header>
				<Weights />
				<WeightSamples />
			</section>
		</div>
	);
}
