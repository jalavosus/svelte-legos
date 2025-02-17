import Loader from "./Loader";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface LoadingActionParams {}

export function loadingAction<T extends HTMLElement>(node: T, params: LoadingActionParams) {
	let stop: () => void;

	const destroy = () => {
		// @ts-ignore it doesn't _matter_ if it's unassigned...
		stop?.();
	};

	let loader: Loader | undefined;
	let restoreNode = () => {};

	const update = (params: boolean | LoadingActionParams) => {
		if (!params) {
			if (loader) {
				loader.unmount();
				restoreNode();
			}
			return;
		}

		const position = node.style.getPropertyValue("position");
		const overflow = node.style.getPropertyValue("overflow");
		const pointerEvents = node.style.getPropertyValue("pointer-events");

		restoreNode = () => {
			node.style.setProperty("position", position);
			node.style.setProperty("overflow", overflow);
			node.style.setProperty("pointer-events", pointerEvents);
		};

		destroy();

		function prepareNode() {
			node.style.setProperty("position", "relative");
			node.style.setProperty("overflow", "hidden");
			node.style.setProperty("pointer-events", "none");
		}

		prepareNode();
		loader = new Loader();
		loader.mount(node);
	};

	update(params);

	return {
		update,
		destroy
	};
}
