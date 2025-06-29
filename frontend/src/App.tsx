import { BrowserRouter, Route, Routes } from "react-router";
import { articleParams, getArticlePageRoute, getMainPageRoute } from "./lib/routes";
import { TrpcProvider } from "./lib/trpc";
import { Article } from "./pages/Article";
import { Main } from "./pages/MainPage";

export const App = () => {
	return (
		<TrpcProvider>
			<BrowserRouter>
				<Routes>
					<Route path={getMainPageRoute()} element={<Main />} />
					<Route path={getArticlePageRoute(articleParams)} element={<Article />} />
				</Routes>
			</BrowserRouter>
		</TrpcProvider>
	);
};
