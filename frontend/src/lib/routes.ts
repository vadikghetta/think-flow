// export const getMainPageRoute = () => "/";

// const getRouteParams = <T extends Record<string, boolean>>(object: T) => {
// 	return Object.keys(object).reduce(
// 		(acc, current) => ({ ...acc, [current]: `${current}` }),
// 		{} as Record<keyof T, string>
// 	);
// };

// export const articleParams = getRouteParams({ slug: true });
// export type ArticleRouteParams = typeof articleParams;
// export const getArticlePageRoute = ({ slug }: ArticleRouteParams) => `/article/${slug}`;

// export const articleRouteParams = { slug: ":slug" };
// export type ArticleRouteParamsType = { slug: string };

// export const getArticlePageRoute = ({ slug }: { slug: string }) => `/article/${slug}`;
