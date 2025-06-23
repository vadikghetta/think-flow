import { createTRPCReact, httpBatchLink } from "@trpc/react-query";
import { type TrpcRouter } from "@think-flow/backend/src/trpc.ts";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { ReactNode } from "react";

export const trpc = createTRPCReact<TrpcRouter>();

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			retry: false,
			refetchOnWindowFocus: false
		}
	}
});
const trpcClient = trpc.createClient({
	links: [
		httpBatchLink({
			url: "http://localhost:8080/trpc"
		})
	]
})

export const TrpcProvider = ({ children }: { children: ReactNode }) => {
	return (
		<trpc.Provider client={trpcClient} queryClient={queryClient}>
			<QueryClientProvider client={queryClient}>
				{children}
			</QueryClientProvider>
		</trpc.Provider>
	)
}