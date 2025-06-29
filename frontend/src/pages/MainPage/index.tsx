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
			{data?.thoughts.map((item) => (
				<div className="" key={item.name}>
					<h2>
						<Link to={`/article/${item.nick}`}>{item.name}</Link>
					</h2>
					<p>{item.description}</p>
					<span>{item.nick}</span>
				</div>
			))}
		</main>
	);
};
