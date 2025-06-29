export const AppRoutes = {
	main: "/",
	article: "/article/:slug"
} as const;

export type RouteKeys = keyof typeof AppRoutes;
