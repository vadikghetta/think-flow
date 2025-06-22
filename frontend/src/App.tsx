import { TrpcProvider } from "./lib/trpc";
import { Main } from "./pages/MainPage";

export const App = () => {


	return (
		<TrpcProvider>
			<Main />
		</TrpcProvider>
	);
}

