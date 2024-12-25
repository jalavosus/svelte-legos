import { eventListenerStore } from "$lib/stores/eventListenerStore";
import ConfirmAlert from "./ConfirmAlert";

interface ConfirmActionParams {
	title: string;
	description: string;
	onCancel?: () => void;
	onConfirm?: () => void;
	cancelText?: string;
	confirmText?: string;
}

export function confirmAction<T extends HTMLElement>(node: T, params: ConfirmActionParams) {
	let stop: () => void;

	const destroy = () => {
		stop && stop();
	};

	let alert: ConfirmAlert | undefined;

	const update = (params: ConfirmActionParams) => {
		destroy();

		const makeCleanup =
			(fn?: () => void): () => void =>
				() => {
					fn?.();
					alert?.unmount();
				}

		function handleClick() {
			alert = new ConfirmAlert({
				...params,
				onCancel: makeCleanup(params.onCancel),
				onConfirm: makeCleanup(params.onConfirm),
			});

			alert.mount();
		}

		({ stop } = eventListenerStore("click", handleClick, node));
	};

	update(params);

	return {
		update,
		destroy,
	};
}
