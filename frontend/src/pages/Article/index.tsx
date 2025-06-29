import { useParams } from "react-router";
import type { ArticleRouteParams } from "../../lib/routes";

export const Article = () => {
	const { slug } = useParams<ArticleRouteParams>();
	return (
		<main>
			<h1>Title {slug}</h1>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad maiores odio deserunt reiciendis odit, optio
				perspiciatis laboriosam repudiandae modi eligendi quis ratione, voluptatibus quaerat hic doloribus ullam
				ipsum alias repellendus.
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nulla asperiores dolore quas. Quisquam
				minus quaerat sapiente excepturi culpa laudantium numquam fugiat voluptate eius saepe corrupti
				accusamus, consequuntur a blanditiis!
			</p>
			<p>Lore</p>
		</main>
	);
};
