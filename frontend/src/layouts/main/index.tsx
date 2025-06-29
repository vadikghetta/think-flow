import { Link, Outlet } from "react-router";

import { AppRoutes } from "../../routes";
export const MainLayout = () => {
	return (
		<>
			<header>
				<strong>Think Flow</strong>
				<nav>
					<ul>
						<li>
							<Link to={AppRoutes.main}>All articles</Link>
						</li>
					</ul>
				</nav>
			</header>
			<main>
				<Outlet />
			</main>
		</>
	);
};
