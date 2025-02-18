import type { ActionReturn } from "svelte/action";

interface Attributes {
	onclickoutside?: (e: CustomEvent<void>) => void;
}

type Callback = () => unknown;

export function clickOutsideAction(
	node: HTMLElement,
	callback?: Callback
	// eslint-disable-next-line @typescript-eslint/no-empty-object-type
): ActionReturn<{}, Attributes> {
	const handleClick = (event: Event) => {
		if (event.target !== null && !node.contains(event.target as Node)) {
			node.dispatchEvent(new CustomEvent("clickoutside"));
			callback?.();
		}
	};

	document.addEventListener("click", handleClick, true);

	return {
		destroy() {
			document.removeEventListener("click", handleClick, true);
		}
	};
}
