import { Link } from "react-router";
import { trpc } from "../../lib/trpc";

export const Main = () => {
	const { data, isLoading, isError } = trpc.getThoughts.useQuery();

	if (isLoading) {
		return <span>Loading</span>;
	}
	if (isError) {
		return <span>Error message</span>;
	}

	return (
		<main>
			<h1>Hello</h1>
			{data?.thoughts.map((el) => (
				<div className="" key={el.name}>
					<h2>
						<Link to={`/article/${el.nick}`}>{el.name}</Link>
					</h2>
					<p>{el.description}</p>
					<span>{el.nick}</span>
				</div>
			))}
		</main>
	);
};
