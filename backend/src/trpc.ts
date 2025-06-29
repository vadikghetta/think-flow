import { initTRPC } from "@trpc/server";
import _ from "lodash";

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
	})
});

export type TrpcRouter = typeof trpcRouter;
