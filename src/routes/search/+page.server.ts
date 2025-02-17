import { all } from "../directories";

import type { Brick } from "./brick";

export const load = () => {
	const bricks: Brick[] = Object.entries(all)
		.map(([category, bricks]) => {
			return bricks.map((brick) => {
				return {
					url: `/guides/${category}/${brick}`,
					text: brick
				};
			});
		})
		.flat();

	try {
		return { bricks };
	} catch (e) {
		console.error(e);
		return { bricks };
	}
};
