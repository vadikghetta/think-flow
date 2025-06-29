import { useParams } from "react-router";
import { trpc } from "../../lib/trpc";

export const Article = () => {
	const { slug } = useParams<{ slug: string }>();
	const { data, error, isError, isLoading } = trpc.getArticle.useQuery({
		slug: slug ?? ""
	});

	if (isLoading) {
		return <span>Loading</span>;
	}
	if (isError) {
		return <span>Error message {error.message}</span>;
	}

	if (!data?.article) {
		return <span>Article not found</span>;
	}
	return (
		<main>
			<h1>{data.article.name}</h1>
			<p>{data.article.description}</p>
			<p dangerouslySetInnerHTML={{ __html: data.article.text }}></p>
			<p>Lore</p>
		</main>
	);
};
