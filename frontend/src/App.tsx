import { BrowserRouter, Route, Routes } from "react-router";
import { MainLayout } from "./layouts/main";
import { TrpcProvider } from "./lib/trpc";
import { Article } from "./pages/Article";
import { Main } from "./pages/MainPage";
import { AppRoutes } from "./routes";

export const App = () => {
	return (
		<TrpcProvider>
			<BrowserRouter>
				<Routes>
					<Route element={<MainLayout />}>
						<Route path={AppRoutes.main} element={<Main />} />
						<Route path={AppRoutes.article} element={<Article />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</TrpcProvider>
	);
};
