export function focusAction<T extends HTMLElement>(node: T, value = true) {
	let stop: () => void;

	const destroy = () => {
		// @ts-ignore this is fine
		stop?.();
	};

	const update = (value: boolean) => {
		destroy();

		if (value) {
			node.focus();
		} else {
			node.blur();
		}
	};

	update(value);

	return {
		update,
		destroy
	};
}
