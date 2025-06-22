import { trpc } from "../../lib/trpc";

export const Main = () => {
	const { data, isLoading, isError } = trpc.getThoughts.useQuery();

	if (isLoading) {
		return <span>Loading</span>
	}
	if (isError) {
		return <span>Error message</span>
	}

	return (
		<main>
			<h1>Hello</h1>
			{data?.thoughts.map(el => (
				<div className="" key={el.name}>
					<h2>{el.name}</h2>
					<p>{el.description}</p>
					<span>{el.nick}</span>
				</div>
			))}
		</main>
	)
}