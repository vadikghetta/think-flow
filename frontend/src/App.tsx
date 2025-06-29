import { BrowserRouter, Route, Routes } from "react-router";
// import { articleParams, getArticlePageRoute, getMainPageRoute } from "./lib/routes";
import { TrpcProvider } from "./lib/trpc";
import { Article } from "./pages/Article";
import { Main } from "./pages/MainPage";
import { AppRoutes } from "./routes";

export const App = () => {
	return (
		<TrpcProvider>
			<BrowserRouter>
				<Routes>
					<Route path={AppRoutes.main} element={<Main />} />
					<Route path={AppRoutes.article} element={<Article />} />
				</Routes>
			</BrowserRouter>
		</TrpcProvider>
	);
};
