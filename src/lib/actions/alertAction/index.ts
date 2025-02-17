import { eventListenerStore } from "$lib/stores/eventListenerStore";
import Alert from "./Alert";

interface AlertActionParams {
	title: string;
	description: string;
	onClose?: () => void;
	onOk?: () => void;
}

export function alertAction<T extends HTMLElement>(node: T, params: AlertActionParams) {
	let stop: () => void;

	const destroy = () => {
		stop?.();
	};

	let alert: Alert | undefined;

	const update = (params: AlertActionParams) => {
		destroy();

		const makeCleanup =
			(fn?: () => void): (() => void) =>
			() => {
				fn?.();
				alert?.unmount();
			};

		function handleClick() {
			alert = new Alert({
				...params,
				onCancel: makeCleanup(params.onClose),
				onConfirm: makeCleanup(params.onOk)
			});

			alert.mount();
		}

		({ stop } = eventListenerStore("click", handleClick, node));
	};

	update(params);

	return {
		update,
		destroy
	};
}
