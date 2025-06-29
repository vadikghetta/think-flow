import { initTRPC } from "@trpc/server";
import _ from "lodash";
import { z } from "zod";

const thoughts = _.times(100, (i) => ({
	nick: `cool-article-nick-${i}`,
	name: `Idea ${i}`,
	description: `Description of article ${i}...`,
	text: _.times(100, (j) => `<p>Text paragraph ${j} of article</p>`).join("")
}));

const trpc = initTRPC.create();

export const trpcRouter = trpc.router({
	getThoughts: trpc.procedure.query(() => {
		return { thoughts: thoughts.map((item) => _.pick(item, ["nick", "name", "description"])) };
	}),
	getArticle: trpc.procedure
		.input(
			z.object({
				slug: z.string()
			})
		)
		.query(({ input }) => {
			const element = thoughts.find((el) => el.nick === input.slug);
			return { article: element ?? null };
		})
});

export type TrpcRouter = typeof trpcRouter;
